import { useEffect, useState } from "react";
import Post from "./post";

export default function AllPosts(){
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3001/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
<<<<<<< HEAD

                
=======
>>>>>>> fd02f86ae36d9be2ca4783ab93db6123cf467be5
            });
        });
    },[]);

    return(
        <>
        
            {posts.length > 0 && posts.map(post => (
               
                    <Post  {...post} />
                
                
                ))}
        
        </> 
    )
}