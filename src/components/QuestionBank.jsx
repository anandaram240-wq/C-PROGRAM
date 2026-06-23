import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { modules } from '../data/pyqData'

export default function QuestionBank() {
  const [activeModule, setActiveModule] = useState('all')
  const [openTopics, setOpenTopics] = useState({})
  const [search, setSearch] = useState('')

  const toggleTopic = (key) => setOpenTopics(prev => ({ ...prev, [key]: !prev[key] }))

  const filtered = modules.filter(m => activeModule === 'all' || String(m.id) === activeModule)

  const searchLower = search.toLowerCase()

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Question Bank</h1>
        <p className="page-subtitle">All actual PYQ questions from Dec 2023 to Jan 2026 — grouped by module and topic</p>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search questions..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          width: '100%', padding: '10px 14px', borderRadius: 8,
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          color: 'var(--text-primary)', fontSize: 13, marginBottom: 16,
          outline: 'none', fontFamily: 'inherit'
        }}
      />

      {/* Module Tabs */}
      <div className="tabs mb-20">
        <button className={`tab ${activeModule === 'all' ? 'active' : ''}`} onClick={() => setActiveModule('all')}>All</button>
        {modules.map(m => (
          <button key={m.id} className={`tab ${activeModule === String(m.id) ? 'active' : ''}`} onClick={() => setActiveModule(String(m.id))}>
            {m.name}
          </button>
        ))}
      </div>

      {filtered.map(m => {
        const visibleTopics = m.topics.filter(t =>
          !searchLower ||
          t.topic.toLowerCase().includes(searchLower) ||
          t.questions.some(q => q.q.toLowerCase().includes(searchLower))
        )
        if (visibleTopics.length === 0) return null
        return (
          <div key={m.id} className="mb-24">
            {/* Module Header */}
            <div className="flex items-center gap-12 mb-12">
              <div style={{
                width: 4, height: 32, borderRadius: 2, background: m.color, flexShrink: 0
              }} />
              <div>
                <div className="flex items-center gap-8">
                  <span style={{fontSize: 15, fontWeight: 700, color: m.color}}>{m.name}</span>
                  <span className={`badge badge-${m.priority.toLowerCase()}`}>{m.priority}</span>
                </div>
                <div style={{fontSize: 13, color: 'var(--text-secondary)', marginTop: 2}}>{m.title}</div>
              </div>
            </div>

            {/* Topics */}
            {visibleTopics.map((topic, tidx) => {
              const key = `${m.id}-${tidx}`
              const isOpen = openTopics[key]
              const matchingQs = search
                ? topic.questions.filter(q => q.q.toLowerCase().includes(searchLower))
                : topic.questions

              return (
                <div key={key} className={`accordion-item ${isOpen ? 'open' : ''}`}>
                  <div className="accordion-header" onClick={() => toggleTopic(key)}>
                    <div style={{flex: 1}}>
                      <div className="accordion-title">{topic.topic}</div>
                      <div style={{fontSize: 12, color: 'var(--text-muted)', marginTop: 2}}>
                        {topic.questions.length} questions · Appeared {topic.frequency}× · Up to {topic.marks}M
                      </div>
                    </div>
                    <div className="accordion-meta">
                      <div style={{
                        background: topic.frequency >= 5 ? 'var(--red-light)' : topic.frequency >= 3 ? 'var(--orange-light)' : 'rgba(255,255,255,0.05)',
                        color: topic.frequency >= 5 ? 'var(--red)' : topic.frequency >= 3 ? 'var(--orange)' : 'var(--text-muted)',
                        borderRadius: 6, padding: '2px 8px', fontSize: 11, fontWeight: 700,
                        border: `1px solid ${topic.frequency >= 5 ? 'rgba(239,68,68,0.3)' : topic.frequency >= 3 ? 'rgba(249,115,22,0.3)' : 'var(--border)'}`
                      }}>
                        {topic.frequency}×
                      </div>
                      {isOpen ? <ChevronDown size={16} color="var(--text-muted)" /> : <ChevronRight size={16} color="var(--text-muted)" />}
                    </div>
                  </div>
                  {isOpen && (
                    <div className="accordion-body">
                      {/* Year tags */}
                      <div className="year-tags mb-12">
                        {topic.years.map((y, i) => <span key={i} className="year-tag">{y}</span>)}
                      </div>
                      {/* Questions */}
                      {matchingQs.map((q, qi) => (
                        <div key={qi} style={{
                          padding: '12px', background: 'var(--bg-card)', borderRadius: 8,
                          marginBottom: 8, border: '1px solid var(--border)'
                        }}>
                          <div style={{display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap'}}>
                            <div style={{fontSize: 13, color: 'var(--text-primary)', lineHeight: 1.6, flex: 1}}>
                              <span style={{
                                fontSize: 11, fontWeight: 700, color: 'var(--accent)',
                                marginRight: 8, fontFamily: 'var(--font-mono)'
                              }}>
                                Q{qi + 1}.
                              </span>
                              {q.q}
                            </div>
                            <span style={{
                              background: 'var(--accent-light)', color: 'var(--accent)',
                              border: '1px solid rgba(99,102,241,0.3)', borderRadius: 6,
                              padding: '2px 8px', fontSize: 12, fontWeight: 700, flexShrink: 0,
                              height: 'fit-content'
                            }}>
                              {q.marks}M
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
