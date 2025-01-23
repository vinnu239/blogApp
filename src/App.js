import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import MyPostsPage from './components/Pages/MyPostPage';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/my-posts" element={<MyPostsPage />} />
        <Route path="/posts/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;