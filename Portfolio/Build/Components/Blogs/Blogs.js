export const BlogsCard = ({
  thumbnail,
  author,
  date,
  title,
  desc,
  blogType = [],
}) => {
  return createEl("a", { class: "blog-container", href: "#" }, [
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
        createEl(
          "span",
          { class: "material-symbols-rounded more" },
          "north_east"
        )
      ),
    ]),
    createEl("p", { class: "blog-desc" }, desc),
    createEl(
      "div",
      { class: "chip-container" },
      blogType.map((data) => blogChip(data))
    ),
  ]);
};

const blogChip = (text) => {
  return Container("div", "blog-chip", text);
};
