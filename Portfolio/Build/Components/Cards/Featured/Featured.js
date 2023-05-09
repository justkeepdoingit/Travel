import { TravelCardComponent, BlogsCardComponent } from "../../../Modules/js/module.js";

export const Featured = async ({ title, filename, type }) => {
  let collection = [];

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
    case "blog":
      let blogsCollection = collection.map((data) =>
        BlogsCardComponent({
          image: data.thumbnail,
          title: data.place,
          desc: data.desc,
        })
      );
      return Container("div", "featured container", [
        createEl("p", { class: "title blogs" }, title),
        createEl(
          "div",
          { class: "carousel-mask" },
          createEl("div", { class: "blogs-collection" }, blogsCollection, {
            mousemove: (e) => {
              if (e.which == 1) {
                // console.log(e.offsetX + e.target.parentNode.offsetLeft);
              }
            },
          })
        ),
      ]);
  }
};
