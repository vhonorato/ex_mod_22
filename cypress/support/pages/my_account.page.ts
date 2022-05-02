class MyAccountPage {
  get title() {
    return cy.get('.page-title')
  }
}

export default new MyAccountPage()
