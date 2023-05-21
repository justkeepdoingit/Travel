let cardContent = [
  {
    image: "./Resources/Assets/Email.png",
    title: "Email",
    content: {
      link: "mailto:amanciojores@gmail.com",
      text: "amanciojores@gmail.com",
      btnText: "Email me",
    },
  },
  {
    image: "./Resources/Assets/Phone.png",
    title: "Phone",
    content: {
      link: "tel:(+63)912-345-6789",
      text: "(+63)912-345-6789",
      btnText: "Call me",
    },
  },
  {
    image: "./Resources/Assets/LinkedIn.png",
    title: "Social",
    content: {
      link: "https://www.linkedin.com/in/jores-amancio-309571263",
      text: createEl("span", {}, [
        "Contact me on ",
        createEl(
          "a",
          {
            href: "https://www.linkedin.com/in/jores-amancio-309571263",
          },
          "LinkedIn"
        ),
      ]),
      btnText: "Connect with me",
    },
  },
];

export const Footer = () => {
  return Container("div", "footer-container", [
    Container("div", "footer-title-container", [
      createEl("a", { class: "footer-btn contact" }, "Contact Page"),
      createEl("h1", { class: "footer-title" }, createFrag("span", "Get in touch with us for<br>more information")),
      createEl("p", { class: "footer-text" }, "If you need questions, we're here for you"),
      Container(
        "div",
        "footer-card-container",
        cardContent.map(({ image, title, content }) => FooterCards({ image, title, content }))
      ),
    ]),
  ]);
};
const FooterCards = ({ image, title, content }) => {
  return Container("div", "footer-card", [
    createEl("div", {
      class: "image-container footer",
      style: {
        backgroundImage: `url(${image})`,
      },
    }),
    createEl("h3", { class: "footer-card-title" }, title),
    createEl("div", { class: "hr" }),
    createEl("p", { class: "footer-text" }, content.text),
    createEl(
      "a",
      {
        class: "contact-card",
        href: `${content.link}`,
        target: "_blank",
      },
      content.btnText
    ),
  ]);
};
