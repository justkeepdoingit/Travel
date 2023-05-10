import { TravelCardComponent, BlogsCardComponent } from "../../Modules/js/module.js";

export const Featured = async ({ title, filename, type }) => {
  let collection = [];
  let position = 0;
  let carousel = slider;
  await fetchAPI(`./Resources/JSON/${filename}`, (data) => {
    collection = data;
  });

  switch (type) {
    case "card":
      let cardsCollection = collection.map((data) =>
        TravelCardComponent({
          image: data.thumbnail,
          title: data.place,
          desc: data.desc,
          isLess: collection.length <= 4,
        })
      );

      return Container("div", "featured container", [
        createEl("p", { class: "title featured" }, title),
        createEl("div", { class: "cards-collection" }, cardsCollection),
      ]);
    case "carousel":
      let blogsCollection = collection.map((data) =>
        BlogsCardComponent({
          image: data.thumbnail,
          title: data.place,
          desc: data.desc,
        })
      );
      return Container("div", "featured container", [
        createEl("p", { class: "title carousel" }, title),
        createEl("div", { class: "carousel-mask" }, [
          createEl("div", { class: "carousel-collection" }, blogsCollection),
          createEl("div", { class: "carousel__btn prev" }, createEl("span", { class: "material-symbols-rounded" }, "arrow_forward"), {
            click: (e) => {
              position--;
              carousel().prev(position);
            },
          }),
          createEl("div", { class: "carousel__btn next" }, createEl("span", { class: "material-symbols-rounded" }, "arrow_forward"), {
            click: (e) => {
              position++;
              carousel().next(position);
              let nodeCopy = document.querySelectorAll(".carousel__item");
              let clonedNode = nodeCopy[position - 2].cloneNode(true);

              if (nodeCopy) {
                selectEl(".carousel-collection").append(clonedNode);
              }
            },
          }),
        ]),
      ]);
  }
};
let currentPos = 0;
function slider() {
  let container = selectEl(".carousel-collection"),
    itemWidth = container.querySelector(".carousel__item").offsetWidth,
    carouselCollection = document.querySelectorAll(".carousel__item");

  function next(position) {
    currentPos += itemWidth;
    container.style.translate = `calc((${currentPos}px + ${position * 2}rem) * -1)`;
  }
  function prev(position) {
    currentPos -= itemWidth;
    container.style.translate = `calc((${currentPos}px + ${position * 2}rem) * -1)`;
  }
  return {
    next,
    prev,
  };
}
