export const TravelCard = ({ image, title, desc }, index) => {
  console.log(index);
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
            class: "image",
            style: {
              backgroundImage: `url('${image}')`,
            },
          },
          createEl("a", { class: "learn-more", href: "#" }, createEl("span", { class: "material-symbols-rounded" }, "arrow_forward"))
        )
      ),
      createEl("p", { class: "card-title" }, title),
      createEl("p", { class: "desc" }, shortenText(desc)),
    ]
  );
};

const shortenText = (text) => {
  let shortenText = "";
  if (text.length < 40) return text;

  for (let i = 0; i < 40; i++) {
    shortenText += text[i];
  }
  shortenText += "...";
  return shortenText;
};
