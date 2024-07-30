//import css
import './App.css'
import Page from './Page'
import './index.css'
import {
  WeatherProvider,
  FavouriteProvider,
  LocationProvider,
} from './provider'

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page />
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  )
}

export default App
