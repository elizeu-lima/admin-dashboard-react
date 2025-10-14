import React, { useState } from 'react';
import Header from '../../components/Layout/Header';
import Sidebar from '../../components/Layout/Sidebar';

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'João Silva',
      email: 'joao@email.com',
      role: 'Admin',
      status: 'Ativo',
      joinDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Maria Santos',
      email: 'maria@email.com',
      role: 'Usuário',
      status: 'Ativo',
      joinDate: '2024-02-20'
    },
    {
      id: 3,
      name: 'Pedro Costa',
      email: 'pedro@email.com',
      role: 'Usuário',
      status: 'Inativo',
      joinDate: '2024-03-10'
    },
    {
      id: 4,
      name: 'Ana Oliveira',
      email: 'ana@email.com',
      role: 'Moderador',
      status: 'Ativo',
      joinDate: '2024-01-30'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Todos');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'Todos' || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const toggleUserStatus = (userId) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: user.status === 'Ativo' ? 'Inativo' : 'Ativo' }
        : user
    ));
  };

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <Sidebar />
      
      <main className="md:ml-64 pt-16 pb-20 md:pb-6">
        <div className="p-4 md:p-6">
          {/* Page Header */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Gerenciar Usuários</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm md:text-base">Gerencie os usuários do sistema</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-3 md:p-6">
              <div className="flex items-center">
                <div className="p-2 md:p-3 rounded-xl bg-blue-500 text-white mr-2 md:mr-4">
                  <span className="text-lg md:text-2xl">👥</span>
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400">Total</h3>
                  <div className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">{users.length}</div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-3 md:p-6">
              <div className="flex items-center">
                <div className="p-2 md:p-3 rounded-xl bg-green-500 text-white mr-2 md:mr-4">
                  <span className="text-lg md:text-2xl">✅</span>
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400">Ativos</h3>
                  <div className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
                    {users.filter(u => u.status === 'Ativo').length}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-3 md:p-6">
              <div className="flex items-center">
                <div className="p-2 md:p-3 rounded-xl bg-red-500 text-white mr-2 md:mr-4">
                  <span className="text-lg md:text-2xl">❌</span>
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400">Inativos</h3>
                  <div className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
                    {users.filter(u => u.status === 'Inativo').length}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-3 md:p-6">
              <div className="flex items-center">
                <div className="p-2 md:p-3 rounded-xl bg-purple-500 text-white mr-2 md:mr-4">
                  <span className="text-lg md:text-2xl">👑</span>
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400">Admins</h3>
                  <div className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
                    {users.filter(u => u.role === 'Admin').length}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 md:p-6 mb-4 md:mb-6">
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Buscar por nome ou email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 md:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base"
              >
                <option value="Todos">Todos os status</option>
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
              </select>
              <button className="bg-blue-500 text-white px-4 md:px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm md:text-base whitespace-nowrap">
                + Novo Usuário
              </button>
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Usuário
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden sm:table-cell">
                      Cargo
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden md:table-cell">
                      Data
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-8 w-8 md:h-10 md:w-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                            {user.name.charAt(0)}
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {user.name}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 sm:hidden">
                              {user.role}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 md:hidden">
                              {new Date(user.joinDate).toLocaleDateString('pt-BR')}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap hidden sm:table-cell">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          user.role === 'Admin' 
                            ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300'
                            : user.role === 'Moderador'
                            ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300'
                            : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          user.status === 'Ativo' 
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                            : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden md:table-cell">
                        {new Date(user.joinDate).toLocaleDateString('pt-BR')}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-1 sm:space-y-0">
                          <button 
                            onClick={() => toggleUserStatus(user.id)}
                            className={`px-2 py-1 rounded text-xs ${
                              user.status === 'Ativo'
                                ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 hover:bg-yellow-200 dark:hover:bg-yellow-900/50'
                                : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50'
                            }`}
                          >
                            {user.status === 'Ativo' ? 'Desativar' : 'Ativar'}
                          </button>
                          <button className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs hover:bg-blue-200 dark:hover:bg-blue-900/50">
                            Editar
                          </button>
                          <button 
                            onClick={() => deleteUser(user.id)}
                            className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded text-xs hover:bg-red-200 dark:hover:bg-red-900/50"
                          >
                            Excluir
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Empty State */}
          {filteredUsers.length === 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Nenhum usuário encontrado</h3>
              <p className="text-gray-500 dark:text-gray-400">Tente ajustar os filtros de busca</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Users;