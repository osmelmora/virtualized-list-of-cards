import faker from "faker";

export const contacts = (() => {
  const data = [];

  for (let i = 0; i < 200; i++) {
    data.push({ ...faker.helpers.createCard(), avatar: faker.image.avatar() });
  }

  console.log(data[0]);
  return data;
})();
