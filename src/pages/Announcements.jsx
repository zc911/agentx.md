import React from 'react'

const Announcements = () => {
  const announcements = [
    {
      date: '2026-03-10',
      title: 'Agent Protocol v1.0 正式发布，成为行业标准',
      content: '经过6个月的公开测试和社区讨论，Agent Protocol v1.0正式发布，已有超过20家主流Agent平台宣布支持该协议。'
    },
    {
      date: '2026-03-08',
      title: '全球Agent创业公司融资总额突破100亿美元',
      content: '2026年第一季度Agent领域融资持续火爆，共有32家创业公司获得融资，总金额超过100亿美元，估值同比增长300%。'
    },
    {
      date: '2026-03-05',
      title: 'OpenClaw 发布 Agent Runtime 2.0，性能提升500%',
      content: 'OpenClaw最新发布的Agent Runtime 2.0版本，在任务执行效率、资源消耗等方面都有大幅提升，支持百万级智能体并发运行。'
    },
    {
      date: '2026-03-01',
      title: '欧盟发布智能体监管框架草案，明确责任划分',
      content: '欧盟委员会发布全球首个智能体监管框架草案，对智能体的设计、开发、部署和使用提出了明确的监管要求和责任划分标准。'
    },
    {
      date: '2026-02-28',
      title: '首届全球Agent开发者大会将于6月在旧金山举办',
      content: '首届Global Agent Developer Conference (GADC) 将于2026年6月15-17日在旧金山举办，预计将有超过5000名开发者参与。'
    },
    {
      date: '2026-02-25',
      title: '微软推出Copilot Studio 3.0，支持自定义智能体开发',
      content: '微软最新发布的Copilot Studio 3.0，大幅降低了企业级智能体的开发门槛，支持无代码构建复杂的业务智能体。'
    }
  ]

  return (
    <main>
      <div className="container">
        <section className="section">
          <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#333' }}>
            行业动态公告
          </h1>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {announcements.map((item, index) => (
              <div className="announcement" key={index}>
                <div className="announcement-item">
                  <div className="announcement-date">{item.date}</div>
                  <div className="announcement-title">{item.title}</div>
                  <p style={{ marginTop: '0.8rem', opacity: 0.95 }}>{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: '#f8f9fa', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '1rem', color: '#f5576c' }}>订阅行业动态</h3>
            <p style={{ marginBottom: '1.5rem', color: '#666' }}>
              订阅我们的邮件通讯，每周接收最新的Agent领域动态、融资事件和技术进展。
            </p>
            <a href="mailto:zack.mm.chen@gmail.com?subject=订阅Agent行业动态" style={{ 
              display: 'inline-block',
              padding: '0.8rem 2rem',
              background: '#f5576c',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '600'
            }}>
              立即订阅
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Announcements
