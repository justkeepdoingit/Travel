import { TravelCardComponent, BlogsCardComponent } from "../../Modules/js/module.js";

export const Featured = async ({ title, filename, type }) => {
  let collection = [],
    position = 0,
    itemsPerSlide = screenWidth(),
    carousel = slider;

  function screenWidth() {
    if (screen.width < 764) return 1;
    if (screen.width > 764 && screen.width <= 1024) return 3;
    return 4;
  }
  console.log(screenWidth());

  function isAtLastItem() {
    return position >= collection.length - itemsPerSlide;
  }

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
          createEl("div", { class: "carousel__btn prev pointer-inactive" }, createEl("span", { class: "material-symbols-rounded" }, "arrow_forward"), {
            click: (e) => {
              position--;
              let next = selectEl(".next");
              if (!isAtLastItem()) next.classList.remove("pointer-inactive");
              if (position == 0) e.currentTarget.classList.add("pointer-inactive");

              carousel().prev(position);
            },
          }),
          createEl("div", { class: "carousel__btn next" }, createEl("span", { class: "material-symbols-rounded" }, "arrow_forward"), {
            click: (e) => {
              position++;
              let prev = selectEl(".prev");
              if (position) prev.classList.remove("pointer-inactive");
              if (isAtLastItem()) e.currentTarget.classList.add("pointer-inactive");

              carousel().next(position);
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
