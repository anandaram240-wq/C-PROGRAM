import { useState } from 'react'
import { Copy, Check, ChevronDown, ChevronRight } from 'lucide-react'
import { programs } from '../data/programsData'

/* ── Single-pass tokenizer (no chained regex, no self-corruption) ── */
function highlightC(rawCode) {
  // Step 1: escape HTML entities
  const code = rawCode
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  const KEYWORDS = new Set([
    'void','int','float','double','char','long','short','unsigned','signed',
    'return','if','else','while','for','do','switch','case','break','continue',
    'default','struct','union','typedef','sizeof','const','static','extern',
    'printf','scanf','gets','puts','strlen','strcpy','strcmp','strcat','strrev',
    'sqrt','sin','cos','tan','pow','abs','malloc','free','include','define','main'
  ])

  // Step 2: single master regex — order matters (comments first, then strings, then keywords, then numbers)
  return code.replace(
    /(\/\*[\s\S]*?\*\/|\/\/[^\n]*)|(#[a-zA-Z_]\w*)|("(?:[^"\\]|\\.)*")|('(?:[^'\\]|\\.)*')|(\b(?:void|int|float|double|char|long|short|unsigned|signed|return|if|else|while|for|do|switch|case|break|continue|default|struct|union|typedef|sizeof|const|static|extern|printf|scanf|gets|puts|strlen|strcpy|strcmp|strcat|strrev|sqrt|sin|cos|tan|pow|abs|malloc|free|main)\b)|(\b\d+\.?\d*[fFlLuU]?\b)/g,
    (match, comment, preproc, dqStr, sqStr, keyword, num) => {
      if (comment)  return `<span style="color:#6e7681;font-style:italic">${match}</span>`
      if (preproc)  return `<span style="color:#c792ea">${match}</span>`
      if (dqStr || sqStr) return `<span style="color:#a3be8c">${match}</span>`
      if (keyword)  return `<span style="color:#82aaff;font-weight:600">${match}</span>`
      if (num)      return `<span style="color:#f78c6c">${match}</span>`
      return match
    }
  )
}

function CodeBlock({ code, title }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div style={{
      background: '#0d1117',
      border: '1px solid #30363d',
      borderRadius: 10,
      overflow: 'hidden',
      margin: '12px 0'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '9px 14px',
        background: 'rgba(255,255,255,0.03)',
        borderBottom: '1px solid #30363d'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {/* Traffic light dots */}
          {['#ff5f57','#febc2e','#28c840'].map((c,i) => (
            <div key={i} style={{width:10,height:10,borderRadius:'50%',background:c}} />
          ))}
          <span style={{
            fontSize: 12, color: '#8b949e',
            fontFamily: 'var(--font-mono)', marginLeft: 4
          }}>
            {title || 'program.c'}
          </span>
        </div>
        <button
          onClick={handleCopy}
          style={{
            display: 'flex', alignItems: 'center', gap: 5,
            padding: '4px 10px', borderRadius: 6,
            border: '1px solid #30363d',
            background: copied ? 'rgba(34,197,94,0.15)' : 'transparent',
            color: copied ? '#22c55e' : '#8b949e',
            fontSize: 11, fontWeight: 500, cursor: 'pointer',
            fontFamily: 'inherit', transition: 'all 0.15s'
          }}
        >
          {copied ? <><Check size={11} /> Copied!</> : <><Copy size={11} /> Copy</>}
        </button>
      </div>
      {/* Code */}
      <pre style={{
        padding: '16px 18px',
        overflowX: 'auto',
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        lineHeight: 1.75,
        color: '#e6edf3',
        margin: 0,
        whiteSpace: 'pre'
      }}
        dangerouslySetInnerHTML={{ __html: highlightC(code) }}
      />
    </div>
  )
}

export default function Programs() {
  const [activeModule, setActiveModule] = useState('all')
  const [openPrograms, setOpenPrograms] = useState({ 1: true })

  const moduleTabs = ['all', 'Module 1', 'Module 2', 'Module 3', 'Module 4']
  const filtered = activeModule === 'all' ? programs : programs.filter(p => p.module === activeModule)
  const toggle = (id) => setOpenPrograms(prev => ({ ...prev, [id]: !prev[id] }))

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Programs</h1>
        <p className="page-subtitle">All 14 must-know C programs — correct, complete, exam-ready</p>
      </div>

      {/* Tip */}
      <div className="alert alert-info mb-20">
        <span className="alert-icon">💡</span>
        <div className="alert-content">
          <strong>Partial Marks Rule</strong>
          Even if logic is wrong — writing correct <code style={{
            background:'rgba(255,255,255,0.1)', padding:'1px 5px',
            borderRadius:3, fontFamily:'var(--font-mono)', fontSize:12
          }}>#include&lt;stdio.h&gt;</code> + <code style={{
            background:'rgba(255,255,255,0.1)', padding:'1px 5px',
            borderRadius:3, fontFamily:'var(--font-mono)', fontSize:12
          }}>void main()</code> + variable declarations = 3–4 marks guaranteed.
        </div>
      </div>

      {/* Module Tabs */}
      <div className="tabs mb-20">
        {moduleTabs.map(m => (
          <button key={m} className={`tab ${activeModule === m ? 'active' : ''}`}
            onClick={() => setActiveModule(m)}>
            {m === 'all' ? 'All Programs' : m}
          </button>
        ))}
      </div>

      {/* Programs List */}
      {filtered.map((prog) => {
        const isOpen = openPrograms[prog.id]
        const freqHigh = prog.frequency >= 5
        return (
          <div key={prog.id}
            className={`accordion-item mb-12 ${isOpen ? 'open' : ''}`}
            style={{ borderLeft: freqHigh ? '3px solid var(--red)' : '3px solid var(--border)' }}
          >
            <div className="accordion-header" onClick={() => toggle(prog.id)}>
              {/* Number badge */}
              <div style={{
                width: 30, height: 30, borderRadius: 8,
                background: freqHigh ? 'var(--red-light)' : 'var(--accent-light)',
                color: freqHigh ? 'var(--red)' : 'var(--accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 700, flexShrink: 0,
                fontFamily: 'var(--font-mono)'
              }}>
                {String(prog.id).padStart(2,'0')}
              </div>

              <div style={{ flex: 1 }}>
                <div className="accordion-title">{prog.title}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 3 }}>
                  {prog.module} &nbsp;·&nbsp; Appeared <strong style={{color: freqHigh ? 'var(--red)' : 'var(--text-muted)'}}>{prog.frequency}×</strong>
                </div>
              </div>

              <div className="accordion-meta">
                {freqHigh && (
                  <span className="badge badge-critical">🔥 MUST KNOW</span>
                )}
                {isOpen
                  ? <ChevronDown size={16} color="var(--text-muted)" />
                  : <ChevronRight size={16} color="var(--text-muted)" />}
              </div>
            </div>

            {isOpen && (
              <div className="accordion-body">
                {/* Explanation box */}
                <div style={{
                  background: 'rgba(99,102,241,0.08)',
                  border: '1px solid rgba(99,102,241,0.2)',
                  borderRadius: 8, padding: '12px 14px', marginBottom: 14
                }}>
                  <span style={{
                    fontSize: 11, fontWeight: 700, color: 'var(--accent)',
                    textTransform: 'uppercase', letterSpacing: '0.6px'
                  }}>
                    Logic / Key Points
                  </span>
                  <p style={{fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 6}}>
                    {prog.explanation}
                  </p>
                </div>

                {/* Code */}
                <CodeBlock code={prog.code} title={`prog${prog.id}.c`} />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
