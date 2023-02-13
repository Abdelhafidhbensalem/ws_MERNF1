import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import './productList.css'

function ProductList() {
  const list = useSelector(state => state.productReducer.products)
  console.log(list);
  return (
    <>
    <div className='flex'>{list.map(el=><ProductCard key={el._id} el={el} />)}<Link to='/addProduct'> <button>Add Product</button></Link></div>
    
    </>
  )
}

export default ProductList