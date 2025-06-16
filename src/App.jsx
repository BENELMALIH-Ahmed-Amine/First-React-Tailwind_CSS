import './App.css'
import { Routes, Route } from 'react-router-dom'
// import Navbar from './Components/nav/Navbar'
import Todo_list from './Components/Todo_list/Todo_list'
import Products from './Components/Shop/Products'
import Products_Info from './Components/Shop/Products_Info'
import Home from './Components/Movies/Home'
import MovieDetails from './Components/Movies/MovieDetails'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Todo_list />} />
        <Route path="/houses/" element={<Products />} />
        <Route path="/houses/:id" element={<Products_Info />} />
        <Route path="/Movies/" element={<Home />} />
        <Route path="/Movies/:gg" element={<MovieDetails />} />
      </Routes>
    </>
  )
}

export default App
