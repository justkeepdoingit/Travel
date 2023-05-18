export const Info = async ({ fullImage, title, description, infoTitle }) => {
  return createEl("div", { class: "info-mask" }, [
    createEl("span", { class: "material-symbols-rounded close" }, "close", {
      click: () => {
        selectEl(".info-page").style.translate = `0px 100%`;
        selectEl("body").style.overflow = "auto";
      },
    }),
    createEl("div", { class: "info-container" }, [
      createEl("div", { class: "info-inner" }, [
        createEl("div", { class: "info" }, [
          createEl("h1", { class: "info-title main-title" }, title),
          createEl("div", { class: "background-container", style: { backgroundImage: `url(${fullImage})` } }),
          createEl("h1", { class: "info-title" }, infoTitle),
          createEl("div", { class: "info-divider" }),
          createEl("div", { class: "desc-container" }, [createEl("div", { class: "info-desc" }, description)]),
        ]),
      ]),
    ]),
  ]);
};
