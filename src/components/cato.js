import React from 'react'

export default function cato(props) {
  return (
    <>
    <div>
    <img className='cat-img' src={props.img} alt='msp' />
    <p className='cat-name'>{props.name}</p>
    </div>
    </>
  )
}
