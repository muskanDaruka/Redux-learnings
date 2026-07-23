import { Route, Routes } from "react-router-dom"
import Register from "../pages/Register"
import Login from "../pages/Login"
import Counter from "../pages/Counter"
import ProductPage from "../pages/ProductPage"

const MainRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/products' element={<ProductPage />} />
    </Routes>
  )
}

export default MainRoute