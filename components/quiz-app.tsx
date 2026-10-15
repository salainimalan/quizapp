'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { ArrowLeft, Check, CircleAlert, RotateCcw, Shuffle } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Question } from '@/lib/questions'

type Mode = 'practice' | 'test'

function ModeToggle({ mode, onChange }: { mode: Mode; onChange: (mode: Mode) => void }) {
  return <div className="inline-flex rounded-lg border border-border bg-muted p-1" role="group" aria-label="Quiz mode">
    {(['practice', 'test'] as Mode[]).map((item) => <button key={item} type="button" onClick={() => onChange(item)} aria-pressed={mode === item} className={cn('rounded-md px-4 py-2 text-xs font-bold tracking-widest transition-colors', mode === item ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground')}>
      {item.toUpperCase()}
    </button>)}
  </div>
}

function Option({ question, index, selected, submitted, practice, onSelect }: { question: Question; index: number; selected?: number; submitted: boolean; practice: boolean; onSelect: () => void }) {
  const isCorrect = question.correctAnswer === index
  const isSelected = selected === index
  const state = practice || submitted ? (isCorrect ? 'correct' : isSelected ? 'wrong' : 'neutral') : isSelected ? 'selected' : 'neutral'
  return <button type="button" onClick={onSelect} disabled={practice || submitted} aria-pressed={isSelected} className={cn('flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors', state === 'correct' && 'border-emerald-300 bg-emerald-50 text-emerald-950', state === 'wrong' && 'border-rose-300 bg-rose-50 text-rose-950', state === 'selected' && 'border-sky-400 bg-sky-50 text-sky-950', state === 'neutral' && 'border-border bg-background hover:border-foreground/30')}>
    <span className={cn('flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold', state === 'correct' && 'border-emerald-500 bg-emerald-500 text-white', state === 'wrong' && 'border-rose-500 bg-rose-500 text-white', state === 'selected' && 'border-sky-500 bg-sky-500 text-white', state === 'neutral' && 'border-muted-foreground/30 text-muted-foreground')}>{state === 'correct' ? <Check aria-hidden="true" /> : state === 'wrong' ? <CircleAlert aria-hidden="true" /> : String.fromCharCode(65 + index)}</span>
    <span className="leading-6">{question.options[index]}</span>
  </button>
}

export function QuizApp({ title, questions }: { title: string; questions: Question[] }) {
  const [mode, setMode] = useState<Mode>('practice')
  const [orderedQuestions, setOrderedQuestions] = useState(questions)
  const [selected, setSelected] = useState<Record<string, number>>({})
  const [submitted, setSubmitted] = useState(false)
  const answered = Object.keys(selected).length
  const score = useMemo(() => orderedQuestions.reduce((sum, question) => sum + (selected[question.id] === question.correctAnswer ? 1 : 0), 0), [orderedQuestions, selected])
  const reset = () => { setSubmitted(false); setSelected({}) }
  const changeMode = (next: Mode) => { setMode(next); reset() }
  const shuffleQuestions = () => {
    setOrderedQuestions((current) => {
      const shuffled = [...current]
      for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1))
        ;[shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]]
      }
      return shuffled
    })
    reset()
  }

  if (!questions.length) return <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-5 py-10"><Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground"><ArrowLeft /> Back home</Link><div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center"><p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{title}</p><h1 className="mt-4 text-2xl font-bold tracking-tight">Question set coming soon</h1><p className="mt-2 text-muted-foreground">Add the supplied MCQs to <code>lib/questions.ts</code> to populate this week.</p></div></main>

  return <main className="min-h-screen bg-background"><div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-12"><header className="flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between"><div><Link href="/" className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground"><ArrowLeft /> Back home</Link><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">NPTEL quiz practice</p><h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1><p className="mt-2 text-sm text-muted-foreground">{orderedQuestions.length} questions · {mode === 'practice' ? 'Correct answers are shown' : submitted ? 'Test submitted' : `${answered}/${orderedQuestions.length} answered`}</p></div><div className="flex flex-wrap items-center gap-3"><button type="button" onClick={shuffleQuestions} className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-bold tracking-widest hover:bg-muted" aria-label="Shuffle question order"><Shuffle aria-hidden="true" /> Shuffle</button><ModeToggle mode={mode} onChange={changeMode} /></div></header>
    {mode === 'test' && submitted && <section aria-label="Test results" className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">{[['Score', `${score}/${orderedQuestions.length}`], ['Correct', score], ['Incorrect', orderedQuestions.filter((q) => selected[q.id] !== undefined && selected[q.id] !== q.correctAnswer).length], ['Unanswered', orderedQuestions.length - answered]].map(([label, value]) => <div key={label} className="rounded-xl border border-border bg-card p-4"><p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</p><p className="mt-2 text-2xl font-bold">{value}</p></div>)}</section>}
    <section aria-label={`${title} questions`} className="mt-8 flex flex-col gap-5">{orderedQuestions.map((question, index) => <article key={question.id} className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8"><p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Question {index + 1} of {orderedQuestions.length}{title.includes('All Weeks') && <span> · Week {question.week}</span>}</p><h2 className="mt-5 text-lg font-semibold leading-7 sm:text-xl">{question.question}</h2><div className="mt-6 flex flex-col gap-3">{question.options.map((_, optionIndex) => <Option key={optionIndex} question={question} index={optionIndex} selected={selected[question.id]} submitted={submitted} practice={mode === 'practice'} onSelect={() => setSelected((answers) => ({ ...answers, [question.id]: optionIndex }))} />)}</div></article>)}</section>
    {mode === 'test' && !submitted && <button type="button" onClick={() => setSubmitted(true)} className="mt-7 w-full rounded-lg bg-foreground py-3 text-sm font-bold text-background">Submit test</button>}
    {mode === 'test' && submitted && <button type="button" onClick={reset} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border py-3 text-sm font-semibold"><RotateCcw /> Retake test</button>}
    <div className="mt-10 flex justify-center border-t border-border pt-6">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
        <ArrowLeft aria-hidden="true" /> Back home
      </Link>
    </div>
  </div></main>
}

export function HomeLink() { return <Link href="/" className="text-sm font-semibold text-muted-foreground hover:text-foreground">Back home</Link> }
