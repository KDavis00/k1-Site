import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <p>
        Right now, I'm experimenting with HTML, CSS, JavaScript, and React — exploring new tools and figuring out how to bring creative ideas to life on the web.
        <br /><br />
        On the side, I'm also a part-time Twitch streamer, where I share creative projects, build computers, have chill dev sessions, and the occasional game stream.
      </p>
      <p>Connect with me on:</p>
      <div>
        <a
          href="https://www.linkedin.com/in/kae-davis-551915139/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/KDavis00"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </section>
  );
}
