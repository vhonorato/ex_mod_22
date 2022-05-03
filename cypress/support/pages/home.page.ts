/// <reference types="cypress" />
class HomePage {
  private get magnifier() {
    return cy.get('.site-header .search-form > button')
  }
  private get home() {
    return cy.get('.logo-in-theme > .logo > a > .logo-img')
  }
  searchMagnifier() {
    this.magnifier.click()
  }
  homePage() {
    this.home.click()
  }
}

export default new HomePage()
