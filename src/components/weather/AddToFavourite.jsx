import HeartLogo from '../../assets/heart.svg'
import RedHeart from '../../assets/heart-red.svg'
import { useContext, useState,useEffect } from 'react'
import { FavouriteContext, WeatherContext } from '../../context'
export default function AddToFavourite() {
  const { favourite, AddToFavourite, RemoveFromFavourite } = useContext(
    FavouriteContext,
  )
  const { weatherData } = useContext(WeatherContext)
  const { location, latitude, longitude } = weatherData
  const [isFavourite, toggleIsFavourite] = useState(false)

  useEffect(() => {
    const found = favourite.find((fav) => fav.location === location)
    if (found) {
      toggleIsFavourite(true)
    }
  }, [])

  const handleFavourite = () => {
    const found = favourite.find((fav) => fav.location === location)
    if (found) {
      RemoveFromFavourite(location)
    } else {
      AddToFavourite(latitude, longitude, location)
    }
    toggleIsFavourite(!isFavourite)
  }

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavourite}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? RedHeart : HeartLogo} alt="heart icon" />
        </button>
      </div>
    </div>
  )
}
