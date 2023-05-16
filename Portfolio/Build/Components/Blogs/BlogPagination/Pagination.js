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
          author: contents.author,
          date: contents.date,
          title: contents.title,
          desc: contents.desc,
          blogType: contents.blogType,
        })
      );
    }
    pagination.append(pages);
    startingLoop += perPage;
  }

  function nextPrev({ btn }) {
    let paginationPages = selectEl(".pagination-pages"),
      pageWidth = paginationPages.offsetWidth,
      pagination = document.querySelectorAll(".pagination-pages");

    function loopPagination(plusminus) {
      for (let i = 0; i < pagination.length; i++) {
        pagination[i].style.translate = `${plusminus}${
          pageWidth * currentPos
        }px 0px`;
      }
    }

    if (btn == "prev") {
      currentPos--;
      loopPagination("-");
      return;
    }
    currentPos++;
    loopPagination("-");
    return;
  }

  let blogBtn = createEl("div", { class: "blog-btn-container" }, [
    createEl(
      "a",
      { class: "blog-btn prev" },
      createEl("span", { class: "material-symbols-rounded" }, "trending_flat"),
      {
        click: (e) => {
          if (currentPos == 0) return;
          nextPrev({ btn: "prev" });
        },
      }
    ),
    createEl(
      "a",
      { class: "blog-btn next" },
      createEl("span", { class: "material-symbols-rounded" }, "trending_flat"),
      {
        click: (e) => {
          if (currentPos >= pages - 1) return;
          nextPrev({ btn: "next" });
        },
      }
    ),
  ]);

  paginationContainer.append(pagination, blogBtn);

  return paginationContainer;
};
