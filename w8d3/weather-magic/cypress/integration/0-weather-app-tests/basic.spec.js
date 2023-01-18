/// <reference types="cypress" />

describe("Weather Basic Functionality", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("can enter a city in the form and view the weather", () => {
    // ...

    cy.get(".CityForm input").type("Montréal");
    cy.get(".CityForm > button").click();

    cy.get(".CurrentWeather h1").should("have.text", "Current weather for Montreal");
  });
  it("can click on a button and view the weather", () => {
    // ...

    cy.get(".CityForm input").type("Montréal");
    cy.get(".CityForm > button").click();

    cy.get(".CityForm input").type("Toronto");
    cy.get(".CityForm > button").click();

    cy.get("ul > :nth-child(1) > button").click();

    cy.get(".CurrentWeather h1").should("have.text", "Current weather for Montreal");
  });
});
