import { PaginationComponent } from "../../../Modules/js/module.js";
export const CardInfo = async ({ title, fullImage, infoTitle, description, offers = [] }) => {
  let offerContainer = (offerCollection = []) => {
    let initialContainer = createEl("div", { class: "offer-container" }),
      perRow = Math.floor(offerCollection.length / 2),
      rowsContainer = createEl("div", { class: "offer-columns" });

    for (let i = 0; i < offerCollection.length; i++) {
      rowsContainer.append(
        createEl("div", { class: "offers" }, [
          createEl(
            "div",
            {},
            createEl("span", { class: "material-symbols-rounded offer-items" }, offerCollection[i]["icon"])
          ),
          createEl("div", {}, createEl("p", { class: "offer-items" }, offerCollection[i]["icon-name"])),
        ])
      );
      if (i == perRow - 1) {
        initialContainer.append(rowsContainer);
        rowsContainer = createEl("div", { class: "offer-columns" });
      }
      if (i == offerCollection.length - 1) {
        initialContainer.append(rowsContainer);
      }
    }
    return initialContainer;
  };

  return createEl("div", {}, [
    createEl("h1", { class: "info-title main-title" }, title),
    createEl("div", {
      class: "background-container",
      style: { backgroundImage: `url(${fullImage})` },
    }),
    createEl("h1", { class: "info-title" }, infoTitle),
    createEl("div", { class: "info-divider" }),
    createEl("div", { class: "desc-container" }, [createEl("p", { class: "info-desc" }, description)]),
    createEl("div", { class: "info-divider" }),
    createEl("h1", { class: "info-title" }, "What this place offers"),
    offerContainer(offers),
    createEl("div", { class: "info-divider sub-div" }),
    createEl("h1", { class: "info-title sub" }, `More on ${title}`),
    await PaginationComponent({ filename: "featured.json", perPage: screenSize() }),
  ]);
};
