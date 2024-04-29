
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './Pages/Home'
import Movielist from './components/Movielist/Movielist'
import Detail from './Pages/Detail'
import Toprated from './Pages/Toprated'
import Footer from './components/Footer/Footer'
import Upcoming from './Pages/Upcoming'
// import Crousal from './components/Crousal/Crousal'

function App() {
  


  return (
   <div className='App'>
    <BrowserRouter>
    <Header/>
    {/* <Crousal/> */}
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/movie/:id' element={<Detail/>} />
        <Route path='/movies/:type' element={<Movielist/>}/>
        <Route path='/movies/Toprated' element={<Toprated/>}/>
        <Route path='/movies/Upcoming' element={<Upcoming/>}/>
        {/* <Route path='/*' element={<h1>eorr page</h1>}/> */}
      </Routes>

      <Footer/>
    </BrowserRouter>
   </div>
  )
}

export default App


