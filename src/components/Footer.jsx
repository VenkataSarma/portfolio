import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="Footer" className="footer-container">

    
      <div className="contact-box">
        <h2 className="contact-name">Venkata Sarma Vedam</h2>
        <p className="contact-info">
          Email: <span className="email-link">venkatasarmavedam@gmail.com</span>
        </p>
        <p className="contact-info">Contact: +91 9494627966</p>
      </div>

      <div className="connect-box">
        <h3 className="connect-title">Connect with me:</h3>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/venkata-sarma-vedam-128020261/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin size={32} /> LinkedIn
          </a>

          <a
            href="https://www.instagram.com/smiling_sarma_/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram size={32} /> Instagram
          </a>

          <a
            href="https://github.com/VenkataSarma"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub size={32} /> GitHub
          </a>
        </div>
      </div>

      <p className="footer-text">© {new Date().getFullYear()} VVS Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
