import {
  FeaturedComponent,
  HeroComponent,
  NavComponent,
  CategoryComponents,
  BlogsCardComponent,
  FooterComponent,
  PaginationComponent,
} from "./Modules/js/module.js";

App("main", [
  createEl("div", { class: "hero-container container" }, [
    NavComponent({
      Logo: "Travel",
      // Nav: ["For you", "For business", "News"],
      Nav: [
        { navName: "Popular Places", link: "PopularPlaces" },
        { navName: "Waiting to be Discovered", link: "WaitingToBeDiscovered" },
        { navName: "Your Top 3", link: "YourTop3" },
      ],
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
  Container("div", "container blog", [
    await PaginationComponent({
      title: "Blogs",
      perPage: screenSize(),
      filename: "blogs.json",
    }),
  ]),
  Container("div", "container footer", FooterComponent()),
  createEl("div", { class: "info-page" }),
]);
//http://127.0.0.1:3000/Build/Resources
