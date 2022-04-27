/// <reference types="Cypress" />
import {randomEmail, randomPassword} from '../fixtures/user';
import {registerPage, myAccountPage} from '../support/pages/index';

describe("Register", () => {
  beforeEach(() => {
    cy.visit("/my-account");
  });
  it("should register with valid credentials", () => {
    registerPage.register(randomEmail, randomPassword);

    myAccountPage.title.should("be.visible");

  });
});
