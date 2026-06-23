import { useState } from 'react'
import { ChevronDown, ChevronRight, Copy, Check } from 'lucide-react'
import { allQA } from '../data/allQA'

/* ── Single-pass C syntax highlighter ── */
function highlightC(rawCode) {
  const code = rawCode
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  return code.replace(
    /(\/\*[\s\S]*?\*\/|\/\/[^\n]*)|(#[a-zA-Z_]\w*)|("(?:[^"\\]|\\.)*")|('(?:[^'\\]|\\.)*')|(\b(?:void|int|float|double|char|long|short|unsigned|signed|return|if|else|while|for|do|switch|case|break|continue|default|struct|union|typedef|sizeof|const|static|extern|printf|scanf|gets|puts|strlen|strcpy|strcmp|strcat|strrev|sqrt|sin|cos|tan|pow|abs|malloc|free|main|NULL|FILE)\b)|(\b\d+\.?\d*[fFlLuU]?\b)/g,
    (match, comment, preproc, dqStr, sqStr, keyword, num) => {
      if (comment)        return `<span style="color:#6e7681;font-style:italic">${match}</span>`
      if (preproc)        return `<span style="color:#c792ea">${match}</span>`
      if (dqStr || sqStr) return `<span style="color:#a3be8c">${match}</span>`
      if (keyword)        return `<span style="color:#82aaff;font-weight:600">${match}</span>`
      if (num)            return `<span style="color:#f78c6c">${match}</span>`
      return match
    }
  )
}

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div style={{ background:'#0d1117', border:'1px solid #30363d', borderRadius:10, overflow:'hidden', margin:'10px 0' }}>
      <div style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'8px 14px', background:'rgba(255,255,255,0.03)', borderBottom:'1px solid #30363d'
      }}>
        <div style={{display:'flex', alignItems:'center', gap:6}}>
          {['#ff5f57','#febc2e','#28c840'].map((c,i)=>(
            <div key={i} style={{width:9,height:9,borderRadius:'50%',background:c}} />
          ))}
          <span style={{fontSize:11,color:'#8b949e',fontFamily:'var(--font-mono)',marginLeft:4}}>C</span>
        </div>
        <button onClick={copy} style={{
          display:'flex', alignItems:'center', gap:4, padding:'3px 9px', borderRadius:5,
          border:'1px solid #30363d',
          background: copied ? 'rgba(34,197,94,0.15)' : 'transparent',
          color: copied ? '#22c55e' : '#8b949e',
          fontSize:11, cursor:'pointer', fontFamily:'inherit'
        }}>
          {copied ? <><Check size={10}/> Copied</> : <><Copy size={10}/> Copy</>}
        </button>
      </div>
      <pre style={{
        padding:'14px 18px', overflowX:'auto',
        fontFamily:'var(--font-mono)', fontSize:13,
        lineHeight:1.75, color:'#e6edf3', margin:0, whiteSpace:'pre'
      }} dangerouslySetInnerHTML={{ __html: highlightC(code) }} />
    </div>
  )
}

