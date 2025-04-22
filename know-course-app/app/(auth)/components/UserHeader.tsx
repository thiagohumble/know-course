// app/(auth)/components/UserHeader.tsx
'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { user as initialUser, User } from '../../../data/user';
import Link from 'next/link';

interface UserHeaderProps {
  onLogout: () => void;
  onLogin: () => void;
  isLoggedIn: boolean;
}

const UserHeader: React.FC<UserHeaderProps> = ({ onLogout, onLogin, isLoggedIn }) => {
  const [user, setUser] = useState<User>(initialUser);
  const pathname = usePathname();
  const [shouldShowAuthButton, setShouldShowAuthButton] = useState(true);
  
  useEffect(() => {
    // Ocultar o botão logar/deslogar na página do player (aqui uso a técnica de condição para parametros)
    if (pathname?.startsWith('/courses/') && pathname?.endsWith('/player')) {
      setShouldShowAuthButton(false);
    } else {
      setShouldShowAuthButton(true);
    }
  }, [pathname]);

  return (
    <header className="bg-gray-800 p-4 justify-between md:flex md:items-center">
      <div>
        <h1 className="text-accent text-1xl font-bold"><Logo />Cursos Online - Aqui você Aprende de Verdade</h1>
      </div>
      <div className="flex items-center md:pt-0 pt-4">
        <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center mr-2">
          <span className="text-white font-semibold">{user.name.charAt(0).toUpperCase()}</span>
        </div>
        <span className="text-white mr-5">{user.name}</span>
        {isLoggedIn && (
          <Link 
            href="/favorites"
            className="text-white hover:text-orange-500 transition-colors mr-4"
          >
            ❤️ Meus Favoritos
          </Link>
        )}
        {shouldShowAuthButton && (
          <button
            onClick={isLoggedIn ? onLogout : onLogin}
            className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer ${
              isLoggedIn ? '' : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {isLoggedIn ? 'Deslogar' : 'Logar'}
          </button>
        )}
      </div>
    </header>

  );
};

export default UserHeader;