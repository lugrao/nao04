/// <reference types="cypress" />

describe("Logout", () => {
  before(() => {
    cy.window().then((window) => {
      window.localStorage.setItem("activeSession", "seinfeld@mail.com");
    });
  });

  it("lets the user log out", () => {
    cy.visit("http://localhost:5173/");

    cy.get("#btn-logout").should("be.visible").click();
  });
});
