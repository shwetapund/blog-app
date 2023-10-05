import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
export default function Home() {
    return(
        <>
        <div>
        <h1>Home</h1>
        <Link to="/post">Post</Link>
        </div>
        </>
    )
}