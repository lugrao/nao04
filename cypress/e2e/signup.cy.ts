/// <reference types="cypress" />

describe("Sign up page", () => {
  const user = {
    firstName: "Jerry",
    lastName: "Seinfeld",
    email: "seinfeld@mail.com",
    password: "asdQWE123",
  };

  it("lets the user create an account", () => {
    cy.visit("http://localhost:5173/signup");

    cy.get("#input-first-name").should("be.visible").type(user.firstName);
    cy.get("#input-last-name").should("be.visible").type(user.lastName);
    cy.get("#input-email").should("be.visible").type(user.email);
    cy.get("#input-password").should("be.visible").type(user.password);
    cy.get("#input-password-confirm").should("be.visible").type(user.password);
    cy.get("button").should("be.visible").click();
  });
});

describe("Error messages", () => {
  it("displays error messages for invalid inputs", () => {
    cy.visit("http://localhost:5173/signup");

    // required field
    cy.get("#input-first-name").should("be.visible").click();
    cy.get("#input-last-name").should("be.visible").click();
    cy.get("#input-first-name-error")
      .should("be.visible")
      .should("include.text", "Requerido");

    // invalid email
    cy.get("#input-email").should("be.visible").type("not-an-email.com");
    cy.get("#input-last-name").should("be.visible").click();
    cy.get("#input-email-error")
      .should("be.visible")
      .should("include.text", "Correo no válido");

    // password too short
    cy.get("#input-password").should("be.visible").type("tooshor");
    cy.get("#input-last-name").should("be.visible").click();
    cy.get("#input-password-error")
      .should("be.visible")
      .should("include.text", "La contraseña debe ser de 8 caracteres o más");

    // password must have a number
    cy.get("#input-password")
      .should("be.visible")
      .clear()
      .type("not a number in sight");
    cy.get("#input-last-name").should("be.visible").click();
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
    cy.get("#input-last-name").should("be.visible").click();
    cy.get("#input-password-error")
      .should("be.visible")
      .should("include.text", "La contraseña requiere una letra mayúscula");

    // passwords don't match
    cy.get("#input-password-confirm")
      .should("be.visible")
      .type("this password doesn't match with the one above");
    cy.get("#input-last-name").should("be.visible").click();
    cy.get("#input-password-confirm-error")
      .should("be.visible")
      .should("include.text", "Las contraseñas no coinciden");
  });
});
