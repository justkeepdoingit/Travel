import { InfoComponent } from "../../Modules/js/module.js";
export const BlogsCard = ({
  thumbnail,
  image,
  author,
  date,
  title,
  desc,
  blogType = [],
  fullDesc,
  imageCollection = [],
}) => {
  return createEl(
    "a",
    { class: "blog-container" },
    [
      createEl("div", {
        class: "blog-image",
        style: { backgroundImage: `url(${thumbnail})` },
      }),
      createEl("p", { class: "author-date" }, [
        createEl("span", { class: "author" }, author),
        createEl("span", { class: "divider" }, "•"),
        createEl("span", { class: "date" }, date),
      ]),
      createEl("div", { class: "blogs-title-container" }, [
        createEl("h3", { class: "blog-title" }, title),
        createEl(
          "div",
          { class: "read-more" },
          createEl("span", { class: "material-symbols-rounded more" }, "north_east")
        ),
      ]),
      createEl("p", { class: "blog-desc" }, desc),
      createEl(
        "div",
        { class: "chip-container" },
        blogType.map((data) => blogChip(data))
      ),
    ],
    {
      click: async () => {
        let container = selectEl(".info-page");
        updateElement(
          ".info-page",
          await InfoComponent({
            title: title,
            fullImage: image,
            author: author,
            date: date,
            description: desc,
            fullDesc: fullDesc,
            blogType: blogType,
            type: "blog",
            imageCollection: imageCollection,
          })
        );
        container.style.translate = "0px 0px";
        document.querySelector("body").style.overflow = "hidden";
      },
    }
  );
};

const blogChip = (text) => {
  return Container("div", "blog-chip", text);
};
