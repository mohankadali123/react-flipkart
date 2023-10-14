import React from 'react'
import catogiriesdata from './catogiriesdata'
import Cato from './cato'
export default function catogiries() {
    const prodata=catogiriesdata.map(pro=>{
        return <Cato img={pro.img} name={pro.name} />
      })
  return (
    <>
       <div className='cat-div shadow'>{prodata}</div>
    </>
  )
}
