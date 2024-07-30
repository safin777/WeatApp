import { FavouriteContext } from '../context'
import { useLocaleStorage } from '../hooks'

const FavouriteProvider = ({ children }) => {
  const [favourite, setFavourite] = useLocaleStorage('favourites', [])
  const AddToFavourite = (latitude, longitude, location) => {
    setFavourite([...favourite, { latitude, longitude, location }])
  }
  const RemoveFromFavourite = (location) => {
    const restFavourite = favourite.filter((fav) => fav.location !== location)
    setFavourite(restFavourite)
  }
  return (
    <FavouriteContext.Provider value={{ favourite,AddToFavourite,RemoveFromFavourite }}>
      {children}
    </FavouriteContext.Provider>
  )
}

export default FavouriteProvider
