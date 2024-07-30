import Favourite from './Favourite'
import FavouriteListModal from './FavouriteListModal'
import Logo from './Logo'
import Search from './Search'
import { useState } from 'react'

export default function Header() {
  const [showFavModal,setShowFavModal] = useState(false)
  
  return (
    <header className="fixed top-0 z-50 w-full pb-10 bg-gradient-to-b from-black/60 to-black/0">
      <nav className="container flex items-center justify-between py-6">
        <Logo />
        <div className="relative flex items-center gap-4">
          <Search />
          <Favourite onShow={()=>{
            setShowFavModal(!showFavModal)
          }} />
          {showFavModal && <FavouriteListModal />}
        </div>
      </nav>
    </header>
  )
}
