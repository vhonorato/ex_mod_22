/// <reference types="cypress" />
class ProductPage {
  private get cardButton() {
    return cy.get('.single_add_to_cart_button').click().wait(500)
  }
  private optionChoice(option: string) {
    return cy.get(`.button-variable-item-${option}`).click().wait(500)
  }
  private get message() {
    return cy.get('.woocommerce-message')
  }

  selectSizeColorSubmit({ color, size }: { color: string; size: string }) {
    this.optionChoice(size)
    this.optionChoice(color)
    this.cardButton.wait(1000)
  }

  successMessage({ product, text }: { product: string; text: string }) {
    this.message.should('contain', `“${product}” ${text}`)
  }
}

export default new ProductPage()
