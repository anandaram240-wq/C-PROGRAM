import { useState, useEffect } from 'react'
import { RefreshCw, Eye, EyeOff, ChevronRight, SkipForward } from 'lucide-react'
import { allQuestions } from '../data/pyqData'

const LS_KEY = 'ppc_quiz_stats'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Quiz() {
  const [questions] = useState(() => shuffle(allQuestions))
  const [idx, setIdx] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [stats, setStats] = useState(() => {
    try { return JSON.parse(localStorage.getItem(LS_KEY) || '{"attempted":0,"total":0}') }
    catch { return { attempted: 0, total: 0 } }
  })
  const [activeModule, setActiveModule] = useState('all')
  const [filtered, setFiltered] = useState(questions)
  const [filterIdx, setFilterIdx] = useState(0)

  useEffect(() => {
    const f = activeModule === 'all' ? questions : questions.filter(q => q.module === activeModule)
    setFiltered(shuffle(f))
    setFilterIdx(0)
    setRevealed(false)
  }, [activeModule])

  const currentQ = filtered[filterIdx]

  const next = () => {
    setRevealed(false)
    setFilterIdx(i => (i + 1) % filtered.length)
  }

  const reveal = () => {
    setRevealed(true)
    const newStats = { attempted: stats.attempted + 1, total: filtered.length }
    setStats(newStats)
    localStorage.setItem(LS_KEY, JSON.stringify(newStats))
  }

  const modules = ['all', 'Module 1', 'Module 2', 'Module 3', 'Module 4']

  if (!currentQ) return <div style={{color: 'var(--text-muted)', padding: 24}}>Loading questions...</div>

  const priorityColor = currentQ.priority === 'CRITICAL' ? 'var(--red)' : currentQ.priority === 'HIGH' ? 'var(--orange)' : 'var(--yellow)'

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Quiz Mode</h1>
        <p className="page-subtitle">Practice PYQ questions — reveal answer when ready. Great for quick revision!</p>
      </div>

      {/* Stats */}
      <div className="stats-row mb-20">
        <div className="stat-card">
          <div className="stat-value" style={{color: 'var(--accent)'}}>{filterIdx + 1}</div>
          <div className="stat-label">Current Question</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{color: 'var(--text-primary)'}}>{filtered.length}</div>
          <div className="stat-label">Total Questions</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{color: 'var(--green)'}}>{stats.attempted}</div>
          <div className="stat-label">Practiced Today</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{color: 'var(--yellow)'}}>
            {Math.round(((filterIdx) / filtered.length) * 100)}%
          </div>
          <div className="stat-label">Progress</div>
        </div>
      </div>

      {/* Module Filter */}
      <div className="tabs mb-20">
        {modules.map(m => (
          <button key={m} className={`tab ${activeModule === m ? 'active' : ''}`} onClick={() => setActiveModule(m)}>
            {m === 'all' ? 'All' : m}
          </button>
        ))}
      </div>

      {/* Question Card */}
      <div className="quiz-card mb-16">
        {/* Meta */}
        <div className="flex items-center gap-8 mb-16" style={{flexWrap: 'wrap'}}>
          <span style={{
            fontSize: 11, padding: '2px 8px', borderRadius: 4,
            background: priorityColor + '22', color: priorityColor, fontWeight: 600
          }}>
            {currentQ.priority}
          </span>
          <span style={{
            fontSize: 11, padding: '2px 8px', borderRadius: 4,
            background: 'var(--bg-secondary)', color: 'var(--text-muted)'
          }}>
            {currentQ.module}
          </span>
          <span style={{
            fontSize: 11, padding: '2px 8px', borderRadius: 4,
            background: 'var(--accent-light)', color: 'var(--accent)', fontWeight: 700
          }}>
            {currentQ.marks}M
          </span>
          <span style={{fontSize: 12, color: 'var(--text-muted)'}}>
            {currentQ.topic}
          </span>
        </div>

        {/* Question Number */}
        <div style={{
          fontSize: 11, fontWeight: 600, color: 'var(--text-muted)',
          textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 12
        }}>
          Question {filterIdx + 1} of {filtered.length}
        </div>

        {/* Question Text */}
        <div className="quiz-question">{currentQ.q}</div>

        {/* Year Tags */}
        <div className="year-tags mb-20">
          {currentQ.years?.map((y, i) => <span key={i} className="year-tag">{y}</span>)}
        </div>

        {/* Answer Section */}
        {!revealed ? (
          <div style={{
            border: '2px dashed var(--border)', borderRadius: 10, padding: 20,
            textAlign: 'center', color: 'var(--text-muted)', marginBottom: 16
          }}>
            <div style={{fontSize: 14, marginBottom: 8}}>Think about your answer first...</div>
            <div style={{fontSize: 12}}>Then reveal the answer to check</div>
          </div>
        ) : (
          <div className="quiz-answer">
            <div style={{fontSize: 11, fontWeight: 600, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10}}>
              ✅ Answer Guide
            </div>
            <div style={{fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7}}>
              <strong style={{color: 'var(--text-primary)'}}>Topic:</strong> {currentQ.topic}
              <br/><br/>
              <strong style={{color: 'var(--text-primary)'}}>To answer this question, write:</strong>
              <ul style={{paddingLeft: 20, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6}}>
                <li>✦ <strong>Definition</strong> — Define the key term/concept in 1-2 sentences</li>
                <li>✦ <strong>Syntax</strong> — Write the syntax/format (if applicable)</li>
                <li>✦ <strong>Flowchart</strong> — Draw a simple flowchart (if loop/condition question)</li>
                <li>✦ <strong>Example Program</strong> — Write a complete working C program</li>
                <li>✦ <strong>Output</strong> — Show sample input/output</li>
              </ul>
              <br/>
              <div style={{
                background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)',
                borderRadius: 8, padding: '10px 12px', fontSize: 12
              }}>
                💡 Refer to the <strong>Theory</strong> and <strong>Programs</strong> pages for complete answers to this topic.
              </div>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div style={{display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap'}}>
          {!revealed ? (
            <button className="btn btn-primary" onClick={reveal} style={{flex: 1}}>
              <Eye size={15} /> Reveal Answer
            </button>
          ) : (
            <button className="btn btn-outline" onClick={reveal} style={{flex: 1}}>
              <Eye size={15} /> View Answer Again
            </button>
          )}
          <button className="btn btn-outline" onClick={next}>
            <SkipForward size={15} /> Next Question
          </button>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="card">
        <div style={{fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 12}}>
          ⚡ Quick Revision Tips
        </div>
        {[
          'Read the question marks carefully — 10M needs full theory + program, 4M needs only definition + example',
          'Quadratic equation program has appeared in EVERY exam — know it perfectly',
          'For output questions, trace variable values step by step on paper',
          'Partial marks rule: write what you know, never leave blank'
        ].map((tip, i) => (
          <div key={i} style={{
            display: 'flex', gap: 8, padding: '8px 0',
            borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none',
            fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5
          }}>
            <span style={{color: 'var(--accent)', flexShrink: 0}}>›</span>
            {tip}
          </div>
        ))}
      </div>
    </div>
  )
}
