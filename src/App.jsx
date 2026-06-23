import { useState, useEffect } from 'react'
import {
  Home, BookOpen, List, Code2, FileText, Calendar,
  Brain, Trophy, Menu, X, ChevronRight
} from 'lucide-react'
import HomePage from './components/Home'
import PYQFrequency from './components/PYQFrequency'
import QuestionBank from './components/QuestionBank'
import Programs from './components/Programs'
import Theory from './components/Theory'
import StudyPlan from './components/StudyPlan'
import Quiz from './components/Quiz'
import ExamStrategy from './components/ExamStrategy'
import './index.css'

const NAV_ITEMS = [
  { id: 'home',     label: 'Dashboard',     icon: Home,     group: 'Main' },
  { id: 'strategy', label: 'Exam Strategy', icon: Trophy,   group: 'Main' },
  { id: 'plan',     label: 'Study Plan',    icon: Calendar, group: 'Study' },
  { id: 'quiz',     label: 'Quiz Mode',     icon: Brain,    group: 'Study' },
  { id: 'pyq',      label: 'PYQ Frequency', icon: List,     group: 'Content' },
  { id: 'qbank',    label: 'Question Bank', icon: BookOpen, group: 'Content' },
  { id: 'programs', label: 'Programs',      icon: Code2,    group: 'Content' },
  { id: 'theory',   label: 'Theory',        icon: FileText, group: 'Content' },
]

const MOBILE_NAV = [
  { id: 'home',     label: 'Home',    icon: Home },
  { id: 'plan',     label: 'Plan',    icon: Calendar },
  { id: 'quiz',     label: 'Quiz',    icon: Brain },
  { id: 'programs', label: 'Code',    icon: Code2 },
  { id: 'theory',   label: 'Theory',  icon: FileText },
]

const PAGES = {
  home:     HomePage,
  pyq:      PYQFrequency,
  qbank:    QuestionBank,
  programs: Programs,
  theory:   Theory,
  plan:     StudyPlan,
  quiz:     Quiz,
  strategy: ExamStrategy,
}

export default function App() {
  const [page, setPage] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const groups = [...new Set(NAV_ITEMS.map(n => n.group))]
  const PageComponent = PAGES[page] || HomePage

  return (
    <div className="app-layout">
      {/* Desktop Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <h1>⚡ PPC Study</h1>
          <p>MCE Hassan — July 2, 2026</p>
        </div>
        <nav className="sidebar-nav">
          {groups.map(group => (
            <div key={group}>
              <div className="nav-section-label">{group}</div>
              {NAV_ITEMS.filter(n => n.group === group).map(item => (
                <button
                  key={item.id}
                  className={`nav-item ${page === item.id ? 'active' : ''}`}
                  onClick={() => setPage(item.id)}
                >
                  <item.icon size={16} />
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </nav>
        <div style={{padding: '12px 16px', borderTop: '1px solid var(--border)'}}>
          <div style={{fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.5}}>
            <span style={{color: 'var(--red)', fontWeight: 700}}>LAST ATTEMPT</span><br/>
            Pass = 40/100 marks<br/>
            Answer any 5 of 8 questions
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="mobile-header">
        <div style={{fontWeight: 700, color: 'var(--accent)', fontSize: 15}}>⚡ PPC Study</div>
        <button className="btn-ghost btn" onClick={() => setMobileMenuOpen(v => !v)}>
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed', top: 56, left: 0, right: 0,
          background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)',
          zIndex: 199, padding: '8px', maxHeight: 'calc(100vh - 56px)', overflowY: 'auto'
        }}>
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              className={`nav-item ${page === item.id ? 'active' : ''}`}
              onClick={() => { setPage(item.id); setMobileMenuOpen(false); }}
              style={{width: '100%'}}
            >
              <item.icon size={16} /> {item.label}
            </button>
          ))}
        </div>
      )}

      {/* Main Content */}
      <main className="main-content">
        <PageComponent onNavigate={setPage} />
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="mobile-nav">
        {MOBILE_NAV.map(item => (
          <button
            key={item.id}
            className={`nav-item ${page === item.id ? 'active' : ''}`}
            onClick={() => setPage(item.id)}
            style={{flex: 1, flexDirection: 'column', gap: 4, padding: '8px 4px', fontSize: 10}}
          >
            <item.icon size={18} />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}
