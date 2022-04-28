/// <reference types="Cypress" />
declare namespace Cypress {
  interface Chainable<Subject = any> {
    register(email: string, password: string): Chainable<any>
    fillCheckoutFieldsAndBuy(): Chainable<any>
    chooseItem(): Chainable<any>
    goToCheckOut(): Chainable<any>
  }
}

Cypress.Commands.add('register', (email: string, password: string) => {
  const fd = new FormData()

  fd.append('email', email)
  fd.append('password', password)
  fd.append('woocommerce-register-nonce', 'f24e4d7e70')
  fd.append('_wp_http_referer', '/minha-conta/')
  fd.append('register', 'Register')

  cy.request({
    url: '/minha-conta/',
    method: 'POST',
    body: fd,
  })
  cy.visit('/minha-conta/')
})

Cypress.Commands.add('fillCheckoutFieldsAndBuy', () => {
  cy.get('#billing_first_name').type('Vinicius').wait(100)
  cy.get('#billing_last_name').type('Honorato').wait(100)
  cy.get('#billing_address_1').type('Rua dos bobos').wait(100)
  cy.get('#billing_city').type('São Paulo').wait(100)
  cy.get('#billing_postcode').type('03435060').wait(100)
  cy.get('#billing_phone').type('11999999999').wait(100)
  cy.get('#terms').click().wait(100)
  cy.get('#place_order').click().wait(5000)
})

Cypress.Commands.add('chooseItem', () => {
  const fd = new FormData()
  fd.append('attribute_size', ' XL')
  fd.append('attribute_color', ' Green')
  fd.append('quantity', ' 1')
  fd.append('add-to-cart', ' 2559')
  fd.append('product_id', ' 2559')
  fd.append('variation_id', ' 2578')

  cy.request({
    url: '/product/abominable-hoodie/',
    method: 'POST',
    body: fd,
  })
})

Cypress.Commands.add('goToCheckOut', () => {
  cy.get('#primary-menu > .menu-item-629 > a').click()
  cy.get('#cart > .dropdown-toggle').click()
  cy.get(
    '#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout',
  ).click()
})
