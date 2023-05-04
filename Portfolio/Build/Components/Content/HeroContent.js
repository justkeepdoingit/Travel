import { Button } from "../Navigation/Navigation.js";

export const HeroContent = () => {
  return Container("div", "title-container", [
    createEl("div", { class: "hero-title" }, [
      createEl(
        "h1",
        { class: "title" },
        createFrag("span", "Travel around<br>Philippines?")
      ),
      createEl("h2", { class: "subtitle" }, "Explore now to see where to go!"),
      Button({
        content: "Start Exploring",
        type: "primary",
        className: "hero-btn",
      }),
    ]),
    createEl(
      "div",
      { class: "hero-image-container" },
      createEl("div", {
        class: "hero-image",
      })
    ),
  ]);
};
