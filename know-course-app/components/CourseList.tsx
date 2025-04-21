type Course = {
  id: string
  title: string
}

export function CourseList({ courses }: { courses: Course[] }) {
  if (courses.length === 0) {
    return <p className="text-zinc-400">Nenhum curso encontrado.</p>
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course) => (
        <li
          key={course.id}
          className="rounded-xl bg-zinc-800 p-4 border border-zinc-700 hover:border-accent transition"
        >
          <h3 className="text-lg font-bold text-white">{course.title}</h3>
        </li>
      ))}
    </ul>
  )
}
