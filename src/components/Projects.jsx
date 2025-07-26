import React from 'react'

const projects = [
  {
    id: 1,
    title: 'Snake Game',
    description: 'Combining my love for retro games with web development, I recreated the classic Snake game using HTML, CSS, and JavaScript.',
    url: 'https://kdavis00.github.io/Snake/',
  },
  {
    id: 2,
    title: 'Magic 8 Ball',
    description: 'I’ve recreated the classic Magic 8 Ball using HTML, CSS, and JavaScript. Ask it any question and let fate decide your destiny!',
    url: 'https://kdavis00.github.io/Magic-8Ball/',
  },
  {
    id: 3,
    title: 'Pong',
    description: 'Pong Game: A simple yet addictive Pong game built with HTML, CSS, and JavaScript. play against the computer.',
    url: 'https://kdavis00.github.io/pong/',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(({ id, title, description, url }) => (
          <div key={id} className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
