import SearchLogo from '../../assets/search.svg'
import { useContext } from 'react'
import { LocationContext } from '../../context'
import { getLocationByName } from '../../data/location-data'
import { useDebounce } from '../../hooks'

export default function Search() {
  const { setSelectedLocation } = useContext(LocationContext)

  const doSearch = useDebounce((term) => {
    console.log('searching for', term)
    const fetchedLocation = getLocationByName(term)
    setSelectedLocation({ ...fetchedLocation })
  }, 500)

  const handleChange = (e) => {
    const value = e.target.value
    doSearch(value)
  }
  return (
    <>
      <form action="#">
        <div className="flex items-center px-3 py-2 space-x-2 transition-all border-b group focus-within:bg-black/30 border-white/50 focus-within:border-b-0 focus-within:rounded-md">
          <input
            className="w-full text-xs text-white bg-transparent border-none outline-none placeholder:text-white md:text-base"
            type="search"
            placeholder="Search Location"
            onChange={handleChange}
            required
          />
          <button type="submit">
            <img src={SearchLogo} />
          </button>
        </div>
      </form>
    </>
  )
}
