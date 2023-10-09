import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';


export default function Home() {
    return (
        <>
            <Navbar/>
            <div className='main-title-container'>
                <h1 className='blog-name'>Self-Improvement and<br/> Personal Development</h1>
        
                <p className='text'>Self means a personality, character, nature, attitude, character, behavior, or integrity that is unique or owned by an individual. Then, development means a process by which an individual or something grows, develops or changes to become more advanced. While improvement is an improvement in something to be better.</p>



   

            </div >
        </>
    )
}