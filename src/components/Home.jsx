import { useState, useEffect } from 'react'
import { Clock, BookOpen, Code2, CheckCircle, AlertTriangle, ArrowRight, Target, Zap } from 'lucide-react'
import { modules } from '../data/pyqData'
import { studyPlan } from '../data/studyPlan'

function useCountdown(targetDate) {
  const [time, setTime] = useState({})
  useEffect(() => {
    function calc() {
      const now = new Date()
      const target = new Date(targetDate)
      const diff = target - now
      if (diff <= 0) return setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      setTime({
        days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [targetDate])
  return time
}

export default function Home({ onNavigate }) {
  const time = useCountdown('2026-07-02T10:00:00+05:30')

  const [checks, setChecks] = useState(() => {
    try { return JSON.parse(localStorage.getItem('ppc_module_checks') || '{}') }
    catch { return {} }
  })

  const mustKnow = [
    { topic: 'Basic Structure of C Program', marks: 10, freq: 8, mod: 'M1' },
    { topic: 'Roots of Quadratic Equation',  marks: 10, freq: 7, mod: 'M2' },
    { topic: 'String Handling Functions',    marks: 10, freq: 6, mod: 'M3' },
    { topic: 'Student Record — Structure',   marks: 10, freq: 5, mod: 'M4' },
    { topic: 'Call by Value vs Reference',   marks: 10, freq: 5, mod: 'M4' },
  ]

  const totalTopics = modules.reduce((s, m) => s + m.topics.length, 0)
  const done = Object.values(checks).filter(Boolean).length

  const today = new Date()
  const examStart = new Date('2026-06-23')
  const dayNum = Math.floor((today - examStart) / (1000*60*60*24)) + 1
  const currentDay = studyPlan[Math.min(Math.max(dayNum - 1, 0), 7)]

  const urgency = time.days <= 2 ? 'danger' : time.days <= 5 ? 'warning' : 'info'
  const urgencyMsg = time.days <= 2
    ? '🚨 EXAM IS TOMORROW! Focus only on must-know topics!'
    : time.days <= 5
    ? '⚠️ Less than 5 days! Stick to the plan!'
    : '✅ Stay on schedule — follow the 8-day plan!'

  return (
    <div>
      {/* Header */}
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Principles of Programming Using C (PPC5133) — MCE Hassan</p>
      </div>

      {/* Urgency Alert */}
      <div className={`alert alert-${urgency === 'info' ? 'info' : urgency === 'warning' ? 'warning' : 'danger'}`} style={{marginBottom: 20}}>
        <span className="alert-icon">{urgency === 'danger' ? '🚨' : urgency === 'warning' ? '⚠️' : '📋'}</span>
        <div className="alert-content">
          <strong>{urgencyMsg}</strong>
          Pass = 40/100 marks. Answer any 5 of 8 questions. At least 1 per module.
        </div>
      </div>

      {/* Countdown */}
      <div className="card mb-20" style={{background: 'linear-gradient(135deg, #0f0f1a 0%, #16161f 100%)'}}>
        <div className="flex items-center gap-8 mb-12">
          <Clock size={16} color="var(--accent)" />
          <span style={{fontSize: 13, fontWeight: 600, color: 'var(--accent)'}}>Time Until Exam — July 2, 2026</span>
        </div>
        <div className="countdown-grid">
          {[
            { label: 'Days',    val: time.days },
            { label: 'Hours',   val: time.hours },
            { label: 'Minutes', val: time.minutes },
            { label: 'Seconds', val: time.seconds },
          ].map(({ label, val }) => (
            <div className="countdown-item" key={label}>
              <div className="countdown-number">
                {String(val ?? 0).padStart(2, '0')}
              </div>
              <div className="countdown-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <div className="stats-row mb-24">
        <div className="stat-card">
          <div className="stat-value" style={{color: 'var(--accent)'}}>100</div>
          <div className="stat-label">Total Marks</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{color: 'var(--green)'}}>40</div>
          <div className="stat-label">Marks to Pass</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{color: 'var(--yellow)'}}>5/8</div>
          <div className="stat-label">Questions to Answer</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{color: 'var(--orange)'}}>8</div>
          <div className="stat-label">Days to Prepare</div>
        </div>
      </div>

      <div className="card-grid card-grid-2 mb-24">
        {/* Today's Plan */}
        <div className="card">
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-8">
              <Zap size={16} color={currentDay?.color || 'var(--accent)'} />
              <span style={{fontSize: 13, fontWeight: 600, color: 'var(--text-primary)'}}>
                Today — Day {Math.min(Math.max(dayNum, 1), 8)}
              </span>
            </div>
            <button className="btn btn-outline btn-sm" onClick={() => onNavigate('plan')}>
              Full Plan <ArrowRight size={12} />
            </button>
          </div>
          {currentDay ? (
            <>
              <div style={{
                display: 'inline-block', padding: '4px 10px', borderRadius: 6,
                background: currentDay.color + '22', color: currentDay.color,
                fontSize: 12, fontWeight: 600, marginBottom: 12
              }}>
                {currentDay.label}
              </div>
              <div>
                {currentDay.tasks.slice(0, 4).map((t, i) => (
                  <div key={i} style={{
                    padding: '7px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                    fontSize: 13, color: 'var(--text-secondary)', display: 'flex', gap: 8
                  }}>
                    <span style={{color: 'var(--text-muted)', flexShrink: 0}}>›</span>
                    {t}
                  </div>
                ))}
                {currentDay.tasks.length > 4 && (
                  <div style={{fontSize: 12, color: 'var(--text-muted)', marginTop: 8}}>
                    +{currentDay.tasks.length - 4} more tasks
                  </div>
                )}
              </div>
            </>
          ) : (
            <p style={{color: 'var(--text-muted)', fontSize: 13}}>Exam day! You're ready. All the best! 🎯</p>
          )}
        </div>

        {/* Must Know Topics */}
        <div className="card">
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-8">
              <Target size={16} color="var(--red)" />
              <span style={{fontSize: 13, fontWeight: 600, color: 'var(--text-primary)'}}>5 Must-Know Topics</span>
            </div>
            <span style={{fontSize: 11, color: 'var(--text-muted)'}}>= 40+ marks guaranteed</span>
          </div>
          {mustKnow.map((t, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '8px 0', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none'
            }}>
              <div>
                <div style={{fontSize: 13, color: 'var(--text-primary)', fontWeight: 500}}>{t.topic}</div>
                <div style={{fontSize: 11, color: 'var(--text-muted)', marginTop: 2}}>
                  {t.mod} · Appeared {t.freq}×
                </div>
              </div>
              <div style={{
                background: 'var(--red-light)', color: 'var(--red)',
                border: '1px solid rgba(239,68,68,0.3)', borderRadius: 6,
                padding: '2px 8px', fontSize: 11, fontWeight: 700, flexShrink: 0
              }}>
                {t.marks}M
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Module Overview */}
      <div style={{marginBottom: 24}}>
        <h2 className="section-heading">Module Priority Overview</h2>
        <div className="card-grid card-grid-2">
          {modules.map(m => (
            <div key={m.id} className="card" style={{borderLeft: `3px solid ${m.color}`}}>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-8">
                  <span style={{fontSize: 13, fontWeight: 700, color: m.color}}>{m.name}</span>
                  <span className={`badge badge-${m.priority.toLowerCase()}`}>{m.priority}</span>
                </div>
                <BookOpen size={14} color={m.color} />
              </div>
              <div style={{fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8}}>
                {m.title}
              </div>
              <div style={{fontSize: 12, color: 'var(--text-muted)', marginBottom: 12}}>
                {m.topics.length} topics · {m.topics.reduce((s, t) => s + t.frequency, 0)} total questions
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 4}}>
                {m.topics.slice(0, 3).map((t, i) => (
                  <span key={i} style={{
                    fontSize: 11, padding: '2px 7px', borderRadius: 4,
                    background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)'
                  }}>
                    {t.topic.split('(')[0].trim()}
                  </span>
                ))}
                {m.topics.length > 3 && (
                  <span style={{fontSize: 11, color: 'var(--text-muted)'}}>+{m.topics.length - 3} more</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Nav */}
      <div>
        <h2 className="section-heading">Quick Navigation</h2>
        <div className="card-grid card-grid-4">
          {[
            { label: 'Study Plan', sub: '8-day schedule', page: 'plan', icon: '📅', color: 'var(--green)' },
            { label: 'Quiz Mode', sub: 'Practice PYQs', page: 'quiz', icon: '🧠', color: 'var(--purple)' },
            { label: 'Programs', sub: '14 code programs', page: 'programs', icon: '💻', color: 'var(--blue)' },
            { label: 'Theory', sub: '8 exam answers', page: 'theory', icon: '📖', color: 'var(--orange)' },
          ].map(item => (
            <button key={item.page} className="card" style={{cursor: 'pointer', textAlign: 'left', border: 'none'}}
              onClick={() => onNavigate(item.page)}>
              <div style={{fontSize: 24, marginBottom: 8}}>{item.icon}</div>
              <div style={{fontSize: 13, fontWeight: 600, color: 'var(--text-primary)'}}>{item.label}</div>
              <div style={{fontSize: 12, color: 'var(--text-muted)', marginTop: 2}}>{item.sub}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
