/// <reference types="cypress" />

function mockLocation(latitude, longitude) {
  return {
    onBeforeLoad(win) {
      cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake((cb, err) => {
        if (latitude && longitude) {
          return cb({ coords: { latitude, longitude } });
        }

        throw err({ code: 1 });
      });
    },
  };
}

describe("Weather Basic Functionality", () => {
  it("can show the weather on first load", () => {
    // ...
    cy.visit("http://localhost:3001", mockLocation(45, 45));
    cy.fixture("weather").then((weather) => {
      console.log(weather);
      cy.intercept("GET", "https://api.openweathermap.org/data/2.5/weather", weather).as(
        "getWeatherData"
      );
    });
    cy.get(".CurrentWeather h1").should("have.text", "Current weather for Urozhaynoye");
  });
});

// Fake the geolocation
// Mock the data
