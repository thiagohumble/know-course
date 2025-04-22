'use client';


import Link from 'next/link';
import { useAuth } from '../(auth)/AuthContext';
import { courses, Course } from '../../data/courses';


export default function HomePage() {
  const { isLoggedIn, purchasedCourses } = useAuth();

  return (
    <main className="p-6 bg-gray-900 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-orange-500 mb-6">Nossos Cursos</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course: Course) => {
            const isUserPurchased = isLoggedIn && purchasedCourses.includes(course.id);
            return (
              <div key={course.id} className="bg-zinc-800 p-6 rounded-xl shadow-md flex flex-col justify-between">
                <div>
                  <h2 className="text-lg text-orange-500 font-semibold mb-2">{course.title}</h2>
                  <p className="text-sm text-zinc-300 line-clamp-2 mb-4">{course.description}</p>
                </div>
                <Link
                  href={`/courses/${course.id}`}
                  className={`mt-4 inline-block rounded-lg text-center font-semibold ${
                    isUserPurchased
                      ? 'bg-purple-900 hover:bg-purple-950 text-white py-2 px-4'
                      : 'bg-gray-600 hover:bg-gray-700 text-white py-2 px-4'
                  }`}
                >
                  {isUserPurchased ? 'Acessar Curso' : 'Ver Detalhes'}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}