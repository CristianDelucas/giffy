import React from 'react'
import './Styles.css'
import {Link} from 'wouter';

const Gif = ({title,id,url}) => {
  return (
        <div className='Gif'>
        <Link to={`/gif/${id}`} className='Gif-link'>
            <a href={`#${id}`} className='Gif'>
                <h4>{title}</h4>
                <img loading='lazy' src={url} alt={id}/>
            </a>
        </Link>
        </div>
  )
}

export default Gif