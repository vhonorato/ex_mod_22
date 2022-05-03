/// <reference types="Cypress" />

import { homePage, productSearchPage, productPage, cartPage } from '../support/pages'

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      register(email: string, password: string): Chainable<any>
      fillCheckoutFieldsAndBuy({
        firstName,
        lastName,
        address,
        city,
        zipCode,
        phone,
        email,
      }: {
        firstName: string
        lastName: string
        address: string
        city: string
        zipCode: string
        phone: string
        email: string
      }): Chainable<string>
      chooseItem(): Chainable<any>
      goToCheckOut(): Chainable<any>
      removeProductFromCart({ label, message }: { label: string; message: string }): Chainable<any>
      addProductToCart({
        search,
        color,
        size,
        message,
      }: {
        search: string
        color: string
        size: string
        message: string
      }): Chainable<any>
      interceptTerm({ term, data }: { term: string; data: Array<any> }): Chainable<any>
    }
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

Cypress.Commands.add(
  'fillCheckoutFieldsAndBuy',
  ({
    firstName,
    lastName,
    address,
    city,
    zipCode,
    phone,
    email,
  }: {
    firstName: string
    lastName: string
    address: string
    city: string
    zipCode: string
    phone: string
    email: string
  }) => {
    cy.get('#billing_first_name').type(firstName).wait(100)
    cy.get('#billing_last_name').type(lastName).wait(100)
    cy.get('#billing_address_1').type(address).wait(100)
    cy.get('#billing_city').type(city).wait(100)
    cy.get('#billing_postcode').type(zipCode).wait(100)
    cy.get('#billing_phone').type(phone).wait(100)
    cy.get('#billing_email').type(email).wait(100)
    cy.get('#terms').click().wait(100)
    cy.get('#place_order').click().wait(5000)
  },
)

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

Cypress.Commands.add('interceptTerm', ({ term, data }: { term: string; data: Array<any> }) => {
  cy.intercept(
    {
      method: 'GET',
      url: '/wp-admin/admin-ajax*',
      query: {
        term: term,
      },
    },
    (req) => {
      req.reply({
        statusCode: 200,
        body: `${req.query.callback}(
            ${JSON.stringify(data)} 
          )`,
      })
    },
  )
})

Cypress.Commands.add(
  'addProductToCart',
  ({
    search,
    color,
    size,
    message,
  }: {
    search: string
    color: string
    size: string
    message: string
  }) => {
    homePage.searchMagnifier()
    productSearchPage.search(search)
    productSearchPage.productList.first().should('have.attr', 'title', search)
    productSearchPage.search('{enter}')
    productPage.selectSizeColorSubmit({ color: color, size: size })
    productPage.successMessage({ product: search, text: message })
    homePage.homePage()
  },
)
Cypress.Commands.add(
  'removeProductFromCart',
  ({ label, message }: { label: string; message: string }) => {
    cy.visit('/carrinho')
    cartPage.removeProduct()
    productPage.successMessage({ product: label, text: message })
  },
)
