import { QuizApp } from '@/components/quiz-app'
import { allQuestions } from '@/lib/questions'

export default function AllQuizPage() {
  return <QuizApp title="All Weeks" questions={allQuestions} />
}
