import Header from './components/header/Header'
import WeatherBoard from './components/weather/WeatherBoard'
import { useContext, useState, useEffect } from 'react'
import { WeatherContext } from './context/index.js'

import ClearSkyImg from './assets/backgrounds/clear-sky.jpg'
import FewCloudImg from './assets/backgrounds/few-clouds.jpg'
import ScatteredCloudsImg from './assets/backgrounds/scattered-clouds.jpg'
import MistImg from './assets/backgrounds/mist.jpeg'
import RainyDayImg from './assets/backgrounds/rainy-day.jpg'
import SnowyDayImg from './assets/backgrounds/snow.jpg'
import ThunderstormImg from './assets/backgrounds/thunderstorm.jpg'
import WinterImg from './assets/backgrounds/winter.jpg'

export default function Page() {
  const { loading, weatherData } = useContext(WeatherContext)
  const [climateBackground, setClimateBackground] = useState('')

  function getBackground(climate) {
    //console.log(climate)
    switch (climate) {
      case 'Clouds':
        return ScatteredCloudsImg

      case 'Clear':
        return ClearSkyImg

      case 'Rain':
        return RainyDayImg

      case 'Snow':
        return SnowyDayImg

      case 'Thunderstorm':
        return ThunderstormImg

      case 'Haze':
        return FewCloudImg

      case 'Mist':
        return MistImg

      case 'Fog':
        return WinterImg

      default:
        return ClearSkyImg
    }
  }

  useEffect(() => {
    console.log(weatherData.climate)
    const backImage = getBackground(weatherData.climate)
    setClimateBackground(backImage)
  }, [weatherData.climate])

  return (
    <>
      {loading.state ? (
        <div className='flex mx-auto bg-gray-200 rounded-md w-96 mt-14'>
          <p className='text-lg'>{loading.message}</p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url('${climateBackground}')` }}
          className="grid h-screen bg-no-repeat bg-cover place-items-center"
        >
          <Header />
          <main className="">
            <section className="">
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  )
}
