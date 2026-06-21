import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <h3>LUMEN</h3>
          <p>A focused design approach built for modern digital products.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Social</h4>

            <a
              href="https://www.linkedin.com/in/rafael-barreto-silva/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin style={{ marginRight: "8px" }} />
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/rafael_barreto95/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram style={{ marginRight: "8px" }} />
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} LUMEN. All rights reserved.</p>
      </div>
    </footer>
  );
}