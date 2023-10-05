import React from 'react'
import './PreviewPostCard.css';
import {Link} from 'react-router-dom'
function PreviewPostCard({id, title, author, description}) {
  return (
        <div className='previewPostCard'>
        <h2>{title} </h2>
        <span>By {author}</span>
        <p>{description}</p>
        <Link to={`/post/read/${id}`}>Read More</Link>
        </div>
  )
}

export default PreviewPostCard
