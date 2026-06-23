import { useState, useEffect } from 'react'
import { Check } from 'lucide-react'
import { studyPlan } from '../data/studyPlan'

const LS_KEY = 'ppc_study_plan_checks'

export default function StudyPlan() {
  const [checks, setChecks] = useState(() => {
    try { return JSON.parse(localStorage.getItem(LS_KEY) || '{}') }
    catch { return {} }
  })

  const [activeDay, setActiveDay] = useState(() => {
    const today = new Date()
    const start = new Date('2026-06-23')
    const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24))
    return Math.min(Math.max(diff, 0), 7)
  })

  const save = (newChecks) => {
    setChecks(newChecks)
    localStorage.setItem(LS_KEY, JSON.stringify(newChecks))
  }

  const toggleTask = (day, taskIdx) => {
    const key = `${day}-${taskIdx}`
    save({ ...checks, [key]: !checks[key] })
  }

  const totalTasks = studyPlan.reduce((s, d) => s + d.tasks.length, 0)
  const doneTasks = Object.values(checks).filter(Boolean).length
  const progressPct = Math.round((doneTasks / totalTasks) * 100)

  const today = new Date()
  const examStart = new Date('2026-06-23')
  const currentDayIdx = Math.floor((today - examStart) / (1000 * 60 * 60 * 24))

  const plan = studyPlan[activeDay]

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">8-Day Study Plan</h1>
        <p className="page-subtitle">June 23 – July 1, 2026 · Exam on July 2</p>
      </div>

      {/* Overall Progress */}
      <div className="card mb-20">
        <div className="flex items-center justify-between mb-12">
          <span style={{fontSize: 13, fontWeight: 600, color: 'var(--text-primary)'}}>Overall Progress</span>
          <span style={{fontSize: 13, fontWeight: 700, color: 'var(--accent)'}}>{doneTasks}/{totalTasks} tasks</span>
        </div>
        <div className="progress-bar-wrap mb-8" style={{height: 8}}>
          <div className="progress-bar-fill" style={{
            width: `${progressPct}%`,
            background: `linear-gradient(90deg, var(--accent), var(--green))`
          }} />
        </div>
        <div style={{fontSize: 12, color: 'var(--text-muted)'}}>
          {progressPct}% complete · {totalTasks - doneTasks} tasks remaining
        </div>
      </div>

      {/* Day Selector */}
      <div style={{display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20}}>
        {studyPlan.map((d, i) => {
          const isCurrent = i === currentDayIdx
          const isActive = i === activeDay
          const dayChecks = d.tasks.map((_, ti) => checks[`${i}-${ti}`] || false)
          const dayDone = dayChecks.filter(Boolean).length
          const dayTotal = d.tasks.length
          const allDone = dayDone === dayTotal

          return (
            <button
              key={i}
              onClick={() => setActiveDay(i)}
              style={{
                padding: '8px 12px',
                borderRadius: 8,
                border: isActive
                  ? `2px solid ${d.color}`
                  : isCurrent
                  ? `1px solid ${d.color}66`
                  : '1px solid var(--border)',
                background: isActive ? d.color + '22' : 'var(--bg-card)',
                color: isActive ? d.color : isCurrent ? d.color + 'cc' : 'var(--text-muted)',
                fontSize: 12,
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                position: 'relative',
                fontFamily: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <span>Day {i + 1}</span>
              <span style={{fontSize: 10, opacity: 0.8}}>{dayDone}/{dayTotal}</span>
              {isCurrent && !isActive && (
                <span style={{
                  position: 'absolute', top: -4, right: -4,
                  width: 8, height: 8, borderRadius: '50%',
                  background: d.color, border: '1px solid var(--bg-primary)'
                }} />
              )}
            </button>
          )
        })}
      </div>

      {/* Day Detail */}
      {plan && (
        <div className="card">
          <div className="flex items-center justify-between mb-16" style={{flexWrap: 'wrap', gap: 8}}>
            <div>
              <div className="flex items-center gap-8">
                <span style={{
                  fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 6,
                  background: plan.color + '22', color: plan.color
                }}>
                  Day {activeDay + 1}
                </span>
                {activeDay === currentDayIdx && (
                  <span style={{
                    fontSize: 11, padding: '2px 8px', borderRadius: 4,
                    background: 'var(--green-light)', color: 'var(--green)',
                    border: '1px solid rgba(34,197,94,0.3)', fontWeight: 600
                  }}>
                    TODAY
                  </span>
                )}
              </div>
              <div style={{fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginTop: 6}}>
                {plan.label}
              </div>
              <div style={{fontSize: 12, color: 'var(--text-muted)', marginTop: 2}}>{plan.date}</div>
            </div>
            <div style={{fontSize: 13, color: 'var(--text-secondary)'}}>
              {plan.tasks.filter((_, i) => checks[`${activeDay}-${i}`]).length}/{plan.tasks.length} done
            </div>
          </div>

          {/* Day Progress */}
          <div className="progress-bar-wrap mb-16" style={{height: 4}}>
            <div className="progress-bar-fill" style={{
              width: `${(plan.tasks.filter((_, i) => checks[`${activeDay}-${i}`]).length / plan.tasks.length) * 100}%`,
              background: plan.color
            }} />
          </div>

          {/* Tasks */}
          {plan.tasks.map((task, i) => {
            const checked = checks[`${activeDay}-${i}`] || false
            return (
              <div
                key={i}
                className="checklist-item"
                onClick={() => toggleTask(activeDay, i)}
              >
                <div className={`checklist-checkbox ${checked ? 'checked' : ''}`}>
                  {checked && <Check size={11} color="white" strokeWidth={3} />}
                </div>
                <span className={`checklist-text ${checked ? 'done' : ''}`}>
                  {task}
                </span>
              </div>
            )
          })}
        </div>
      )}

      {/* All Days Summary */}
      <div style={{marginTop: 24}}>
        <h2 className="section-heading">Full 8-Day Schedule</h2>
        <div className="card-grid card-grid-2">
          {studyPlan.map((d, i) => {
            const dayDone = d.tasks.filter((_, ti) => checks[`${i}-${ti}`]).length
            return (
              <div
                key={i}
                className="card"
                style={{
                  borderLeft: `3px solid ${d.color}`,
                  cursor: 'pointer',
                  opacity: i < currentDayIdx && dayDone < d.tasks.length ? 0.6 : 1
                }}
                onClick={() => setActiveDay(i)}
              >
                <div className="flex items-center justify-between mb-8">
                  <span style={{fontSize: 12, fontWeight: 700, color: d.color}}>Day {i + 1}</span>
                  <span style={{fontSize: 11, color: 'var(--text-muted)'}}>{dayDone}/{d.tasks.length}</span>
                </div>
                <div style={{fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4}}>
                  {d.label}
                </div>
                <div style={{fontSize: 11, color: 'var(--text-muted)', marginBottom: 8}}>{d.date}</div>
                <div className="progress-bar-wrap">
                  <div className="progress-bar-fill" style={{
                    width: `${(dayDone / d.tasks.length) * 100}%`,
                    background: d.color
                  }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
