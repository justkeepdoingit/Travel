export const Pagination = async ({ title, filename }) => {
  let collection = [];

  await fetchAPI(`./Resources/JSON/${filename}`, (data) => {
    collection = data;
  });
};
