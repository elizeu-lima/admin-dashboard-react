import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Verificar preferência salva ou do sistema
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    console.log('ThemeProvider - savedTheme:', savedTheme);
    console.log('ThemeProvider - systemPrefersDark:', systemPrefersDark);
    
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    
    if (shouldBeDark) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      console.log('ThemeProvider - Modo escuro ativado na inicialização');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      console.log('ThemeProvider - Modo claro ativado na inicialização');
    }
    
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    console.log('toggleTheme chamado - estado atual:', isDark);
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    // Forçar re-render imediato
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      console.log('Modo escuro ativado via toggle - classe adicionada');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      console.log('Modo claro ativado via toggle - classe removida');
    }
  };

  // Evitar flash de tema incorreto durante o carregamento
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando tema...</p>
        </div>
      </div>
    );
  }

  const value = {
    isDark,
    toggleTheme,
    mounted
  };

  console.log('ThemeProvider - renderizando com isDark:', isDark);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};