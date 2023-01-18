export const parseTemperature = (tempInK) => {
  const tempInC = tempInK - 273.15;

  const output = `${Math.round(tempInC)}°C`;

  return output;
};
