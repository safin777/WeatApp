import { useState, useEffect, useContext } from 'react'
import { LocationContext } from '../context'

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: '',
    climate: '',
    temperature: '',
    maxTemperature: '',
    minTemperature: '',
    humidity: '',
    cloudPercentage: '',
    wind: '',
    time: '',
    longitude: '',
    latitude: '',
  })

  //loding indicator

  const [loading, setLoading] = useState({
    state: false,
    message: '',
  })

  const [error, setError] = useState(null)
  const { selectedLocation } = useContext(LocationContext)

  //call api

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: 'Fetching weather data...',
      })

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_APP_WEATHER_API_KEY
        }&units=metric`,
      )

      if (!response.ok) {
        const errorMsg = `Failed to fetch weather data - ${response.status}`
        throw new Error(errorMsg)
      }

      const data = await response.json()

      const updatedWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude,
      }

      setWeatherData(updatedWeatherData)
    } catch (err) {
      setError(err)
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: '',
      })
    }
  }

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: 'Fetching location...',
    })
    if (selectedLocation.latitude && selectedLocation.longitude) {
      fetchWeatherData(selectedLocation.latitude, selectedLocation.longitude)
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        fetchWeatherData(position.coords.latitude, position.coords.longitude)
      })
    }
    //reset loading state
  }, [selectedLocation.latitude, selectedLocation.longitude])

  return { weatherData, loading, error }
}

export default useWeather
