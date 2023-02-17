
import { useEffect } from "react"
import { useDispatch } from 'react-redux';
import { getAllProducts } from './Redux/actions/actionsProduct';
import ProductList from './components/ProductList/ProductList';
import { Routes, Route } from 'react-router-dom'
import ProductFilter from "./components/ProductFilter/ProductFilter";
import AddProduct from "./components/AddProduct/AddProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import SignInSide from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import { getCurrent } from "./Redux/actions/actionsUser";
import PrivateRoute from "./components/routes/PrivateRoute";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrent())
    dispatch(getAllProducts())
  }, [])

  return (


    <Routes>
      <Route path="/" element={<><NavBar /><ProductFilter /><ProductList /></>} />
      <Route path="/addProduct" element={<><PrivateRoute><AddProduct /></PrivateRoute></>} />
      <Route path="/editProduct/:id" element={<><PrivateRoute><EditProduct /></PrivateRoute></>} />
      <Route path="/login" element={<SignInSide />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/dashboard" element={<><PrivateRoute><NavBar /><Dashboard /></PrivateRoute></>} />
    </Routes>)
}
export default App;
