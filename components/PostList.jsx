import React from "react";

<div>

    {post.map((post) =>{
        return <Post key={post.id} post={post} />;
    })}


</div>