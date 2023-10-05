import React from "react";
import blogData from './../../configs/blog.json';
import PreviewPostCard from "../../components/PreviewPostCard/PreviewPostCard";

export default function Post() {
    return(
        <>
        <div>
        <h1>Post</h1>
        {
            blogData.map( (post, index) =>{
              return <PreviewPostCard key={index} id={post.id} title={post.title} description={post.description} author={post.author}/>

            }

            )
        }
        </div>
        </>
    )
}