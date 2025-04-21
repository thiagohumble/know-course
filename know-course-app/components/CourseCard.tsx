// components/CourseCard.tsx
import Link from 'next/link'
import { Course } from '@/data/courses'

type Props = {
  course: Course
  isPurchased: boolean
}

export default function CourseCard({ course, isPurchased }: Props) {
  return (
    <div className="bg-zinc-800 p-4 rounded-xl shadow-md">
      <h2 className="text-lg text-accent font-semibold">{course.title}</h2>
      <p className="text-sm text-zinc-300">{course.description}</p>
      <Link
        href={`/course/${course.id}`}
        className="mt-2 inline-block bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90"
      >
        {isPurchased ? 'Acessar Curso' : 'Ver Detalhes'}
      </Link>
    </div>
  )
}
