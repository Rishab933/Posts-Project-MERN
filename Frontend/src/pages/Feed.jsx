import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Feed = () => {
    
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
        .then((res) => {
            console.log(res.data);
            setPosts(res.data.post)
        })
        .catch((err) => {
            console.log("Error fetching posts:", err)
        })
    }, [])
    
    return (
        <section className='feed-section'>
            <h1>Your Feed</h1>
            {
                posts?.length > 0 ? (
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