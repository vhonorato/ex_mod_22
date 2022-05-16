/// <reference types="Cypress" />
import { user, appString } from '../fixtures/index'
import { myAccountPage, successCheckoutPage } from '../support/pages/index'

describe('Checkout', () => {
  beforeEach(() => {
    cy.register(user.randomEmail, user.randomPassword)
    cy.chooseItem()
  })
  it('should add a item in checkout and buy it with bank transfer', () => {
    myAccountPage.title.should('have.text', appString.myAccount)

    cy.goToCheckOut()
    cy.fillCheckoutFieldsAndBuy({
      firstName: user.randomFirstName,
      lastName: user.randomLastName,
      address: user.randomAddress,
      city: user.randomCity,
      zipCode: user.randomZipCode,
      phone: user.randomPhone,
      email: user.randomEmail,
    })

    successCheckoutPage.title.should('have.text', appString.orderReceived)
  })
})
