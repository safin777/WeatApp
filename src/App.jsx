//import css
import './App.css'
import Header from './components/header/Header'
import WeatherBoard from './components/weather/WeatherBoard'
import './index.css'
import { WeatherProvider } from './provider'

function App() {
  return (
    <WeatherProvider>
      <div className="grid h-screen place-items-center">
        <Header />
        <main className="">
          <section className="">
            <WeatherBoard />
          </section>
        </main>
      </div>
    </WeatherProvider>
  )
}

export default App
