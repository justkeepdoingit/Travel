import { TravelCardComponent } from "../../../Modules/js/module.js";
export const CategoryInfo = ({ info = [], title }) => {
  return createEl("div", { class: "categoryinfo-container" }, [
    createEl("div", { class: "info-title category" }, title),
    createEl(
      "div",
      { class: "category-info" },
      info.map((data) =>
        TravelCardComponent({
          image: data.thumbnail,
          title: data.name,
          desc: data.desc,
          isLess: false,
          fullImage: data.image,
          infoTitle: data["info-title"],
          offers: data.offers,
        })
      )
    ),
  ]);
};
