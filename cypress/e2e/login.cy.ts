/// <reference types="cypress" />

describe("Login page", () => {
  before(() => {
    cy.fixture("user").then((user) => {
      cy.window().then((window) => {
        window.localStorage.setItem("seinfeld@mail.com", JSON.stringify(user));
      });
    });
  });

  it("lets the user log in", () => {
    cy.fixture("user").then((user) => {
      cy.visit("http://localhost:5173/login");

      cy.get("#input-email").should("be.visible").type(user.email);
      cy.get("#input-password").should("be.visible").type(user.password);
      cy.get("button").should("be.visible").click();
    });
  });
});

describe("Error messages", () => {
  it("displays error messages for invalid inputs", () => {
    cy.visit("http://localhost:5173/login");

    // required field
    cy.get("#input-email").should("be.visible").click();
    cy.get("#input-password").should("be.visible").click();
    cy.get("#input-email-error")
      .should("be.visible")
      .should("include.text", "Requerido");

    // password too short
    cy.get("#input-password").should("be.visible").type("tooshor");
    cy.get("#input-email").should("be.visible").click();
    cy.get("#input-password-error")
      .should("be.visible")
      .should("include.text", "La contraseña debe ser de 8 caracteres o más");

    // password must have a number
    cy.get("#input-password")
      .should("be.visible")
      .clear()
      .type("not a number in sight");
    cy.get("#input-email").should("be.visible").click();
    cy.get("#input-password-error")
      .should("be.visible")
      .should("include.text", "La contraseña requiere un número");

    // password must have a capital letter
    cy.get("#input-password")
      .should("be.visible")
      .clear()
      .type(
        "this is a password with 2 numbers and more than 8 characters, but with no capital letter. can you believe it?",
      );
    cy.get("#input-email").should("be.visible").click();
    cy.get("#input-password-error")
      .should("be.visible")
      .should("include.text", "La contraseña requiere una letra mayúscula");
  });
});
