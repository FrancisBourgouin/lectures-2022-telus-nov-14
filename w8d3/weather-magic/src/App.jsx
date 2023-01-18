import { useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import CityForm from "./components/CityForm";
import CityList from "./components/CityList";
import CurrentWeather from "./components/CurrentWeather";

import "./App.scss";
import { useEffect } from "react";
// App (state: cityHistory, currentWeather) (fetchWeatherForCity)
function App() {
  const [cityHistory, setCityHistory] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);

  const fetchWeatherByCoords = (lat, lng) => {
    const apiKey = "09fd719b4b698ec0260e424f83378e3d";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;

    axios
      .get(url)
      .then((res) => res.data)
      .then(setCurrentWeather);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      console.log(coords);
      fetchWeatherByCoords(latitude, longitude);
    });
  }, []);

  const fetchWeather = (cityName) => {
    const apiKey = "09fd719b4b698ec0260e424f83378e3d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    // ...
    return axios
      .get(url)
      .then((res) => res.data)
      .then(setCurrentWeather);
  };

  const fetchWeatherForCity = (formData) => {
    fetchWeather(formData.name)
      .then(() => {
        cityHistory.indexOf(formData.name) === -1 &&
          setCityHistory([...cityHistory, formData.name]);
      })
      .catch((err) => {
        console.log(err);
        setCurrentWeather(null);
      });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <CityForm onSubmit={fetchWeatherForCity} />
        <CityList cityHistory={cityHistory} fetchWeather={fetchWeather} />
        {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
        {/* <CurrentWeather currentWeather={currentWeather} /> */}
      </main>
    </div>
  );
}

export default App;
