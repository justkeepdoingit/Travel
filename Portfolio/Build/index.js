import {
  FeaturedComponent,
  HeroComponent,
  NavComponent,
  CategoryComponents,
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
    }),
  ]),
  Container("div", "container", [
    await FeaturedComponent({
      title: "Waiting To Be Discovered",
      filename: "discover.json",
    }),
  ]),
  Container("div", "container", [
    await FeaturedComponent({
      title: "Your Top 3",
      filename: "top3.json",
    }),
  ]),
  Container("div", "container search", await CategoryComponents()),
]);
//http://127.0.0.1:3000/Build/Resources
