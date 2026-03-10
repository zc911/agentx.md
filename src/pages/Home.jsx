import React from 'react'

const Home = () => {
  const projects = [
    {
      name: 'AutoGPT Next',
      icon: '🤖',
      description: 'Fully autonomous general-purpose agent capable of independently completing complex tasks with long-term memory and tool calling support.',
      tags: ['General Agent', 'Open Source', 'Autonomous Execution'],
      url: 'https://github.com/Significant-Gravitas/AutoGPT'
    },
    {
      name: 'Agent Protocol',
      icon: '🔌',
      description: 'Universal communication protocol between agents enabling interoperability and capability sharing across different Agent platforms.',
      tags: ['Protocol Standard', 'Cross-Platform', 'Interoperability'],
      url: 'https://agentprotocol.ai'
    },
    {
      name: 'Multi-Agent Collaboration Framework',
      icon: '👥',
      description: 'Multi-agent collaborative framework supporting role specialization, task allocation, and team collaboration for complex projects.',
      tags: ['Multi-Agent', 'Collaboration', 'Teamwork'],
      url: '#'
    },
    {
      name: 'Agent Memory System',
      icon: '🧠',
      description: 'Specialized long-term memory system for agents with vector retrieval, memory recall, and experience learning capabilities.',
      tags: ['Memory System', 'Vector DB', 'RAG'],
      url: '#'
    },
    {
      name: 'Agent Tool Marketplace',
      icon: '🛠️',
      description: 'Agent tool marketplace providing thousands of pre-built tool plugins to extend Agent capabilities with one click.',
      tags: ['Tool Ecosystem', 'Plugin Market', 'Capability Extension'],
      url: '#'
    },
    {
      name: 'Agent Security Shield',
      icon: '🛡️',
      description: 'Agent security protection system that monitors Agent behavior in real-time to prevent malicious operations and data leaks.',
      tags: ['Security', 'Behavior Audit', 'Risk Control'],
      url: '#'
    }
  ]

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Agent X</h1>
          <p>Next-generation agent platform and protocol defining the future standards of agent interaction</p>
          <a href="/resources" className="cta-button">Explore Developer Resources</a>
        </div>
      </section>

      <main>
        <div className="container">
          <section className="section">
            <h2>Featured Agent Projects</h2>
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
                      Learn More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h2>Agent X Ecosystem Vision</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                Agent X is dedicated to building an open, interconnected agent ecosystem that breaks down barriers between different agent platforms, enabling:
              </p>
              <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', lineHeight: '2.2', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                <li>🌐 <strong>Unified Protocol Standards</strong>: Define universal communication protocols between agents for cross-platform interoperability</li>
                <li>🔄 <strong>Free Capability Flow</strong>: Agent capabilities can be freely migrated and invoked across different platforms</li>
                <li>🤝 <strong>Multi-Party Collaboration Network</strong>: Support thousands of agents forming collaborative networks to complete ultra-large-scale tasks</li>
                <li>⚡ <strong>Innovation Acceleration Engine</strong>: Lower the barrier to agent development, allowing more developers to participate in building the Agent ecosystem</li>
                <li>🔒 <strong>Secure and Trustworthy System</strong>: Establish mechanisms for agent identity authentication, behavior auditing, and responsibility tracing</li>
              </ul>
              <p style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-primary)' }}>
                We believe the future digital world will be composed of millions of agents working together, and Agent X is providing the core infrastructure for this vision.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default Home
