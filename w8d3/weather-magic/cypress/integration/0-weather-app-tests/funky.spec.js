/// <reference types="cypress" />

describe("Existence of black holes", () => {
  it("should find a black hole or something", () => {
    cy.visit("https://google.com");
    cy.get(".gLFyf").type("Einstein-Rosen Bridge{enter}");

    cy.get(
      ":nth-child(1) > .MjjYud > .g > .kvH3mc > .jGGQ5e > .yuRUbf > a > .LC20lb"
    ).should("contain.text", "Wormhole");
  });
});
