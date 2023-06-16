export const Button = ({ content, type = "", className = "", eventListener = {}, link }) => {
  return createEl("a", { class: `btn ${type} ${className}`, href: link || "#blank" }, content, eventListener);
};

let active = false;

export const Navigation = ({ Logo, Nav = [], CTA = [] }) => {
  let navs = Nav.map(({ navName, link }) => createEl("a", { class: "cta-nav", href: `#${link}` }, navName));
  let mobile = screen.width <= 768 ? `mobile ${active ? "active" : ""}` : "";

  return Container("div", `navigation-row ${mobile}`, [
    Container("div", "navigation-container", [
      createEl(
        "a",
        { class: `logo ${mobile}`, href: "https://justkeepdoingit.github.io/Travel/Portfolio/Build/" },
        Logo
      ),
      createEl("div", { class: "navigation" }, navs),
      createEl("div", { class: "cta-container" }, [
        Button({ content: CTA[0], type: "primary nav", link: "#footer" }),
        Button({
          content: createEl("span", { class: "material-symbols-rounded" }, `${active ? "close" : "menu"}`),
          className: "nav-btn",
          eventListener: {
            click: (e) => {
              let classList = [".navigation-row.mobile", ".nav-btn", ".cta-container"];
              if (!active) {
                for (let i = 0; i < classList.length; i++) {
                  document.querySelector(classList[i]).classList.add("active");
                }
                document.querySelector(".logo").classList.remove("mobile");
                active = true;
                return;
              }
              for (let i = 0; i < classList.length; i++) {
                document.querySelector(classList[i]).classList.remove("active");
              }
              document.querySelector(".logo").classList.add("mobile");
              active = false;
            },
          },
        }),
      ]),
    ]),
  ]);
};
