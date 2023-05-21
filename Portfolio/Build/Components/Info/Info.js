import { CardInfoComponent } from "../../Modules/js/module.js";
import { BlogInfoComponent } from "../../Modules/js/module.js";
export const Info = async ({
  fullImage,
  title,
  description,
  infoTitle,
  offers = [],
  type,
  //For Blogs
  author,
  date,
  fullDesc,
  blogType = [],
  imageCollection = [],
}) => {
  let component;

  switch (type) {
    case "card":
      component = await CardInfoComponent({
        title: title,
        infoTitle: infoTitle,
        description: description,
        offers: offers,
        fullImage: fullImage,
      });
      break;
    case "blog":
      component = BlogInfoComponent({
        title: title,
        fullImage: fullImage,
        desc: description,
        author: author,
        date: date,
        fullDesc: fullDesc,
        blogType: blogType,
        imageCollection: imageCollection,
      });
  }

  return createEl("div", { class: "info-mask" }, [
    createEl("span", { class: "material-symbols-rounded close" }, "close", {
      click: () => {
        selectEl(".info-page").style.translate = `0px 100%`;
        selectEl("body").style.overflow = "auto";
      },
    }),
    createEl("div", { class: "info-container" }, [
      createEl("div", { class: "info-inner" }, [createEl("div", { class: "info" }, component)]),
    ]),
  ]);
};
