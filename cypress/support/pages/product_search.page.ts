/// <reference types="cypress" />
class ProductSearchPage {
  get autocompleteInput() {
    return cy.get('#tbay-header .tbay-search')
  }
  get productList() {
    return cy.get(`.ui-menu-item:not([class^="list-header"]) > a`)
  }
  search(product) {
    this.autocompleteInput.type(product).wait(1000)
  }
}

export default new ProductSearchPage()
