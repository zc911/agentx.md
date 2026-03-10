import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Agent X</h3>
            <p>Next-generation agent platform and protocol</p>
            <p>Showcasing cutting-edge Agent innovation projects</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <p><a href="/">Projects</a></p>
            <p><a href="/resources">Developer Resources</a></p>
            <p><a href="/announcements">Announcements</a></p>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: <a href="mailto:zack.mm.chen@gmail.com">zack.mm.chen@gmail.com</a></p>
            <p>Twitter: @AgentX_org</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 AgentX. Open source under MIT License.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
