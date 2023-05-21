import { BlogsCard } from "../Blogs.js";

export const Pagination = async ({ title, filename, perPage }) => {
  let collection = [],
    currentPos = 0;

  await fetchAPI(`./Resources/JSON/${filename}`, (data) => {
    collection = data;
  });

  let pages = Math.ceil(collection.length / perPage),
    paginationContainer = createEl(
      "div",
      { class: "pagination-container" },
      createEl("p", { class: "title featured" }, title)
    ),
    pagination = createEl("div", { class: "pagination" }),
    startingLoop = 0;

  for (let i = 0; i < pages; i++) {
    let pages = createEl("div", {
      class: "pagination-pages",
      style: { gridTemplateColumns: `repeat(${perPage}, 1fr)` },
    });

    for (let k = startingLoop; k < collection.length; k++) {
      let contents = collection[k];
      if (k >= perPage * (i + 1)) break;
      pages.append(
        BlogsCard({
          thumbnail: contents.thumbnail,
          image: contents.image,
          author: contents.author,
          date: contents.date,
          title: contents.title,
          desc: contents.desc,
          blogType: contents.blogType,
          fullDesc: contents.fulldesc,
          imageCollection: contents["image-collection"],
        })
      );
    }
    pagination.append(pages);
    startingLoop += perPage;
  }

  function nextPrev({ btn, selectedElement }) {
    let pageWidth = selectedElement.childNodes[0].offsetWidth,
      pagination = selectedElement.childNodes;

    function loopPagination() {
      for (let i = 0; i < pagination.length; i++) {
        pagination[i].style.translate = `-${pageWidth * currentPos}px 0px`;
      }
    }

    if (btn == "prev") {
      currentPos--;
      loopPagination();
      return;
    }
    currentPos++;
    loopPagination();
    return;
  }

  let blogBtn = createEl("div", { class: "blog-btn-container" }, [
    createEl(
      "a",
      { class: "blog-btn prev" },
      createEl("span", { class: "material-symbols-rounded" }, "trending_flat"),
      {
        click: (e, err) => {
          if (currentPos == 0) return;
          let currentElement = e.currentTarget.parentNode.previousSibling;
          nextPrev({ btn: "prev", selectedElement: currentElement });
        },
      }
    ),
    createEl(
      "a",
      { class: "blog-btn next" },
      createEl("span", { class: "material-symbols-rounded" }, "trending_flat"),
      {
        click: (e, err) => {
          if (currentPos >= pages - 1) return;
          let currentElement = e.currentTarget.parentNode.previousSibling;
          nextPrev({ btn: "next", selectedElement: currentElement });
          console.log(err);
        },
      }
    ),
  ]);

  paginationContainer.append(pagination, blogBtn);

  return paginationContainer;
};
