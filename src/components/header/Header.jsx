
export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full pb-10 bg-gradient-to-b from-black/60 to-black/0">
		<nav className="container flex items-center justify-between py-6">
			<a href="./index.html">
				<img className="h-9" src="./assets/logo.svg" alt="Weather App" />
			</a>

			<div className="relative flex items-center gap-4">
				<form action="#">
					<div className="flex items-center px-3 py-2 space-x-2 transition-all border-b group focus-within:bg-black/30 border-white/50 focus-within:border-b-0 focus-within:rounded-md">
						<input className="w-full text-xs text-white bg-transparent border-none outline-none placeholder:text-white md:text-base"
							type="search" placeholder="Search Location" required />
						<button type="submit">
							<img src="./assets/search.svg" />
						</button>
					</div>
				</form>
				<div className="flex items-center gap-2 p-2 transition-all rounded-md cursor-pointer hover:bg-black/30">
					<img src="./assets/heart.svg" alt="" />
					<span>Favourite Locations</span>
				</div>

				<div className="absolute right-0 max-w-xs py-4 text-black bg-white border-gray-500 rounded-md shadow-lg top-16 ">
					<h3 className="px-4 text-lg font-bold">Favourite Locations</h3>
					<ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
						<li className="hover:bg-gray-200">Dhaka</li>
						<li className="hover:bg-gray-200">Rangpur</li>
						<li className="hover:bg-gray-200">Europe</li>
					</ul>
				</div>

			</div>
		</nav>
	</header>
  )
}
