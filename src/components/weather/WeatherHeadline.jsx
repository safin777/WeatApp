import CloudImg from '../../assets/cloud.svg'
import HazeIcon from '../../assets/haze.svg'
import RainIcon from '../../assets/rainy.svg'
import SnowIcon from '../../assets/snow.svg'
import SunnyIcon from '../../assets/sunny.svg'
import ThunderstormIcon from '../../assets/thunder.svg'
import PinImg from '../../assets/pin.svg'
import { useContext } from 'react'
import WeatherContext from '../../context'
import { getFormattedDate } from '../../utils/date-utils'

export default function WeatherHeadline() {
    const { weatherData } = useContext(WeatherContext)
    const {climate, temperature,location,time} = weatherData

    function getWeatherIcon(climate) {
        switch (climate) {
            case 'Clouds':
                return CloudImg
            case 'Clear':
                return SunnyIcon
            case 'Rain':
                return RainIcon
            case 'Snow':
                return SnowIcon
            case 'Thunderstorm':
                return ThunderstormIcon
            case 'Haze':
                return HazeIcon
            case 'Mist':
                return HazeIcon
            case 'Fog':
                return HazeIcon
            default:
                return SunnyIcon
        }
    }
    
  return (
    <div>
      <div className="items-center justify-between max-md:flex md:-mt-10">
        <img src={getWeatherIcon()} alt="cloud" />
        <div className="items-center max-md:flex max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
           {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={PinImg} />
            <h2 className="text-2xl lg:text-[25px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">{getFormattedDate(time,"time",false)}-{getFormattedDate(time,"date",false)}</p>
    </div>
  )
}
