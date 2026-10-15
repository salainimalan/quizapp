import { notFound } from 'next/navigation'
import { QuizApp } from '@/components/quiz-app'
import { getQuestionsForWeek, getWeekTitle, isValidWeek } from '@/lib/questions'

export default async function WeekPage({ params }: { params: Promise<{ week: string }> }) {
  const { week: value } = await params
  const week = Number.parseInt(value, 10)
  if (!isValidWeek(week)) notFound()
  return <QuizApp title={`Week ${week}: ${getWeekTitle(week)}`} questions={getQuestionsForWeek(week)} />
}
