import axios from "axios";
import { Navigate } from "react-router-dom";
import { ADD_PRODUCT_FAIL, ADD_PRODUCT_SUCCESS, EDIT_PRODUCT_FAIL, EDIT_PRODUCT_SUCCESS, GET_ALLPRODUCTS_FAIL, GET_ALLPRODUCTS_SUCCESS, GET_ONEPRODUCTS_FAIL, GET_ONEPRODUCTS_SUCCESS, LOADINGPRODUCTS } from "../action-type/action-type";

export const getAllProducts=()=>async(dispatch)=>{
    dispatch({
        type:LOADINGPRODUCTS,
    })
    try {
        
        const res = await axios.get("http://localhost:5000/api/product/")
        dispatch({
            type:GET_ALLPRODUCTS_SUCCESS,
            payload:res.data
        });
      }
      catch (err) {
        console.log(err)
        dispatch({
            type:GET_ALLPRODUCTS_FAIL,
            payload:err.message
        });
      }
    }
export const addProduct=(productBody,navigate)=>async(dispatch)=>{
  try{
    const resProduct = await axios.post('http://localhost:5000/api/product/',productBody)
    dispatch({
      type:ADD_PRODUCT_SUCCESS,
      payload: resProduct.data
    })
    navigate('/')
  }
  catch(err){
    console.log(err)
    dispatch({
        type:ADD_PRODUCT_FAIL,
        payload:err.message
    });
  }

}
export const editProduct=(navigate,id,productBody)=>async(dispatch)=>{

  try{
    const resProduct = await axios.put(`http://localhost:5000/api/product/${id}`,productBody)
    dispatch({
      type:EDIT_PRODUCT_SUCCESS,
      payload: resProduct.data
    })
    navigate('/')
  }
  catch(err){
    console.log(err)
    dispatch({
        type:EDIT_PRODUCT_FAIL,
        payload:err.message
    });
  }

}
export const getOneProduct=(id)=>async(dispatch)=>{
  dispatch({
      type:LOADINGPRODUCTS,
  })
  try {
      
      const res = await axios.get(`http://localhost:5000/api/product/${id}`)
      console.log(res);
      dispatch({
          type:GET_ONEPRODUCTS_SUCCESS,
          payload:res.data
      });
    }
    catch (err) {
      console.log(err)
      dispatch({
          type:GET_ONEPRODUCTS_FAIL,
          payload:err.message
      });
    }
  }