import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';



export default function Home() {
    return(
        <>
            <div className='main-title-container'>
            <h1 className='blog-name'>New Craze</h1>
            </div>

        <div>
        <h1>Home</h1>
        <Link to="/post">Post</Link>
        </div>
        </>
    )
}