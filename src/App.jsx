import LightThemeMobileBackground from './assets/img/light-theme-mobile-background.png'
import './App.css'

export default function App() {

  return (
    <>
      <div className="container">
        <header className="header">
          <h1>TODO</h1>
          <img
            src={LightThemeMobileBackground}
            className='light-theme-mobile-background'
            alt=""
          />
        </header>
      </div>
    </>
  )
}