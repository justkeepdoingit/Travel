export const CategoryComponent = async () => {
  let categoryContent = [];
  await fetchAPI(`./Resources/JSON/categories.json`, (data) => {
    categoryContent = data;
  });

  function categories() {
    return categoryContent.slice(0, 6).map(({ title, thumbnail, color }, index) =>
      Category({
        content: title,
        image: thumbnail,
        index: index,
        color: color,
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
                .filter(({ title }) => title.toLowerCase().includes(e.target.value.toLowerCase()))
                .splice(0, 6)
                .map(({ title, thumbnail, color }, index) =>
                  cache.push(
                    Category({
                      content: title,
                      image: thumbnail,
                      index: index,
                      color: color,
                    })
                  )
                );
            }
            updateElement(".category-container", cache);
          },
        }
      ),
    ]),
    Container("div", "category-container", categoryCards),
  ]);
};

export const Category = ({ content, image, hashtags = [], index, color }) => {
  return createEl(
    "div",
    {
      class: "category-card",
      style: {
        backgroundColor: `${color}`,
        color: "white",
      },
    },
    [
      createEl("p", { class: "category-title" }, content),
      createEl(
        "div",
        {
          class: "shine",
          style: {
            backgroundImage: `url(${image})`,
          },
        },
        [
          createEl(
            "p",
            {
              class: "category-title image-title",
              style: {
                color: `${color}`,
              },
            },
            content
          ),
          createEl("div", { class: "overlay" }),
        ]
      ),
    ],
    {
      mousemove: (e) => {
        let shine = document.querySelectorAll(".shine")[index];
        shine.animate(
          {
            clipPath: `circle(100px at ${e.offsetX}px ${e.offsetY}px)`,
          },
          { duration: 300, fill: "forwards" }
        );
        shine.classList.add("active");
      },
      mouseleave: (e) => {
        let shine = document.querySelectorAll(".shine")[index];
        shine.classList.remove("active");
      },
    }
  );
};
