export default function FavouriteListModal() {
  return (
    <>
      <div className="absolute right-0 max-w-xs py-4 text-black bg-white border-gray-500 rounded-md shadow-lg top-16 ">
        <h3 className="px-4 text-lg font-bold">Favourite Locations</h3>
        <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
          <li className="hover:bg-gray-200">Dhaka</li>
          <li className="hover:bg-gray-200">Rangpur</li>
          <li className="hover:bg-gray-200">Europe</li>
        </ul>
      </div>
    </>
  )
}