/* ── Render one answer section ── */
function AnswerSection({ s }) {
  const label = (
    <div style={{
      fontSize:10, fontWeight:700, color:'var(--text-muted)',
      textTransform:'uppercase', letterSpacing:'1px', marginBottom:6
    }}>
      {s.heading}
    </div>
  )

  if (s.type === 'text') return (
    <div style={{marginBottom:18}}>
      {label}
      <p style={{fontSize:14, color:'var(--text-secondary)', lineHeight:1.8}}>{s.text}</p>
    </div>
  )

  if (s.type === 'output') return (
    <div style={{marginBottom:18}}>
      <div style={{fontSize:10,fontWeight:700,color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'1px',marginBottom:6}}>
        Sample Output
      </div>
      <pre style={{
        fontFamily:'var(--font-mono)', fontSize:13, color:'#22c55e',
        background:'rgba(34,197,94,0.07)', border:'1px solid rgba(34,197,94,0.22)',
        borderRadius:8, padding:'12px 14px', whiteSpace:'pre-wrap', margin:0
      }}>
        {s.text}
      </pre>
    </div>
  )

  if (s.type === 'code') return (
    <div style={{marginBottom:18}}>
      {label}
      <CodeBlock code={s.code} />
    </div>
  )

  if (s.type === 'list') return (
    <div style={{marginBottom:18}}>
      {label}
      <div style={{background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:8}}>
        {s.items.map((item, i) => (
          <div key={i} style={{
            padding:'9px 14px', fontSize:13.5, color:'var(--text-primary)',
            borderBottom: i < s.items.length-1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
            lineHeight:1.65
          }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )

  if (s.type === 'table') return (
    <div style={{marginBottom:18}}>
      {label}
      <div style={{overflowX:'auto', marginTop:4}}>
        <table className="theory-table">
          <thead>
            <tr>{s.headers.map((h,i)=><th key={i}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {s.rows.map((row,i)=>(
              <tr key={i}>
                {row.map((cell,j)=>(
                  <td key={j} style={{
                    fontFamily: j===0 ? 'var(--font-mono)' : 'inherit',
                    fontSize: j===0 ? 12 : 13,
                    fontWeight: j===0 ? 600 : 400,
                    color: j===0 ? 'var(--accent)' : 'var(--text-primary)',
                    whiteSpace: 'pre-line'
                  }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  return null
}

/* ── Single Q&A Card ── */
function QACard({ qa, priorityColor, priorityLabel }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`accordion-item mb-10 ${open ? 'open' : ''}`}
      style={{ borderLeft:`3px solid ${priorityColor}` }}
    >
      {/* Header */}
      <div className="accordion-header" onClick={() => setOpen(v => !v)}>
        <div style={{flex:1, minWidth:0}}>
          <div style={{display:'flex', alignItems:'center', gap:6, flexWrap:'wrap', marginBottom:5}}>
            <span style={{
              fontSize:10, fontWeight:700, padding:'2px 7px', borderRadius:4,
              background: priorityColor+'22', color: priorityColor,
              fontFamily:'var(--font-mono)', flexShrink:0
            }}>
              {qa.id}
            </span>
            <span style={{fontSize:11, color:'var(--text-muted)'}}>{qa.module}</span>
            <span style={{
              fontSize:11, fontWeight:600, padding:'1px 6px', borderRadius:4,
              background: priorityColor+'22', color: priorityColor
            }}>
              {qa.marks}M
            </span>
            <span style={{
              fontSize:11, color:'var(--text-muted)',
              background:'rgba(255,255,255,0.05)',
              padding:'1px 6px', borderRadius:4
            }}>
              {qa.years.slice(0,3).join(' · ')}{qa.years.length > 3 ? ` +${qa.years.length-3}` : ''}
            </span>
          </div>
          <div style={{
            fontSize:14, fontWeight:600, color:'var(--text-primary)',
            lineHeight:1.4
          }}>
            {qa.topic}
          </div>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:6, flexShrink:0, marginLeft:8}}>
          <span style={{
            fontSize:11, fontWeight:700, color:'var(--text-muted)'
          }}>
            {qa.frequency || qa.years.length}×
          </span>
          {open
            ? <ChevronDown size={16} color="var(--text-muted)" />
            : <ChevronRight size={16} color="var(--text-muted)" />}
        </div>
      </div>

      {/* Body */}
      {open && (
        <div className="accordion-body">

          {/* ── ALL EXAM QUESTIONS FOR THIS TOPIC ── */}
          <div style={{
            background:'rgba(99,102,241,0.07)',
            border:'1px solid rgba(99,102,241,0.22)',
            borderRadius:10, padding:'14px 16px', marginBottom:20
          }}>
            <div style={{
              fontSize:10, fontWeight:700, color:'var(--accent)',
              textTransform:'uppercase', letterSpacing:'1px', marginBottom:10
            }}>
              📋 PYQ Questions on This Topic ({qa.questions.length} question{qa.questions.length>1?'s':''})
            </div>
            {qa.questions.map((q, i) => (
              <div key={i} style={{
                display:'flex', gap:8, padding:'8px 0',
                borderBottom: i < qa.questions.length-1 ? '1px solid rgba(255,255,255,0.06)' : 'none'
              }}>
                <span style={{
                  fontSize:11, color:'var(--accent)', fontWeight:700,
                  fontFamily:'var(--font-mono)', flexShrink:0, marginTop:2
                }}>Q{i+1}.</span>
                <span style={{fontSize:13.5, color:'var(--text-primary)', lineHeight:1.65}}>
                  {q}
                </span>
              </div>
            ))}
          </div>

          {/* ── COMPLETE ANSWER ── */}
          <div style={{
            fontSize:10, fontWeight:700, color:'var(--green)',
            textTransform:'uppercase', letterSpacing:'1px',
            borderBottom:'1px solid rgba(34,197,94,0.2)',
            paddingBottom:8, marginBottom:18
          }}>
            ✅ Complete Exam Answer
          </div>

          {qa.answer.map((s, i) => <AnswerSection key={i} s={s} />)}
        </div>
      )}
    </div>
  )
}

/* ── Priority section config ── */
const PRIORITIES = [
  {
    level: 1,
    label: '🔴 Priority 1 — CRITICAL (Must Know)',
    sub: 'These topics appear 5+ times. Master these first. Guaranteed in exam.',
    color: '#ef4444',
    badgeClass: 'badge-critical',
  },
  {
    level: 2,
    label: '🟠 Priority 2 — HIGH (Very Likely)',
    sub: 'These topics appear 3–4 times. Study after Priority 1.',
    color: '#f97316',
    badgeClass: 'badge-high',
  },
  {
    level: 3,
    label: '🟡 Priority 3 — MEDIUM (Attempt if time permits)',
    sub: 'Lower frequency but still possible. Study on Day 7–8.',
    color: '#eab308',
    badgeClass: 'badge-medium',
  },
]

/* ── Main Component ── */
export default function Theory() {
  const [activeModule, setActiveModule]   = useState('all')
  const [openSections, setOpenSections]   = useState({ 1: true, 2: false, 3: false })
  const [search, setSearch]               = useState('')

  const modules = ['all', 'Module 1', 'Module 2', 'Module 3', 'Module 4']

  const toggleSection = (level) =>
    setOpenSections(prev => ({ ...prev, [level]: !prev[level] }))

  const filtered = allQA.filter(qa => {
    const matchModule = activeModule === 'all' || qa.module === activeModule
    const matchSearch = !search ||
      qa.topic.toLowerCase().includes(search.toLowerCase()) ||
      qa.questions.some(q => q.toLowerCase().includes(search.toLowerCase()))
    return matchModule && matchSearch
  })

  const counts = {
    1: filtered.filter(q => q.priority === 1).length,
    2: filtered.filter(q => q.priority === 2).length,
    3: filtered.filter(q => q.priority === 3).length,
  }

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Theory Q&A — All Questions</h1>
        <p className="page-subtitle">
          Every PYQ question from all 4 modules with complete exam-ready answers — organized by priority
        </p>
      </div>

      {/* Stats */}
      <div className="stats-row mb-20">
        <div className="stat-card">
          <div className="stat-value" style={{color:'var(--accent)'}}>{allQA.length}</div>
          <div className="stat-label">Total Topics</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{color:'var(--red)'}}>{allQA.filter(q=>q.priority===1).length}</div>
          <div className="stat-label">Priority 1 (Critical)</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{color:'var(--orange)'}}>{allQA.filter(q=>q.priority===2).length}</div>
          <div className="stat-label">Priority 2 (High)</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{color:'var(--yellow)'}}>{allQA.filter(q=>q.priority===3).length}</div>
          <div className="stat-label">Priority 3 (Medium)</div>
        </div>
      </div>

      {/* Controls */}
      <div style={{display:'flex', gap:10, marginBottom:16, flexWrap:'wrap'}}>
        <input
          type="text"
          placeholder="🔍 Search topics or questions..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            flex:1, minWidth:200, padding:'9px 14px', borderRadius:8,
            background:'var(--bg-card)', border:'1px solid var(--border)',
            color:'var(--text-primary)', fontSize:13, outline:'none', fontFamily:'inherit'
          }}
        />
      </div>

      {/* Module Tabs */}
      <div className="tabs mb-24">
        {modules.map(m => (
          <button key={m} className={`tab ${activeModule===m?'active':''}`}
            onClick={() => setActiveModule(m)}>
            {m === 'all' ? `All (${filtered.length})` : m}
          </button>
        ))}
      </div>

      {/* 3 Priority Sections */}
      {PRIORITIES.map(priority => {
        const qs = filtered.filter(q => q.priority === priority.level)
        if (qs.length === 0) return null
        const isOpen = openSections[priority.level]

        return (
          <div key={priority.level} style={{marginBottom:28}}>
            {/* Section Header */}
            <div
              onClick={() => toggleSection(priority.level)}
              style={{
                display:'flex', alignItems:'center', justifyContent:'space-between',
                padding:'14px 18px', borderRadius:10,
                background: priority.color + '14',
                border: `1px solid ${priority.color}44`,
                cursor:'pointer', marginBottom: isOpen ? 14 : 0,
                transition:'all 0.2s'
              }}
            >
              <div>
                <div style={{
                  fontSize:15, fontWeight:700, color: priority.color, marginBottom:4
                }}>
                  {priority.label}
                </div>
                <div style={{fontSize:12, color:'var(--text-muted)'}}>
                  {priority.sub}
                </div>
              </div>
              <div style={{display:'flex', alignItems:'center', gap:10, flexShrink:0}}>
                <span style={{
                  fontSize:13, fontWeight:700,
                  background: priority.color+'22', color: priority.color,
                  border:`1px solid ${priority.color}44`,
                  borderRadius:8, padding:'4px 12px'
                }}>
                  {qs.length} topic{qs.length>1?'s':''}
                </span>
                {isOpen
                  ? <ChevronDown size={18} color={priority.color} />
                  : <ChevronRight size={18} color={priority.color} />}
              </div>
            </div>

            {/* Q&A Cards */}
            {isOpen && (
              <div>
                {qs.map(qa => (
                  <QACard
                    key={qa.id}
                    qa={qa}
                    priorityColor={priority.color}
                    priorityLabel={priority.label}
                  />
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
