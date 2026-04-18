
import { Outlet } from 'react-router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import "./Root.css"
function Root() {
  return (

    <>
    <Header/>
    <div className="main">
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Root