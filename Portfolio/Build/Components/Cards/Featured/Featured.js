import {
  TravelCardComponent,
  BlogsCardComponent,
} from "../../../Modules/js/module.js";

export const Featured = async ({ title, filename }) => {
  let collection = [];

  await fetchAPI(`./Resources/JSON/${filename}`, (data) => {
    collection = data;
  });

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
};
