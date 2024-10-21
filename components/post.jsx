import React from "react";



function Post({post}){
    return (
        <div className="post">
            <h1>{post.title}</h1>
            <p> {post.description}</p>
            <p>{post.likes} Likes</p>
            <button> likes</button>
        </div>
    )

}

export default Post;