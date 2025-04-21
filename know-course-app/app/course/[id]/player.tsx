'use client'

import { courses } from '@/data/courses'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export default function PlayerPage() {
  const { id } = useParams()
  const course = courses.find(c => c.id === Number(id))
  const [started, setStarted] = useState(false)

  if (!course) return <div>Curso não encontrado</div>

  return (
    <div className="p-4">
      <h1 className="text-accent text-xl font-bold mb-4">{course.title}</h1>
      <div className="aspect-video bg-black flex items-center justify-center rounded-lg">
        <span className="text-white text-2xl">▶</span>
      </div>
      <div className="mt-4 flex gap-4">
        <button
          className="bg-primary text-white px-4 py-2 rounded-lg"
          onClick={() => setStarted(true)}
        >
          {started ? 'Reiniciar Curso' : 'Continuar Assistindo'}
        </button>
      </div>
    </div>
  )
}
