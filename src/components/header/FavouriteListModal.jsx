import { useContext } from 'react'
import { FavouriteContext, LocationContext } from '../../context'

export default function FavouriteListModal() {
  const { favourite } = useContext(FavouriteContext)
  const { setSelectedLocation } = useContext(LocationContext)
  return (
    <>
      <div className="absolute right-0 max-w-xs py-4 text-black bg-white border-gray-500 rounded-md shadow-lg top-16 ">
        <h3 className="px-4 text-lg font-bold">Favourite Locations</h3>
        <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
          {
            //check if lenght greater then 0
            favourite.length > 0 ? (
              favourite.map((fav) => (
                <li
                  key={fav.location}
                  onClick={() =>
                    setSelectedLocation({
                      ...fav,
                    })
                  }
                  className="flex items-center justify-between px-4 py-2 bg-gray-100"
                >
                  <a>{fav.location}</a>
                </li>
              ))
            ) : (
              <li className="px-4 py-2">No Favourite Locations</li>
            )
          }
        </ul>
      </div>
    </>
  )
}
