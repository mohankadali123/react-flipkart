import React from 'react'

export default function Prodiv1( props) {
  return (
     <>
               <div className='prodiv'>
        <img className='pro-img' src={props.thumbnail} alt='msp' />
       
            <h2 className='pro-heading'>{props.brand}</h2>
        <p className='pro-heading'>{props.des}</p>
        </div>
     </>
    )
}
