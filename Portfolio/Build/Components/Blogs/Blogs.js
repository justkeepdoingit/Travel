export const BlogsCard = ({ image, title, desc }) => {
  let icons = ["favorite", "comment"];

  let interactions = icons.map((icons) => createEl("span", { class: "material-symbols-rounded interact" }, icons));

  return createEl(
    "div",
    {
      class: "blog-container carousel__item",
    },
    [
      createEl(
        "div",
        { class: "image-container" },
        createEl(
          "div",
          {
            class: `blog-image`,
            style: {
              backgroundImage: `url('${image}')`,
            },
          },
          [
            createEl("div", { class: "blog-text-container" }, [
              createEl("p", { class: "blog-title" }, title),
              createEl("p", { class: "blog-desc" }, desc),
              createEl("div", { class: "interaction" }, interactions),
            ]),
            createEl("a", { class: "learn-more", href: "#" }, createEl("span", { class: "material-symbols-rounded" }, "arrow_forward")),
          ]
        )
      ),
    ]
  );
};
