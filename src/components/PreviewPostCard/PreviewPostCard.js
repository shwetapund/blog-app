import React from 'react'
import './PreviewPostCard.css';
import {Link} from 'react-router-dom'


function PreviewPostCard({id, title,image, description}) {
  return (<>

        <div className='previewPostCard'>
        <img src={image}  className='imgpost'/>
        <h2 className='title'>{title} </h2>
        <p>{description}</p>
   
       
        <Link to={`/post/read/${id}`} className='read-more'>Read More</Link>
        </div></>
  )
}

export default PreviewPostCard
