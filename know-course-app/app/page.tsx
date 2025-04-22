'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Logo from './(auth)/components/Logo';
import Loading from './(auth)/components/Loading';

const SplashPage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [logoPosition, setLogoPosition] = useState('center');
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setLogoPosition('top-header');
      setIsLoading(false);
    }, 1000); // Tempo de exibição do splash (3 segundos)

    return () => clearTimeout(timer); // Limpar o timer se o componente for desmontado
  }, []);

  useEffect(() => {
    if (logoPosition === 'top-header') {
      const transitionTimer = setTimeout(() => {
        router.push('/courses'); // Redirecionar para a página de cursos
      }, 1000); // Tempo da animação de transição

      return () => clearTimeout(transitionTimer);
    }
  }, [logoPosition, router]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 flex items-center justify-center z-50 transition-opacity duration-1000" style={{ opacity: isVisible ? 1 : 0 }}>
      <div className={`text-white text-center ${logoPosition === 'center' ? '' : 'absolute top-4 left-1/2 transform -translate-x-1/2 transition-all duration-1000'}`}>
        <div className='flex inline-flex mr-10'>{isLoading && <Loading />}</div>
        <div className='flex inline-flex'>
          <h1 className={`text-accent text-left ${isLoading ? 'text-2xl' : 'text-1xl'} font-bold`}><Logo size={isLoading ? 94 : 40} />{isLoading ? 'Seja Bem Vindo' : 'Cursos Online - Aqui você Aprende de Verdade'}</h1>
        </div>
      </div>
    </div>

  );
};

export default SplashPage;