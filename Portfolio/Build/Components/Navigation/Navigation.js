export const Button = ({ content, type, className = "" }) => {
  return createEl("a", { class: `btn ${type} ${className}` }, content);
};

export const Navigation = ({ Logo, Nav = [], CTA = [] }) => {
  let navs = Nav.map((data) => createEl("a", { class: "cta-nav" }, data));

  return Container(
    "div",
    "navigation-row",
    Container("div", "navigation-container", [
      createEl("div", { class: "logo" }, Logo),
      createEl("div", { class: "navigation" }, navs),
      createEl(
        "div",
        { class: "cta-container" },
        Button({ content: CTA[0], type: "primary" })
      ),
    ])
  );
};
