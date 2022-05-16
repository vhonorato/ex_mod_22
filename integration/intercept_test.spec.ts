/// <reference types="cypress" />
import data from '../fixtures/search_data.json'
import { productPage, cartPage } from '../support/pages'
import { appString } from '../fixtures/index'

describe('Intercept', () => {
  let products = data.search_data[0]
  before(() => {
    cy.interceptTerm({ term: products.label, data: data.search_data })
  })
  beforeEach(() => {
    cy.visit('/')
  })
  it('add products to shopping cart', () => {
    data.search_data.forEach((item) => {
      cy.addProductToCart({
        search: item.label,
        color: item.color,
        size: item.size,
        message: appString.addToCart,
      })
    })
  })
  describe('Shopping Cart', () => {
    beforeEach(() => {
      cy.addProductToCart({
        search: products.label,
        color: products.color,
        size: products.size,
        message: appString.addToCart,
      })
    })
    it('remove products from shopping cart', () => {
      cy.removeProductFromCart({ label: products.label, message: appString.removeFromCart })
    })
    it('update products from shopping cart', () => {
      cy.visit('/carrinho')
      cartPage.addProduct()
    })
  })
})
