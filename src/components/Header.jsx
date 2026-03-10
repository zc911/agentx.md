import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/" className="logo">Agent X</Link>
          <ul className="nav-links">
            <li><Link to="/">项目展示</Link></li>
            <li><Link to="/resources">开发资源</Link></li>
            <li><Link to="/announcements">行业公告</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
