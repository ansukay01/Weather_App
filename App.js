// Weather.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('');
  const apiKey = e60bbd1199d566b6c7f7051e43f2aae4
  const fetchWeatherData = async () => {
    try {
      const url = `http://api.openweathermap.org/data/2.5/'=${apiKey}`;
      const response = await axios.get(url);
      const data = response.data;

      setWeather({
        description: data.weather[0].description,
        temperature: (data.main.temp - 273.15).toFixed(2), // Convert Kelvin to Celsius
        humidity: data.main.humidity,
      });
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter city name"
        onChangeText={(text) => setCity(text)}
      />
      <Button title="Get Weather" onPress={fetchWeatherData} />

      {weather.description && (
        <View>
          <Text>Weather: {weather.description}</Text>
          <Text>Temperature: {weather.temperature}°C</Text>
          <Text>Humidity: {weather.humidity}%</Text>
        </View>
      )}
    </View>
  );
};

export default Weather;
