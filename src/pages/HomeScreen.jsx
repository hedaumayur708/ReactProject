import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import CardsList from '../components/CardsList'

export default function HomeScreen() {
  const[products,setProducts]=useState([])

  function getProducts(){
    fetch("https://dummyjson.com/products")
    .then(res=>res.json())
    .then(data=>{
  
      setProducts(data.products)})
    
  }


  useEffect(()=>{
    getProducts();
  },[]);
  return (
    <>
  
    <Navbar />
   
    {products.length > 0 && <CardsList products={products}/>}
    {loading &&<SkeletonCardList /> }
    
    
    </>
  );
}