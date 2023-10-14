import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Prodiv from './Prodiv'
import Flip from './flip'
export default function Products1() {
    const [products,setProducts]=useState([{}])
    useEffect(()=>{axios.get('http://localhost:3002/products')
.then(res=>setProducts(res.data.products))})

const prodata=products.map(pro=>{
    return <Flip thumbnail={pro.thumbnail} brand={pro.title} des={pro.description} price={pro.rating} url={pro.brand}/>
  })
  return (
    <div>
          <div className='products-div'>{prodata}</div>      
    </div>
    )
}
