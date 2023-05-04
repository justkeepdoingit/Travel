import { FeaturedComponent, HeroComponent, NavComponent } from "./Modules/js/module.js";

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
      title: "Waiting To Be Discovered",
      filename: "discover.json",
    }),
  ]),
]);
//http://127.0.0.1:3000/Build/Resources
