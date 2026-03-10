import React from 'react'

const Home = () => {
  const projects = [
    {
      name: 'AutoGPT Next',
      icon: '🤖',
      description: '完全自主的通用智能体，能够独立完成复杂任务，支持长期记忆和工具调用。',
      tags: ['通用智能体', '开源', '自主执行'],
      url: 'https://github.com/Significant-Gravitas/AutoGPT'
    },
    {
      name: 'Agent Protocol',
      icon: '🔌',
      description: '智能体之间的通用通信协议，实现不同Agent平台的互联互通和能力共享。',
      tags: ['协议标准', '跨平台', '互操作'],
      url: 'https://agentprotocol.ai'
    },
    {
      name: 'Multi-Agent Collaboration Framework',
      icon: '👥',
      description: '多智能体协同工作框架，支持角色分工、任务分配和团队协作完成复杂项目。',
      tags: ['多智能体', '协同', '团队协作'],
      url: '#'
    },
    {
      name: 'Agent Memory System',
      icon: '🧠',
      description: '智能体专用长期记忆系统，支持向量检索、记忆召回和经验学习。',
      tags: ['记忆系统', '向量数据库', 'RAG'],
      url: '#'
    },
    {
      name: 'Agent Tool Marketplace',
      icon: '🛠️',
      description: '智能体工具市场，提供数千种预构建的工具插件，一键扩展Agent能力边界。',
      tags: ['工具生态', '插件市场', '能力扩展'],
      url: '#'
    },
    {
      name: 'Agent Security Shield',
      icon: '🛡️',
      description: '智能体安全防护系统，实时监控Agent行为，防止恶意操作和数据泄露。',
      tags: ['安全防护', '行为审计', '风险控制'],
      url: '#'
    }
  ]

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Agent X</h1>
          <p>下一代智能体平台与协议，定义智能体交互的未来标准</p>
          <a href="/resources" className="cta-button">探索开发资源</a>
        </div>
      </section>

      <main>
        <div className="container">
          <section className="section">
            <h2>精选Agent项目展示</h2>
            <div className="project-grid">
              {projects.map((project, index) => (
                <div className="project-card" key={index}>
                  <div className="project-image">
                    {project.icon}
                  </div>
                  <div className="project-content">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, tagIndex) => (
                        <span className="tag" key={tagIndex}>{tag}</span>
                      ))}
                    </div>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                      了解详情 →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h2>Agent X 生态愿景</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto', background: '#f8f9fa', padding: '2rem', borderRadius: '12px' }}>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                Agent X 致力于构建开放、互通的智能体生态系统，打破不同智能体平台之间的壁垒，实现：
              </p>
              <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', lineHeight: '2.2', fontSize: '1.05rem' }}>
                <li>🌐 <strong>统一协议标准</strong>：定义智能体之间的通用通信协议，实现跨平台互操作</li>
                <li>🔄 <strong>能力自由流转</strong>：智能体的能力可以在不同平台之间自由迁移和调用</li>
                <li>🤝 <strong>多方协同网络</strong>：支持成千上万的智能体组成协作网络，共同完成超大规模任务</li>
                <li>⚡ <strong>创新加速引擎</strong>：降低智能体开发门槛，让更多开发者参与到Agent生态建设中</li>
                <li>🔒 <strong>安全可信体系</strong>：建立智能体身份认证、行为审计和责任追溯机制</li>
              </ul>
              <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>
                我们相信，未来的数字世界将由数百万个智能体共同组成，Agent X 正在为这个愿景提供核心基础设施。
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default Home
