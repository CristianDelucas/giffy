import React from 'react'
import './Gif.css'

const Gif = ({title,id,url}) => {
  return (
    <a href={`#${id}`} className='Gif'>
        <h4>{title}</h4>
        <img src={url} alt={id}/>
      </a>
  )
}

export default Gif