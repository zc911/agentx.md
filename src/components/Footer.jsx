import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Agent X</h3>
            <p>下一代智能体平台与协议</p>
            <p>汇聚最前沿的Agent创新项目</p>
          </div>
          <div className="footer-section">
            <h3>快速链接</h3>
            <p><a href="/">项目展示</a></p>
            <p><a href="/resources">开发资源</a></p>
            <p><a href="/announcements">行业公告</a></p>
          </div>
          <div className="footer-section">
            <h3>联系方式</h3>
            <p>邮箱: <a href="mailto:zack.mm.chen@gmail.com">zack.mm.chen@gmail.com</a></p>
            <p>Twitter: @AgentX_org</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Agent X. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
