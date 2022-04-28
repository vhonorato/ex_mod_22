import faker from '@faker-js/faker'

class User {
  randomFirstName = faker.name.firstName()
  randomLastName = faker.name.lastName()
  randomEmail = faker.internet.email(this.randomFirstName.toLowerCase(), this.randomLastName.toLowerCase())
  randomPassword = faker.internet.password()
}

export default new User()
