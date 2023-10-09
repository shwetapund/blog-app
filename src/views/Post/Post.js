import React from "react";
import blogData from './../../configs/blog.json';
import PreviewPostCard from "../../components/PreviewPostCard/PreviewPostCard";
import Navbar from "../../components/Navbar/Navbar";
import './Post.css'

export default function Post() {
    return (
        <>
            <Navbar />
            <div>

                <img src="https://certifiedcoachesfederation.com/wp-content/uploads/2019/08/Personal-Growth-Cycle-1024x536.png" className="image-blog" />
                
                <div className=" mt-5 d-flex justify-content-around ">
                    {
                        blogData.map((post, index) => {
                            return <PreviewPostCard 
                            
                             key={index}
                             id={post.id} 
                              title={post.title} 
                             image={post.image} />

                        }

                        )
                    }
                </div>
            </div>
        </>
    )
}