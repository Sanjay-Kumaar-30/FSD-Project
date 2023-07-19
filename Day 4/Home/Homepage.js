import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from '../Navbar';
import Footer from '../Footer/footer';
import Video from '../../assets/video/video2.mp4';

function HomePage() {
  return (
    <>
    <Navbar/>
    <div className="homepage">
      <header className="hero">
        <h1>Welcome to Yoga Journey</h1>
        <p>Embark on a transformative yoga experience</p>
      </header>
      
      <section className="features">
        <div className="feature">
          <div className="feature-icon">
            <i className="fas fa-user"></i>
            <video autoPlay>
      <source src={Video} type="video/mp4"/>
</video>
          </div>
            
          <div className='foot' >
          <h2 className='white'>Community and Social Features</h2>
          <p className='para'>Connect with fellow yogis, share experiences, ask questions, and find support in our vibrant community. Engage through forums, discussion boards, and social media.</p>
          <Link to="/community" className="btn btn-primary">Join the Community</Link>
          </div>
        </div>
      </section>
      
    </div>
    <Footer/>
    </>
  );
}

export default HomePage;