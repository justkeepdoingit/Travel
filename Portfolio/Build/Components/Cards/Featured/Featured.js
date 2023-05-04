import { TravelCardComponent } from "../../../Modules/js/module.js";

export const Featured = async ({ title, filename }) => {
  let collection = [];

  await fetchAPI(`./Resources/JSON/${filename}`, (data) => {
    collection = data;
  });

  let cardsCollection = collection.map((data, index) =>
    TravelCardComponent(
      {
        image: data.image,
        title: data.place,
        desc: data.desc,
      },
      index
    )
  );

  return Container("div", "featured container", [createEl("p", { class: "title featured" }, title), createEl("div", { class: "cards-collection" }, cardsCollection)]);
};
