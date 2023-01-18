import { parseTemperature } from "./weatherHelpers";

describe("parseTemperature function", () => {
  it("converts a valid temp in Kelvin to Celsius", () => {
    const result = parseTemperature(273.15);

    const expectedResult = "0°C";

    expect(result).toBe(expectedResult);
  });
});
