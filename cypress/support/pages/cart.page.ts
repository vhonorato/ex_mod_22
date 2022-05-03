class CartPage {
  private get trashCan() {
    return cy.get('.remove > .fa')
  }
  private get plus() {
    return cy.get('.plus')
  }

  removeProduct() {
    this.trashCan.click()
  }

  addProduct() {
    this.plus.click()
  }
}

export default new CartPage()
