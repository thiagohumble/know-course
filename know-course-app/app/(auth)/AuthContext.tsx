'use client';

import { createContext, useState, useContext } from 'react';
import { user as initialUser } from '../../data/user';

interface AuthContextType {
  isLoggedIn: boolean;
  purchasedCourses: number[];
  favorites: number[];
  toggleFavorite: (courseId: number) => void;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [purchasedCourses, setPurchasedCourses] = useState(initialUser.courses.map(c => c.courseId));
  const [favorites, setFavorites] = useState<number[]>(initialUser.favorites);

  const toggleFavorite = (courseId: number) => {
    setFavorites(prev => 
      prev.includes(courseId)
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  }

  const login = () => {
    setIsLoggedIn(true);
    setPurchasedCourses(initialUser.courses.map(c => c.courseId));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setPurchasedCourses([]);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, purchasedCourses, favorites, toggleFavorite, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};