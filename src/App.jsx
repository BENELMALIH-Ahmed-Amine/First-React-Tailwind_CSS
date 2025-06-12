import { MdProductionQuantityLimits } from 'react-icons/md'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/nav/Navbar'
import Todo_list from './Components/Todo_list/Todo_list'
import Products from './Components/Shop/Products'
import Products_Info from './Components/Shop/Products_Info'

function App() {

  return (
    <>
      {/* <Products_Info /> */}
      <Routes>
        <Route path="/" element={<Todo_list />} />
        <Route path="houses" element={<Products />} />
        <Route path="houses/:id" element={<Products_Info />} />
      </Routes>
    </>
  )
}

export default App
