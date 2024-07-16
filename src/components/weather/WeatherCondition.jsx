import MaxTemp from '../../assets/icons/temp-max.svg'
import MinTemp from '../../assets/icons/temp-min.svg'
import HumidityImg from '../../assets/icons/humidity.svg'
import CloudImg from '../../assets/cloud.svg'
import WindImg from '../../assets/icons/wind.svg'
import { useContext } from 'react'
import WeatherContext from '../../context'

export default function WeatherCondition() {
  const { weatherData } = useContext(WeatherContext)
  const {
    maxTemperature,
    minTemperature,
    humidity,
    cloudPercentage,
    wind,
    climate,
  } = weatherData
  return (
    <div>
      <p className="mb-8 text-sm font-bold uppercase lg:text-lg">
        The climate is {climate}
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="flex items-center justify-between space-x-4 text-sm lg:text-lg">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(maxTemperature)}°</p>
            <img src={MaxTemp} alt="temp-max" />
          </div>
        </li>
        <li className="flex items-center justify-between space-x-4 text-sm lg:text-lg">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(minTemperature)}°</p>
            <img src={MinTemp} alt="temp-min" />
          </div>
        </li>
        <li className="flex items-center justify-between space-x-4 text-sm lg:text-lg">
          <span>Humadity</span>
          <div className="inline-flex space-x-4">
            <p>{humidity}%</p>
            <img src={HumidityImg} alt="humidity" />
          </div>
        </li>
        <li className="flex items-center justify-between space-x-4 text-sm lg:text-lg">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{cloudPercentage}%</p>
            <img src={CloudImg} alt="cloudy" />
          </div>
        </li>
        <li className="flex items-center justify-between space-x-4 text-sm lg:text-lg">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{wind}km/h</p>
            <img src={WindImg} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  )
}
