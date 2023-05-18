import { InfoComponent } from "../../Modules/js/module.js";
export const TravelCard = ({
  image,
  title,
  desc,
  isLess = false,
  fullImage,
  infoTitle,
  offers,
}) => {
  return createEl(
    "a",
    {
      class: "card-container",
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
          createEl(
            "a",
            { class: "learn-more" },
            createEl(
              "span",
              { class: "material-symbols-rounded" },
              "arrow_forward"
            )
          )
        )
      ),
      createEl("p", { class: "card-title" }, title),
      createEl("p", { class: "desc" }, shortenText(desc, isLess)),
    ],
    {
      click: async () => {
        let container = selectEl(".info-page");
        updateElement(
          ".info-page",
          await InfoComponent({
            fullImage: fullImage,
            title: title,
            description: desc,
            infoTitle: infoTitle,
            offers: offers,
          })
        );
        container.style.translate = "0px 0px";
        document.querySelector("body").style.overflow = "hidden";
      },
    }
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
