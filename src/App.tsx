import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Mykhailo Horpynych</h1>
        <p>Creative Technologist</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>Creative Technologist passionate about building modern web and desktop experiences.</p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          <span>JavaScript</span>
          <span>React</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Python</span>
          <span>Laravel</span>
          <span>PHP</span>
          <span>MySQL</span>
          <span>More skills will be added soon...</span>
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <a href="https://github.com/Pupler?tab=repositories" className="project-link">GitHub Repositories</a>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Will be added soon...</p>
      </section>
    </div>
  );
}

export default App;