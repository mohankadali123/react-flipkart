import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Prodiv from './Prodiv'
export default function Products() {
    const [products,setProducts]=useState([{}])
    useEffect(()=>{axios.get('https://dummyjson.com/products')
.then(res=>setProducts(res.data.products))})

const prodata=products.map(pro=>{
    return <Prodiv thumbnail={pro.thumbnail} title={pro.title} description={pro.description} rating={pro.rating} brand={pro.brand}/>
  })
  return (
    <div>
          <div className='products-div'>{prodata}</div>      
    </div>
    )
}
