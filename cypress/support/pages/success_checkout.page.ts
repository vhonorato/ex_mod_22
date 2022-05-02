class SuccessCheckoutPage {
  get title() {
    return cy.get('.page-title')
  }
}

export default new SuccessCheckoutPage()
