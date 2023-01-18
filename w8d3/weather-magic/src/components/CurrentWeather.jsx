// CurrentWeather (state: --- props: currentWeather)
// temperature : weatherResponse.main.temp (in K => -273.15)
// conditions : weatherResponse.weather[0].description
// name : weatherResponse.name

import { parseTemperature } from "../helpers/weatherHelpers";

export default function CurrentWeather(props) {
  const { currentWeather } = props;

  const parsedTemp = parseTemperature(currentWeather.main.temp);
  return (
    <section className="CurrentWeather">
      <h1>Current weather for {currentWeather.name}</h1>
      <p>Currently {currentWeather.weather[0].description}</p>
      <p>Temperature of {parsedTemp}</p>
    </section>
  );
}
