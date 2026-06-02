import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/premium.webp'; 

const Home = () => {
  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url(${backgroundImage})`
  };

  return (
    <div className="home-container" style={containerStyle}>
      <header className="home-header">
        <h1>Welcome to SocialSpace</h1>
        <p className="home-description">
          A place to share your thoughts, connect with friends, and explore 
          beautiful moments. Create your own posts or catch up with what's happening 
          right now in your feed.
        </p>
      </header>

      <div className="home-actions">
        <Link to="/create-post" className="home-card-btn">
          <div className="card-icon">✍️</div>
          <h3>Create Post</h3>
          <p>Share a new update, thought, or a beautiful picture with everyone.</p>
        </Link>

        <Link to="/feed" className="home-card-btn">
          <div className="card-icon">🖼️</div>
          <h3>Your Feed</h3>
          <p>Explore recent posts, view stunning scenery, and see what's trending.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;