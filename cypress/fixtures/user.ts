import faker from "@faker-js/faker";

export const randomFirstName = faker.name.firstName();
export const randomLastName = faker.name.lastName();
export const randomEmail = faker.internet.email(
  randomFirstName.toLowerCase(),
  randomLastName.toLowerCase()
);
export const randomPassword = faker.internet.password();
