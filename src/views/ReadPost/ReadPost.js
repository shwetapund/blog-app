import React, { useEffect, useState } from 'react'
import './ReadPost.css'
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
    })
 }, [id]) // ye dependency hein to hum tabhi findout karenge jub humein id mile
    return(
        <>
        <div>
            
            <h1>{post.title}</h1>
            <span>By {post.author}</span>
            <p>{post.description}</p>
            <p>{post.content}</p>
            <p>Published on {post.publishDate}</p>
        </div>
        </>
    )
}