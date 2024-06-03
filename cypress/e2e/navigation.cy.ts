/// <reference types="cypress" />

describe("Navigation and scrolling", () => {
  before(() => {
    cy.window().then((window) => {
      window.localStorage.setItem("activeSession", "seinfeld@mail.com");
    });
  });

  it("allows the user to navigate between sections and scroll through the pages", () => {
    cy.visit("http://localhost:5173/");

    cy.get("#btn-sales").should("be.visible").click();
    cy.get("section").scrollTo("bottom");

    cy.get("#btn-products").should("be.visible").click();
    cy.get("section").scrollTo("bottom");

    cy.get("#btn-invoices").should("be.visible").click();
    cy.get("section").scrollTo("bottom");

    cy.get("#btn-dashboard").should("be.visible").click();
    cy.get("section").scrollTo("bottom");
  });
});
