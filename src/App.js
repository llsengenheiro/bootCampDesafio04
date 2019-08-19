import React from "react";
import './App.css';
import Header from './components/Header';
import PostList from './components/PostList';
import Post from './components/Post';

function App(){
    return (
     <>   
        <Header/>
        <PostList/>
     </>
    )
}
export default App;