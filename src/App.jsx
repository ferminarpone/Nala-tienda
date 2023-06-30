import { Destacados } from './components/Destacados'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { Opiniones } from './components/Opiniones'

export const App = () => {
  return (
    <>
    <div className="homeImg">
      <NavBar/>
    </div>    
    <Destacados/>
    <Opiniones/>
    <Footer/>
    </>
  )
}
