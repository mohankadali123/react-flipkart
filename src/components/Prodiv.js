import React from 'react'

export default function Prodiv( props) {
  return (
     <>
               <div className='prodiv'>
        <img className='pro-img' src={props.thumbnail} alt='msp' />
       
            <h2 className='pro-heading'>{props.title}</h2>
        <p className='pro-heading'>{props.description}</p>
        </div>
     </>
    )
}
