/// <reference types="Cypress" />

import { Given, When,And, Then } from 'cypress-cucumber-preprocessor/steps'
import { registerPage, myAccountPage } from '../../support/pages/index'
import { user, appString } from '../../fixtures/index'

Given('I visit the EBAC Store register', () => {
  cy.visit('/my-account')
})
When('I register with email {string} and password {string}', (email: string, password: string) => {
  registerPage.register(user.randomEmail, password)
})
Then('the account page should be displayed', () => {
  myAccountPage.title.should('have.text', appString.myAccount)
})
