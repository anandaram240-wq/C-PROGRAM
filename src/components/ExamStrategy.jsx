import { Trophy, Clock, Target, AlertTriangle, CheckCircle, BookOpen } from 'lucide-react'

export default function ExamStrategy() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Exam Strategy</h1>
        <p className="page-subtitle">MCE Hassan — PPC5133 · July 2, 2026 · 3 Hours · 100 Marks</p>
      </div>

      {/* Critical Alert */}
      <div className="alert alert-danger mb-20">
        <span className="alert-icon">🚨</span>
        <div className="alert-content">
          <strong>LAST ATTEMPT — Do Not Panic</strong>
          You need only 40/100 to pass. With the 5 guaranteed topics alone, you can score 40-50 marks.
          Stay calm. Attempt 5 questions. Never leave a question completely blank.
        </div>
      </div>

      {/* Paper Pattern */}
      <div className="card mb-20">
        <div style={{fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8}}>
          <BookOpen size={16} color="var(--accent)" />
          Paper Pattern
        </div>
        <div style={{overflowX: 'auto'}}>
          <table className="theory-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Duration', '3 Hours (180 minutes)'],
                ['Total Marks', '100'],
                ['Total Questions', '8 questions (2 per module × 4 modules)'],
                ['Questions to Answer', 'Any 5 — but at least 1 from EACH module'],
                ['Marks per Question', '20 marks each'],
                ['Question Parts', 'Sub-parts a/b/c worth 4, 6, or 10 marks'],
                ['Pass Mark', '40 out of 100 (40%)'],
              ].map(([k, v], i) => (
                <tr key={i}>
                  <td style={{fontWeight: 600, color: 'var(--text-primary)'}}>{k}</td>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Time Budget */}
      <div className="card mb-20">
        <div style={{fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8}}>
          <Clock size={16} color="var(--orange)" />
          Time Budget — 180 Minutes Total
        </div>
        <div className="card-grid card-grid-2">
          {[
            { label: 'Read all 8 questions', time: '5 min', color: 'var(--blue)', tip: 'Mark all questions you know. Plan which 5 to attempt.' },
            { label: 'Question 1 (M1)', time: '30 min', color: 'var(--red)', tip: 'Basic structure + data types OR operators question' },
            { label: 'Question 2 (M2)', time: '30 min', color: 'var(--orange)', tip: 'Quadratic equation program (guaranteed question)' },
            { label: 'Question 3 (M3)', time: '30 min', color: 'var(--yellow)', tip: 'String functions + array question' },
            { label: 'Question 4 (M4)', time: '30 min', color: 'var(--green)', tip: 'Structure + functions OR pointer question' },
            { label: '5th Question', time: '25 min', color: 'var(--purple)', tip: 'Pick the easiest remaining question' },
            { label: 'Revision', time: '30 min', color: 'var(--accent)', tip: 'Check programs, verify output, add comments' },
          ].map((item, i) => (
            <div key={i} style={{
              background: 'var(--bg-secondary)', border: '1px solid var(--border)',
              borderRadius: 8, padding: '12px 14px',
              borderLeft: `3px solid ${item.color}`
            }}>
              <div className="flex items-center justify-between mb-6">
                <span style={{fontSize: 13, fontWeight: 600, color: 'var(--text-primary)'}}>{item.label}</span>
                <span style={{
                  background: item.color + '22', color: item.color,
                  border: `1px solid ${item.color}44`, borderRadius: 6,
                  padding: '2px 8px', fontSize: 12, fontWeight: 700
                }}>{item.time}</span>
              </div>
              <div style={{fontSize: 12, color: 'var(--text-muted)'}}>{item.tip}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 5 Must-Know Topics = Pass */}
      <div className="card mb-20">
        <div style={{fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8}}>
          <Target size={16} color="var(--green)" />
          5 Topics = Pass Guaranteed (40+ marks)
        </div>
        <div className="alert alert-success mb-12">
          <span className="alert-icon">✅</span>
          <div className="alert-content">
            If you write these 5 topics correctly with definition + example + program, you WILL pass.
            Each is worth 8-10 marks.
          </div>
        </div>
        {[
          { topic: 'Basic Structure of C Program', mod: 'M1', freq: 8, marks: '8-10M', tip: 'Write all 6 sections by name + area of circle program' },
          { topic: 'Roots of Quadratic Equation', mod: 'M2', freq: 7, marks: '8-10M', tip: 'Write the full program with disc>0, disc=0, disc<0 cases' },
          { topic: 'String Handling Functions', mod: 'M3', freq: 6, marks: '7-10M', tip: 'Write strlen, strcpy, strcmp, strcat, strrev with one example each' },
          { topic: 'Student Record using Structure', mod: 'M4', freq: 5, marks: '8-10M', tip: 'struct student { name, rollno, marks } + array of structures' },
          { topic: 'Call by Value vs Call by Reference', mod: 'M4', freq: 5, marks: '8-10M', tip: '4 differences + swap program using pointers' },
        ].map((item, i) => (
          <div key={i} style={{
            display: 'flex', gap: 12, padding: '12px 0',
            borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none',
            flexWrap: 'wrap'
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: 8,
              background: 'var(--green-light)', color: 'var(--green)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 13, fontWeight: 700, flexShrink: 0
            }}>
              {i + 1}
            </div>
            <div style={{flex: 1}}>
              <div style={{fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4}}>
                {item.topic}
                <span style={{
                  fontSize: 11, marginLeft: 8, padding: '1px 6px', borderRadius: 4,
                  background: 'var(--bg-secondary)', color: 'var(--text-muted)'
                }}>{item.mod}</span>
                <span style={{
                  fontSize: 11, marginLeft: 4, padding: '1px 6px', borderRadius: 4,
                  background: 'var(--red-light)', color: 'var(--red)', fontWeight: 700
                }}>Appeared {item.freq}×</span>
              </div>
              <div style={{fontSize: 12, color: 'var(--text-muted)'}}>💡 {item.tip}</div>
            </div>
            <div style={{
              fontSize: 13, fontWeight: 700, color: 'var(--green)',
              background: 'var(--green-light)', border: '1px solid rgba(34,197,94,0.3)',
              borderRadius: 6, padding: '4px 10px', height: 'fit-content', flexShrink: 0
            }}>
              {item.marks}
            </div>
          </div>
        ))}
      </div>

      {/* Answer Writing Format */}
      <div className="card mb-20">
        <div style={{fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8}}>
          ✍️ Answer Writing Format
        </div>
        <div className="card-grid card-grid-2">
          <div>
            <div style={{fontSize: 12, fontWeight: 600, color: 'var(--accent)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.5px'}}>
              For Theory Questions
            </div>
            {['1. Definition — 1-2 sentences', '2. Syntax — Write exact C syntax', '3. Flowchart — Simple box diagram', '4. Example Program — Complete C code', '5. Sample Output — Show expected output'].map((s, i) => (
              <div key={i} style={{
                fontSize: 13, color: 'var(--text-secondary)', padding: '6px 0',
                borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none'
              }}>
                {s}
              </div>
            ))}
          </div>
          <div>
            <div style={{fontSize: 12, fontWeight: 600, color: 'var(--orange)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.5px'}}>
              For Program Questions
            </div>
            {['1. #include statements at top', '2. void main() { }', '3. Declare all variables first', '4. Write logic with brief comments', '5. printf() to show output'].map((s, i) => (
              <div key={i} style={{
                fontSize: 13, color: 'var(--text-secondary)', padding: '6px 0',
                borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none'
              }}>
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partial Marks Strategy */}
      <div className="card mb-20">
        <div style={{fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 16}}>
          ⚡ Partial Marks Strategy
        </div>
        <div className="alert alert-warning">
          <span className="alert-icon">💰</span>
          <div className="alert-content">
            <strong>Even wrong answers can get you marks!</strong>
            Examiners award marks for effort. If you write correct structure, correct #include, correct variable names
            — that alone = 3-4 marks even if the logic is wrong.
          </div>
        </div>
        {[
          { action: 'Write correct #include and void main()', marks: '2-3 marks' },
          { action: 'Declare correct variable types', marks: '1-2 marks' },
          { action: 'Write partially correct logic', marks: '3-5 marks' },
          { action: 'Correct definition/theory part', marks: '3-4 marks' },
          { action: 'Correct syntax even if logic wrong', marks: '2-3 marks' },
        ].map((item, i) => (
          <div key={i} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '10px 0', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none',
            flexWrap: 'wrap', gap: 8
          }}>
            <div style={{fontSize: 13, color: 'var(--text-secondary)'}}>✦ {item.action}</div>
            <div style={{
              fontSize: 12, fontWeight: 700, color: 'var(--yellow)',
              background: 'var(--yellow-light)', border: '1px solid rgba(234,179,8,0.3)',
              borderRadius: 5, padding: '2px 8px', flexShrink: 0
            }}>
              +{item.marks}
            </div>
          </div>
        ))}
      </div>

      {/* Exam Day Checklist */}
      <div className="card">
        <div style={{fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 16}}>
          📋 Exam Day Checklist
        </div>
        {[
          { icon: '📄', item: 'Hall ticket printed and ready', time: 'Night before' },
          { icon: '🪪', item: 'College ID card', time: 'Night before' },
          { icon: '🖊️', item: '2-3 black/blue pens + pencil for diagrams', time: 'Night before' },
          { icon: '😴', item: 'Sleep by 10 PM on July 1', time: 'July 1' },
          { icon: '🌅', item: 'Wake up early, eat light breakfast', time: 'July 2 morning' },
          { icon: '📖', item: 'Quick revision of 5 must-know topics only', time: '1 hour before' },
          { icon: '⏱️', item: 'Reach exam hall 30 minutes early', time: 'July 2' },
          { icon: '🧘', item: 'Read all 8 questions calmly for first 5 minutes', time: 'In exam' },
          { icon: '🚫', item: 'Never spend more than 35 minutes on any one question', time: 'In exam' },
          { icon: '✅', item: 'Never leave any question completely blank', time: 'In exam' },
        ].map((item, i) => (
          <div key={i} style={{
            display: 'flex', gap: 10, padding: '10px 0',
            borderBottom: i < 9 ? '1px solid rgba(255,255,255,0.04)' : 'none',
            alignItems: 'flex-start'
          }}>
            <span style={{fontSize: 16, flexShrink: 0}}>{item.icon}</span>
            <div style={{flex: 1, fontSize: 13, color: 'var(--text-primary)'}}>{item.item}</div>
            <div style={{fontSize: 11, color: 'var(--text-muted)', flexShrink: 0}}>{item.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
