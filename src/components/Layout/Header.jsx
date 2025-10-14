import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(0); // ✅ Force update

  const handleThemeToggle = () => {
    console.log('Botão de tema clicado');
    toggleTheme();
    // Force re-render
    setForceUpdate(prev => prev + 1);
  };

  // Debug visual
  console.log('Header - isDark:', isDark, 'forceUpdate:', forceUpdate);
  console.log('HTML tem classe dark?', document.documentElement.classList.contains('dark'));

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo com debug visual */}
          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-blue-500 dark:text-blue-400">
              Admin Dashboard 
              <span className="text-xs ml-2 bg-red-500 text-white px-1 rounded">
                {isDark ? 'DARK' : 'LIGHT'}
              </span>
            </h2>
          </div>

          {/* Resto do código permanece igual */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-gray-700 dark:text-gray-300">
              Olá, <strong>{user?.name}</strong>
            </span>
            
            <button 
              onClick={handleThemeToggle}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Alternar tema"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            
            <button 
              onClick={logout}
              className="bg-transparent text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 text-sm"
            >
              Sair
            </button>
          </div>

          {/* Mobile menu... */}
        </div>
      </div>
    </header>
  );
};

export default Header;