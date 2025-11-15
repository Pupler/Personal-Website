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
          <span>Git</span>
          <span>GitHub</span>
          <span>Linux</span>
          <span>Arch Linux</span>
          <span>Java</span>
          <span>C#</span>
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="projects-showcase">
          <div className="project-card">
            <div className="project-preview">
              <img src="/images/crypto-exchange-website-preview.png" alt="crypto-exchange-website" className="preview-image" />
            </div>
            <div className="project-info">
              <h3>Crypto Exchange Website</h3>
              <p>Crypto Exchange - Laravel-based cryptocurrency trading platform with responsive design and real-time trading interface.</p>
              <div className="project-tech">
                <span>Laravel</span>
                <span>PHP</span>
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>MySQL</span>
                <span>Blade</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">Live Demo ↗</a>
                <a href="#" className="project-link secondary">Code</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-preview">
              <img src="/images/uni-forum-project-preview.png" alt="Uni-Forum-Project" className="preview-image" />
            </div>
            <div className="project-info">
              <h3>UNI Forum Project</h3>
              <p>KPI Course Project - Lightweight PHP forum with SQLite database, demonstrating core web development skills.</p>
              <div className="project-tech">
                <span>PHP</span>
                <span>CSS</span>
                <span>HTML</span>
                <span>SQLite</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">Live Demo ↗</a>
                <a href="#" className="project-link secondary">Code</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-preview">
              <img src="/images/my-todo-app-preview.jpg" alt="My-Todo-App" className="preview-image" />
            </div>
            <div className="project-info">
              <h3>My Todo App</h3>
              <p>React Task Manager - Streamlined productivity tool with clean design for effortless task organization and efficiency.</p>
              <div className="project-tech">
                <span>React</span>
                <span>CSS</span>
                <span>HTML</span>
                <span>Local Storage</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">Live Demo ↗</a>
                <a href="#" className="project-link secondary">Code</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Will be added soon...</p>
      </section>

      <section className="social-links">
        <a target='_blank' href="https://github.com/Pupler">GitHub</a>
        <a target='_blank' href="https://www.linkedin.com/in/pupler/">LinkedIn</a>
      </section>

      <footer className="footer">
        <p>© 2025 Mykhailo Horpynych. Built with React & TypeScript</p>
      </footer>
    </div>
  );
}

export default App;