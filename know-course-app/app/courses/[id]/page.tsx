'use client';

import { courses } from '@/data/courses'; // imoprta dados do curso
import { useRouter } from 'next/navigation'; // importa useRouter
import React, { useEffect, useState } from 'react'; // importa useEffect e useState (executar código após a renderização, cria variável de estado)
import { useAuth } from '@/app/(auth)/AuthContext';
import { useParams } from 'next/navigation'; // importa useParams
import Link from 'next/link'
import CourseContent from './player/components/CourseContent';

interface PageProps {
  params: { id: string }
  searchParams?: Record<string, string | string[] | undefined>
}

export default function CourseDetailsPage() {
  const router = useRouter();
  const { isLoggedIn, purchasedCourses } = useAuth();
  const { id } = useParams(); // Obtenha o ID diretamente aqui
  const courseId = id ? parseInt(id as string) : NaN;
  const course = courses.find(c => c.id === courseId);
  const isPurchased = isLoggedIn && purchasedCourses.includes(courseId);

  // Redirecionamento imediato se o curso foi comprado
  useEffect(() => {
    if (isPurchased && course) {
      router.replace(`/courses/${courseId}/player`); // Use router.replace para evitar voltar na história
    }
  }, [isPurchased, courseId, router]);

  // Renderize a página de detalhes somente se o curso não foi comprado ou não foi encontrado
  if (!course || isPurchased) {
    return (
      <>
        {/* Se o curso foi comprado, o useEffect acima já redirecionou */}
        {!course && (
          <div className="p-4 text-red-500">
            Curso não encontrado. <Link href="/" className="bg-red-500 font-bold text-white px-6 py-2 rounded-lg hover:bg-red-600 text-blue-400">Voltar</Link>
          </div>
        )}
        {/* Se o curso foi comprado, não renderiza nada aqui */}
      </>
    );
  }

  const handlePurchase = () => {
    alert('Redirecionando para checkout...');
    // Lógica de compra aqui
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-500 mb-4">{course.title}</h1>
      <p className="text-zinc-200 mb-8 text-lg leading-relaxed">{course.description}</p>

      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <p className="text-2xl font-bold text-white mb-2">R$ {course.price.toFixed(2).replace('.', ',')}</p>
        <p className="text-green-400 mb-4">✔️ Acesso vitalício</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg transition-colors cursor-pointer font-bold text-lg flex items-center justify-center gap-2 flex-1"
          onClick={handlePurchase}
        >
          <span>🚀 Decole nessa e COMPRE AGORA</span>
          <span>→</span>
        </button>

        <Link
          href="/courses"
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-4 rounded-lg transition-colors font-medium text-lg flex items-center justify-center"
        >
          Voltar para Cursos
        </Link>
      </div>

      {/*Conteúdo do curso */}
      {course.steps && <CourseContent steps={course.steps} />}

    </div>
  );
}