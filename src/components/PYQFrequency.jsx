import { useState } from 'react'
import { TrendingUp, Filter } from 'lucide-react'
import { modules } from '../data/pyqData'

export default function PYQFrequency() {
  const [activeModule, setActiveModule] = useState('all')

  const allTopics = modules.flatMap(m =>
    m.topics.map(t => ({ ...t, moduleName: m.name, moduleTitle: m.title, priority: m.priority, color: m.color, moduleId: m.id }))
  ).sort((a, b) => b.frequency - a.frequency)

  const filtered = activeModule === 'all' ? allTopics : allTopics.filter(t => String(t.moduleId) === activeModule)

  const priorityBadge = (p) => {
    if (p === 'CRITICAL') return <span className="badge badge-critical">🔥 CRITICAL</span>
    if (p === 'HIGH') return <span className="badge badge-high">⚡ HIGH</span>
    return <span className="badge badge-medium">📘 MEDIUM</span>
  }

  const freqColor = (f) => f >= 6 ? 'var(--red)' : f >= 4 ? 'var(--orange)' : f >= 2 ? 'var(--yellow)' : 'var(--text-muted)'

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">PYQ Frequency Analysis</h1>
        <p className="page-subtitle">Topics sorted by how many times they appeared in past exams — study the top ones first</p>
      </div>

      <div className="alert alert-warning" style={{marginBottom: 20}}>
        <span className="alert-icon">🎯</span>
        <div className="alert-content">
          <strong>Strategy: Focus on top-frequency topics first</strong>
          Topics with 5+ appearances are almost guaranteed to appear. Master those before anything else.
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="tabs mb-20">
        <button className={`tab ${activeModule === 'all' ? 'active' : ''}`} onClick={() => setActiveModule('all')}>All Modules</button>
        {modules.map(m => (
          <button key={m.id} className={`tab ${activeModule === String(m.id) ? 'active' : ''}`} onClick={() => setActiveModule(String(m.id))}>
            {m.name}
          </button>
        ))}
      </div>

      {/* Stats Row */}
      <div className="stats-row mb-24">
        <div className="stat-card">
          <div className="stat-value" style={{color: 'var(--red)'}}>
            {allTopics.filter(t => t.priority === 'CRITICAL').length}
          </div>
          <div className="stat-label">Critical Topics</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{color: 'var(--orange)'}}>
            {allTopics.filter(t => t.priority === 'HIGH').length}
          </div>
          <div className="stat-label">High Priority Topics</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{color: 'var(--accent)'}}>{allTopics.length}</div>
          <div className="stat-label">Total Topics</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{color: 'var(--green)'}}>
            {allTopics.reduce((s, t) => s + t.frequency, 0)}
          </div>
          <div className="stat-label">Total Questions</div>
        </div>
      </div>

      {/* Topic List */}
      <div>
        {filtered.map((topic, idx) => (
          <div key={idx} className="card mb-12" style={{borderLeft: `3px solid ${topic.color}`}}>
            <div className="flex items-center justify-between mb-8" style={{flexWrap: 'wrap', gap: 8}}>
              <div className="flex items-center gap-8" style={{flexWrap: 'wrap'}}>
                <span style={{
                  fontSize: 18, fontWeight: 800, color: freqColor(topic.frequency),
                  fontFamily: 'var(--font-mono)', minWidth: 24
                }}>#{idx + 1}</span>
                <span style={{fontSize: 14, fontWeight: 600, color: 'var(--text-primary)'}}>
                  {topic.topic}
                </span>
              </div>
              <div className="flex items-center gap-8" style={{flexShrink: 0}}>
                {priorityBadge(topic.priority)}
                <span style={{
                  background: freqColor(topic.frequency) + '22',
                  color: freqColor(topic.frequency),
                  border: `1px solid ${freqColor(topic.frequency)}44`,
                  borderRadius: 8, padding: '4px 12px', fontSize: 13, fontWeight: 700
                }}>
                  {topic.frequency}× appeared
                </span>
              </div>
            </div>

            <div className="flex items-center gap-8 mb-8" style={{flexWrap: 'wrap'}}>
              <span style={{
                fontSize: 11, padding: '2px 8px', borderRadius: 4,
                background: topic.color + '22', color: topic.color, fontWeight: 600
              }}>
                {topic.moduleName}
              </span>
              <span style={{fontSize: 12, color: 'var(--text-muted)'}}>{topic.moduleTitle}</span>
              <span style={{fontSize: 12, color: 'var(--text-muted)'}}>· Up to {topic.marks}M</span>
            </div>

            {/* Frequency Bar */}
            <div className="progress-bar-wrap mb-8">
              <div className="progress-bar-fill" style={{
                width: `${Math.min((topic.frequency / 8) * 100, 100)}%`,
                background: `linear-gradient(90deg, ${topic.color}, ${topic.color}99)`
              }} />
            </div>

            {/* Year tags */}
            <div className="year-tags">
              {topic.years.map((y, i) => (
                <span key={i} className="year-tag">{y}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
