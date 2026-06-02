import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Feed = () => {
    
    const [posts, setPosts] = useState([])
    {/*{
            _id: "1", 
            image: "https://plus.unsplash.com/premium_photo-1755882951386-2c2c05f32f76?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            caption: "Beautiful scenery",
        }*/}

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
        .then((res)=>{
            console.log(res.data);
            setPosts(res.data.post)
        })
    }, [])
    
    return (
        <section className='feed-section'>
            <h1>Your Feed</h1>
            {
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id} className='post-card'>
                            <img src={post.image} alt={post.caption} />
                            <h3>{post.caption}</h3>
                        </div>
                    ))
                ) : (
                    <h1>No post available</h1>
                )
            }
        </section>
    )
} 

export default Feed