import { useContext } from 'react'
import AddToFavourite from './AddToFavourite'
import WeatherCondition from './WeatherCondition'
import WeatherHeadline from './WeatherHeadline'
import WeatherContext from '../../context'

export default function WeatherBoard() {
  const { weatherData, loading } = useContext(WeatherContext)

  return (
    <>
      <div className="container">
        <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
          <div className="grid gap-10 md:grid-cols-2 md:gap-6">
            {loading.state ? (
              <p>Loading...</p>
            ) : (
              <>
                <AddToFavourite />
                <WeatherHeadline />
                <WeatherCondition />
              </>
            )}
            {/* <AddToFavourite />
            <WeatherHeadline />
            <WeatherCondition /> */}
          </div>
        </div>
      </div>
    </>
  )
}
