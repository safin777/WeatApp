import WeatherContext from '../context/index'
import { useWeather } from '../hooks'

export default function WeatherProvider({ children }) {
  const { weatherData, error, loading } = useWeather()
  return (
    <WeatherContext.Provider value={{ weatherData, error, loading }}>
      {children}
    </WeatherContext.Provider>
  )
}
