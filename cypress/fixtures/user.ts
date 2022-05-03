import faker from '@faker-js/faker'

class User {
  randomFirstName = faker.name.firstName()
  randomLastName = faker.name.lastName()
  randomEmail = faker.internet.email(
    this.randomFirstName.toLowerCase(),
    this.randomLastName.toLowerCase(),
  )
  randomPassword = faker.internet.password()
  randomPhone = faker.phone.phoneNumber('+55###########')
  randomZipCode = faker.address.zipCode('########')
  randomAddress = faker.address.streetName()
  randomCity = faker.address.cityName()
}

export default new User()
