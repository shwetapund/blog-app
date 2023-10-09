import React, { useEffect, useState } from 'react'
import './ReadPost.css'
import Navbar from '../../components/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import blogData from './../../configs/blog.json'


export default function ReadPost() {
 const {id} = useParams() //id read aur is id se hum particular post ka obj findout kar rahe hei uerwale blog data sse

 const [post, setPost] = useState({}) //post nam ka useState var banaya

 useEffect(() =>{
    blogData.forEach((postObj) =>{
        if(postObj.id == id){
            setPost(postObj)
        }
    });
 }, [id]) // ye dependency hein to hum tabhi findout karenge jub humein id mile
    return(
        <>
        <Navbar/>
        <div>
            
            <h1 className='title-readpost'>{post.title}</h1>
            <img src={post.image} className='img-readpost'/>
            <p className='description'>{post.description}</p>
            <h3 className='key'>{post.key1}</h3>
            <h3 className='key'>{post.key2}</h3>
            <h3 className='key'>{post.key3}</h3>
            <h3 className='key'>{post.key4}</h3>
            <h3 className='key'>{post.key5}</h3>
         
            <h3 className='point'>{post.point1}</h3>
            <p className='description'>{post.description1}</p>
            <h3 className='point'>{post.point2}</h3>
            <p className='description'>{post.description2}</p>
            <h3 className='point'>{post.point3}</h3>
            <p className='description'>{post.description3}</p>
            <h3 className='point'>{post.point4}</h3>
             
            <p className='description'>{post.description4}</p>
            <h3 className='point'>{post.point5}</h3>
    
            
         
             <p className='description'>{post.description5}</p>
        </div>
        </>
    )
}