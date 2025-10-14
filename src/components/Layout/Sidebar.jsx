import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/users', label: 'Usuários', icon: '👥' },
    { path: '/products', label: 'Produtos', icon: '📦' },
    { path: '/settings', label: 'Configurações', icon: '⚙️' },
  ];

  // Fechar sidebar mobile ao clicar em um link
  const handleMobileLinkClick = () => {
    setIsMobileSidebarOpen(false);
  };

  return (
    <>
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setIsMobileSidebarOpen(true)}
        className="md:hidden fixed bottom-4 right-4 z-40 bg-primary-500 text-white p-3 rounded-full shadow-lg hover:bg-primary-600 transition-colors"
        aria-label="Abrir menu lateral"
      >
        ☰
      </button>

      {/* Overlay para mobile */}
      {isMobileSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 fixed left-0 top-16 h-[calc(100vh-4rem)] 
        transform transition-transform duration-300 ease-in-out z-40
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Mobile Close Button */}
        <div className="md:hidden flex justify-end p-4 border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setIsMobileSidebarOpen(false)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Fechar menu lateral"
          >
            ✕
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={handleMobileLinkClick}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-300 group ${
                      isActive 
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 border-r-2 border-primary-600 dark:border-primary-400 font-semibold' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                    }`
                  }
                >
                  <span className="text-lg mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;