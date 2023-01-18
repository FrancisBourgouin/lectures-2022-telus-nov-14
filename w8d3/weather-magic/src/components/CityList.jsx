// CityList (state: --- props: cityHistory, fetchWeatherForCity)

export default function CityList(props) {
  const { cityHistory, fetchWeather } = props;

  const parsedCities = cityHistory.map((city) => (
    <li key={city}>
      <button onClick={() => fetchWeather(city)}>{city}</button>
    </li>
  ));
  return (
    <section className="CityList">
      <ul>{parsedCities}</ul>
    </section>
  );
}
