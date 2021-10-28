import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
const Posts = () => {
  const posts = useSelector((state) => {
    return state.posts;
  });
  return (
    <>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
