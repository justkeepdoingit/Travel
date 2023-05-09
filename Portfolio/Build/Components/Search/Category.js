export const CategoryComponent = async () => {
  let categoryContent = [];
  await fetchAPI(`./Resources/JSON/categories.json`, (data) => {
    categoryContent = data;
  });

  function randomHex() {
    let hexcode = "0123456789ABCDEF";
    let generatedHex = "";
    for (let i = 0; i < 6; i++) {
      generatedHex += hexcode[Math.abs(Math.ceil(Math.random() * 20 - 7))];
    }
    return generatedHex;
  }

  function categories() {
    return categoryContent.slice(0, 6).map(({ title, hashtags }, index) =>
      Category({
        content: title,
        color: randomHex(),
        hashtags: hashtags,
        index: index,
      })
    );
  }

  let categoryCards = categories();

  return Container("div", "search-row", [
    Container("div", "search-container", [
      createEl("span", { class: "material-symbols-rounded search" }, "search"),
      createEl(
        "input",
        {
          class: "search-input",
          type: "text",
          placeholder: "Where would you like to go?",
        },
        "",
        {
          keyup: (e) => {
            let cache = [];
            if (e.target.value == "") {
              cache = categories();
            } else {
              categoryContent
                .filter(({ title }) =>
                  title.toLowerCase().includes(e.target.value.toLowerCase())
                )
                .splice(0, 6)
                .map(({ title, hashtags }, index) =>
                  cache.push(
                    Category({
                      content: title,
                      color: randomHex(),
                      hashtags: hashtags,
                      index: index,
                    })
                  )
                );
            }
            updateElement("category-container", cache);
          },
        }
      ),
    ]),
    Container("div", "category-container", categoryCards),
  ]);
};

export const Category = ({ content, color, hashtags = [], index }) => {
  let hashtagCollection = hashtags.map((tags) => `#${tags} `);
  return createEl(
    "div",
    {
      class: "category-card",
      style: {
        backgroundColor: `#${color}`,
        color: "white",
      },
    },
    [
      createEl("p", { class: "category-title" }, content),
      createEl("p", { class: "hashtag" }, hashtagCollection),
      createEl("div", { class: "shine" }),
    ],
    {
      mousemove: (e) => {
        let shine = document.querySelectorAll(".shine")[index];
        shine.style.top = `${e.offsetY - 75}px`;
        shine.style.left = `${e.offsetX - 75}px`;
        shine.classList.add("active");
      },
      mouseleave: (e) => {
        let shine = document.querySelectorAll(".shine")[index];
        shine.classList.remove("active");
      },
    }
  );
};
