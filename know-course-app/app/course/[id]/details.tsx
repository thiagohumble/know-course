import { courses } from '@/data/courses'

type Props = {
  params: { id: string }
}

export default function CourseDetails({ params }: Props) {
  const course = courses.find(c => c.id === Number(params.id))
  if (!course) return <div>Curso não encontrado</div>

  return (
    <div className="p-4">
      <h1 className="text-accent text-xl font-bold mb-2">{course.title}</h1>
      <p className="text-zinc-200 mb-4">{course.description}</p>
      <p className="text-white font-semibold mb-2">R$ {course.price.toFixed(2)}</p>
      <button className="bg-primary text-white px-4 py-2 rounded-lg">Comprar Curso</button>
    </div>
  )
}
