import React from 'react';
import './ClassLib.css';
import Navbar from '../Navbar';
import Footer from '../Footer/footer';
function ClassLibraryPage() {
  const classes = [
    {
      title: 'Beginner Yoga',
      level: 'Beginner',
      style: 'Hatha',
      focus: 'Flexibility',
    },
    {
      title: 'Vinyasa Flow',
      level: 'Intermediate',
      style: 'Vinyasa',
      focus: 'Strength',
    },
    {
      title: 'Yin Yoga',
      level: 'Advanced',
      style: 'Yin',
      focus: 'Relaxation',
    },
    {
      title: 'Power Yoga',
      level: 'Intermediate',
      style: 'Power',
      focus: 'Strength and Endurance',
    },
    {
      title: 'Restorative Yoga',
      level: 'All Levels',
      style: 'Restorative',
      focus: 'Relaxation and Healing',
    },
    {
      title: 'Ashtanga Yoga',
      level: 'Advanced',
      style: 'Ashtanga',
      focus: 'Strength and Flexibility',
    },
    {
      title: 'Yoga for Back Pain',
      level: 'All Levels',
      style: 'Therapeutic',
      focus: 'Back Pain Relief',
    },
    {
      title: 'Gentle Yoga',
      level: 'Beginner',
      style: 'Gentle',
      focus: 'Relaxation and Stress Relief',
    },
    {
      title: 'Yoga Sculpt',
      level: 'Intermediate',
      style: 'Sculpt',
      focus: 'Strength and Cardio',
    },
    
    // Add more classes here
  ];

  return (
    <>
    <Navbar/>
    <div className="class-library">
      <h1 className="class-library-title">Class Library</h1>
      <div className="class-library-grid">
        {classes.map((classItem, index) => (
          <div className="class-card" key={index}>
            <h3>{classItem.title}</h3>
            <p>
              <strong>Level:</strong> {classItem.level}
            </p>
            <p>
              <strong>Style:</strong> {classItem.style}
            </p>
            <p>
              <strong>Focus:</strong> {classItem.focus}
            </p>
            <button className="btn btn-primary">Start Class</button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default ClassLibraryPage;