'use client'



import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import CourseContent from './components/CourseContent'
import { courses } from '../../../../data/courses'

export default function PlayerPage() {
  const { id } = useParams()
  const router = useRouter()
  const course = courses.find(c => c.id === Number(id))
  const [videoStarted, setVideoStarted] = useState(false)

  if (!course) {
    return (
      <div className="p-4 text-red-500">
        Curso não encontrado. <button onClick={() => router.back()} className="text-blue-400">Voltar</button>
      </div>
    )
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-orange-500 mb-6">{course.title}</h1>
      
      {/* Player de vídeo */}
      <div className="aspect-video bg-black rounded-lg mb-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-xl mb-2">Player do Curso</p>
          <button 
            onClick={() => setVideoStarted(true)}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
          >
            {videoStarted ? 'Continuar Assistindo' : 'Iniciar Curso'}
          </button>
        </div>
      </div>

      {/* Controles */}
      <div className="flex gap-4">
        <button
          onClick={() => setVideoStarted(false)}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 cursor-pointer"
        >
          Reiniciar
        </button>
        <button
          onClick={() => router.push('/courses')}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 cursor-pointer"
        >
          Voltar para Cursos
        </button>
      </div>

        {/* Passo a passo do vídeo */}
        {course.steps && <CourseContent steps={course.steps} />}
    </div>
  )
}