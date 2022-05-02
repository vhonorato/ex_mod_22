/// <reference types="Cypress" />

class RegisterPage {
  get _email() {
    return cy.get('#reg_email')
  }
  get _password() {
    return cy.get('#reg_password')
  }
  get _register() {
    return cy.get(':nth-child(4) > .button')
  }

  register(email: string, password: string) {
    this._email.type(email)
    this._password.type(password, { log: false })
    this._register.click()
  }
}

export default new RegisterPage()
