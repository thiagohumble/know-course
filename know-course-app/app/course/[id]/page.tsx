import { user } from '@/data/user'
import { redirect } from 'next/navigation'

type Props = {
  params: { id: string }
}

export default function CoursePage({ params }: Props) {
  const courseId = Number(params.id)
  const isPurchased = user.courses.some(c => c.courseId === courseId)

  redirect(isPurchased ? `/course/${courseId}/player` : `/course/${courseId}/details`)
}
