/// <reference types="Cypress" />
import { user } from '../fixtures/index'
import {registerPage, myAccountPage} from '../support/pages/index';

describe("Register", () => {
  beforeEach(() => {
    cy.visit("/my-account");
  });
  it("should register with valid credentials", () => {
    registerPage.register(user.randomEmail, user.randomPassword);

    myAccountPage.title.should("be.visible");

  });
});
