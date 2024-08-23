/* eslint-disable react/prop-types */
import { useState,useEffect } from "react";
import Header from "./components/Header";
import Post from "./components/Post";

const NewPostButton = ({handlerAddNewPost}) => {
  return <button className="new-post-button" onClick={handlerAddNewPost}>New Post</button>;
};


function App() {
  
  const [posts,setPosts] = useState([]);

  

 const handlerAddNewPost = () => {
  
  const newPost = {
    author:'Sola',
    content:"Welcome to my world !"
  }
  console.log(newPost);
  setPosts((prevPost) => {
    return [...prevPost,newPost];
  });
 }

 useEffect(() => {
  console.log('State updated:', posts);
}, [posts]); 

  return (
    <div className="app">
      <Header />
      <div className="posts-container">
       
       {
        (posts.length > 0) && 
        (
          
          posts.map((post) => {
            <Post author={post.author} content={post.content} />
          })
         
        )
        
       }

       {
        (posts.length == 0) && (<h3>No posts available at this time !</h3>)
       }
      

      </div>
      <NewPostButton handlerAddNewPost={handlerAddNewPost} />
    </div>
  );
}

export default App;
