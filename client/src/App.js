
import { useEffect } from "react"
import { useDispatch } from 'react-redux';
import { getAllProducts } from './Redux/actions/actionsProduct';
import ProductList from './components/ProductList/ProductList';
import {Routes , Route } from 'react-router-dom'
import ProductFilter from "./components/ProductFilter/ProductFilter";
import AddProduct from "./components/AddProduct/AddProduct";
import EditProduct from "./components/EditProduct/EditProduct";

function App() {
  const dispatch= useDispatch()
  useEffect(() => {
   dispatch(getAllProducts())
  }, [])

  return (
    
     
<Routes>
  <Route path="/" element={<><ProductFilter/><ProductList/></> } />
  <Route path="/addProduct" element={<><AddProduct/></>} />
  <Route path="/editProduct/:id" element={<><EditProduct/></>} />

  </Routes>)}
export default App;
