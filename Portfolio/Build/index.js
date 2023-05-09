import {
  FeaturedComponent,
  HeroComponent,
  NavComponent,
  CategoryComponents,
  BlogsCardComponent,
} from "./Modules/js/module.js";

App("main", [
  createEl("div", { class: "hero-container container" }, [
    NavComponent({
      Logo: "Travel",
      Nav: ["For you", "For business", "News"],
      CTA: ["Contact"],
    }),
    HeroComponent(),
  ]),
  Container("div", "container", [
    await FeaturedComponent({
      title: "Popular Places",
      filename: "featured.json",
      type: "card",
    }),
  ]),
  Container("div", "container", [
    await FeaturedComponent({
      title: "Waiting To Be Discovered",
      filename: "discover.json",
      type: "card",
    }),
  ]),
  Container("div", "container", [
    await FeaturedComponent({
      title: "Your Top 3",
      filename: "top3.json",
      type: "card",
    }),
  ]),
  Container("div", "container search", await CategoryComponents()),
  Container("div", "container", [
    await FeaturedComponent({
      title: "Blogs",
      filename: "blogs.json",
      type: "blog",
    }),
  ]),
]);
//http://127.0.0.1:3000/Build/Resources
