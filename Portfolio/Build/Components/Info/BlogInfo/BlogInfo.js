export const BlogInfo = ({ fullImage, title, desc, author, date, fullDesc, blogType = [], imageCollection = [] }) => {
  console.log(imageCollection);
  return createEl("div", {}, [
    createEl(
      "div",
      {
        class: "blog-image blog-info",
        style: {
          backgroundImage: `url(${fullImage})`,
        },
      },
      [
        createEl("div", { class: "overlay" }),
        createEl("div", { class: "content-container" }, [
          createEl("div", { class: "info-title blog-info" }, title),
          createEl("div", { class: "image-desc blog-info" }, desc),
          createEl("div", {}, [
            createEl("p", { class: "author-date blog-info" }, [
              createEl("span", { class: "author blog-info" }, author),
              createEl("span", { class: "divider blog-info" }, "—"),
              createEl("span", { class: "date blog-info" }, date),
            ]),
          ]),
          createEl(
            "div",
            { class: "chip-container blog-info" },
            blogType.map((data) => blogChip(data))
          ),
        ]),
      ]
    ),
    createEl("div", { class: "info-desc blog-info" }, createFrag("span", fullDesc)),
    createEl("div", { class: "info-title blog-info" }, "Gallery"),
    createEl(
      "div",
      { class: "gallery" },
      imageCollection?.map((data, index) =>
        createEl("div", {
          class: `gallery-item item-${index + 1}`,
          style: {
            backgroundImage: `url(${data})`,
          },
        })
      )
    ),
  ]);
};
const blogChip = (text) => {
  return Container("div", "blog-chip", text);
};
