import React from 'react'

const Resources = () => {
  const resources = {
    'API接口': [
      {
        name: 'Agent Universal API',
        description: '智能体通用调用API，支持调用不同平台的Agent能力，统一的接口规范',
        url: '#'
      },
      {
        name: 'Tool Calling API',
        description: '标准化的工具调用API，支持智能体调用外部工具和服务',
        url: '#'
      },
      {
        name: 'Memory Access API',
        description: '智能体记忆系统访问API，支持记忆的存储、检索和管理',
        url: '#'
      }
    ],
    '开发框架': [
      {
        name: 'Agent SDK for Python',
        description: 'Python语言的智能体开发SDK，快速构建Agent应用',
        url: '#'
      },
      {
        name: 'Agent SDK for JavaScript',
        description: 'JavaScript/TypeScript语言的智能体开发SDK，支持Node.js和浏览器环境',
        url: '#'
      },
      {
        name: 'Agent Workflow Designer',
        description: '可视化工作流设计器，无需代码即可设计复杂的Agent工作流',
        url: '#'
      }
    ],
    '开发者工具': [
      {
        name: 'Agent Debugger',
        description: '智能体调试工具，支持断点调试、执行轨迹回放和性能分析',
        url: '#'
      },
      {
        name: 'Agent Test Suite',
        description: '智能体测试套件，自动化测试Agent的功能正确性和鲁棒性',
        url: '#'
      },
      {
        name: 'Agent Monitoring Dashboard',
        description: '智能体运行监控面板，实时监控Agent的运行状态和性能指标',
        url: '#'
      }
    ],
    '学习资源': [
      {
        name: 'Agent Development Bootcamp',
        description: '智能体开发训练营，从入门到精通的完整学习路径',
        url: '#'
      },
      {
        name: 'Best Practices Guide',
        description: '智能体开发最佳实践指南，包含设计模式和常见问题解决方案',
        url: '#'
      },
      {
        name: 'Research Papers Collection',
        description: '智能体领域最新研究论文合集，跟踪学术前沿动态',
        url: '#'
      }
    ]
  }

  return (
    <main>
      <div className="container">
        <section className="section">
          <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#333' }}>
            Agent 开发资源汇总
          </h1>

          {Object.entries(resources).map(([category, items], categoryIndex) => (
            <div className="resource-section" key={categoryIndex}>
              <h3>{category}</h3>
              <ul className="resource-list">
                {items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.name}
                    </a>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', padding: '2rem', borderRadius: '12px', color: 'white', textAlign: 'center', marginTop: '3rem' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>开发者社区</h3>
            <p style={{ marginBottom: '1rem' }}>加入我们的开发者社区，与全球Agent开发者交流学习，获取第一手资源和更新。</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <a href="https://discord.gg/agentx" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontWeight: '600', textDecoration: 'underline' }}>
                Discord 社区
              </a>
              <a href="https://github.com/agentx" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontWeight: '600', textDecoration: 'underline' }}>
                GitHub 组织
              </a>
              <a href="mailto:zack.mm.chen@gmail.com" style={{ color: 'white', fontWeight: '600', textDecoration: 'underline' }}>
                联系我们
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Resources
