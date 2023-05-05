export const TravelCard = ({ image, title, desc, isLess = false }) => {
  return createEl(
    "a",
    {
      class: "card-container",
      href: "test",
    },
    [
      createEl(
        "div",
        { class: "image-container" },
        createEl(
          "div",
          {
            class: `image ${isLess ? "tall" : ""}`,
            style: {
              backgroundImage: `url('${image}')`,
            },
          },
          createEl("a", { class: "learn-more", href: "#" }, createEl("span", { class: "material-symbols-rounded" }, "arrow_forward"))
        )
      ),
      createEl("p", { class: "card-title" }, title),
      createEl("p", { class: "desc" }, shortenText(desc, isLess)),
    ]
  );
};

const shortenText = (text, isLess) => {
  let shortenText = "";
  let lessText = isLess ? 200 : 40;

  if (text.length < lessText) return text;

  for (let i = 0; i < lessText; i++) {
    shortenText += text[i];
  }
  shortenText += "...";
  return shortenText;
};
