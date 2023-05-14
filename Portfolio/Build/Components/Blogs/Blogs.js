export const BlogsCard = ({
  image,
  author,
  date,
  title,
  desc,
  blogType = [],
}) => {
  return Container("div", "blog-container", [
    createEl("div", {
      class: "blog-image",
      style: { backgroundImage: `url(${image})` },
    }),
    createEl("p", { class: "author-date" }, [
      createEl("span", { class: "author", author }),
      "•",
      createEl("span", { class: "date" }, date),
    ]),
    createEl("div", { class: "title-container" }, [
      createEl("h3", { class: "blog-title" }, title),
      createEl(
        "div",
        { class: "read-more" },
        createEl("span", { class: "material-symbols-rounded" }, north_east)
      ),
    ]),
    createEl("p", { class: "blog-desc" }, desc),
    blogType.map((data) => blogChip(data)),
  ]);
};

const blogChip = (text) => {
  return Container("div", "blog-chip", text);
};
