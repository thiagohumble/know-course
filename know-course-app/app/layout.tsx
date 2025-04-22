'use client';

import '../styles/global.css';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import UserHeader from './(auth)/components/UserHeader';
import { AuthProvider, useAuth } from './(auth)/AuthContext';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const RootLayoutInner = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn, logout, login } = useAuth();

  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-900 text-white`}>
      <Link href="/">
        <UserHeader onLogout={logout} onLogin={login} isLoggedIn={isLoggedIn} />
      </Link>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <RootLayoutInner children={children} />
      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} <a href="https://github.com/thiagohumble" className='cursor-pointer'>github.com/thiagohumble</a> ;) Todos os direitos reservados.</p>
      </footer>
    </AuthProvider>
  );
}