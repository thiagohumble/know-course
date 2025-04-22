// app/favorites/page.tsx
'use client';

import { useAuth } from '../(auth)/AuthContext';
import { courses } from '../../data/courses';
import Link from 'next/link';

export default function FavoritesPage() {
  const { favorites, isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return (
      <div className="p-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl text-orange-500 mb-4">Acesso restrito</h2>
        <p className="text-white mb-4">Você precisa estar logado para ver seus cursos favoritos</p>
        <Link 
          href="/courses" 
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg inline-block"
        >
          Voltar para cursos
        </Link>
      </div>
    );
  }

  const favoriteCourses = courses.filter(course => favorites.includes(course.id));

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-500 mb-8">❤️ Meus Cursos Favoritos</h1>
      
      {favoriteCourses.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-white text-lg mb-4">Você ainda não favoritou nenhum curso</p>
          <Link 
            href="/courses"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg inline-block"
          >
            Explorar cursos
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteCourses.map(course => (
            <div key={course.id} className="bg-zinc-800 p-6 rounded-xl shadow-md flex flex-col justify-between">
              <div>
                <h2 className="text-lg text-orange-500 font-semibold mb-2">{course.title}</h2>
                <p className="text-sm text-zinc-300 line-clamp-2 mb-4">{course.description}</p>
              </div>
              <Link
                href={`/courses/${course.id}`}
                className="mt-4 inline-block bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md text-center"
              >
                Acessar Curso
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}