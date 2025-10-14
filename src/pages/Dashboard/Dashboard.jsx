import React from 'react';
import Header from '../../components/Layout/Header';
import Sidebar from '../../components/Layout/Sidebar';

const Dashboard = () => {
  const stats = [
    { 
      title: 'Total de Usuários', 
      value: '1,234', 
      change: '+12%', 
      icon: '👥',
      color: 'bg-blue-500'
    },
    { 
      title: 'Vendas do Mês', 
      value: 'R$ 45,678', 
      change: '+8%', 
      icon: '💰',
      color: 'bg-green-500'
    },
    { 
      title: 'Novos Pedidos', 
      value: '56', 
      change: '+23%', 
      icon: '📦',
      color: 'bg-orange-500'
    },
    { 
      title: 'Taxa de Conversão', 
      value: '4.5%', 
      change: '+2%', 
      icon: '📈',
      color: 'bg-purple-500'
    },
  ];

  const recentActivities = [
    {
      icon: '🛒',
      text: 'Novo pedido recebido #1234',
      time: '2 min atrás',
      type: 'order'
    },
    {
      icon: '👤',
      text: 'Novo usuário registrado',
      time: '1 hora atrás',
      type: 'user'
    },
    {
      icon: '💰',
      text: 'Pagamento confirmado #5678',
      time: '3 horas atrás',
      type: 'payment'
    },
    {
      icon: '📧',
      text: 'Newsletter enviada para 2k usuários',
      time: '5 horas atrás',
      type: 'email'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <Sidebar />
      
      <main className="md:ml-64 pt-16 pb-20 md:pb-6">
        <div className="p-4 md:p-6">
          {/* Page Header */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm md:text-base">
              Bem-vindo ao painel de administração
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center">
                  <div className={`p-2 md:p-3 rounded-xl ${stat.color} text-white mr-3 md:mr-4`}>
                    <span className="text-xl md:text-2xl">{stat.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 truncate">
                      {stat.title}
                    </h3>
                    <div className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white mt-1 truncate">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-green-600 dark:text-green-400 font-semibold mt-1">
                      {stat.change}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 md:p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Vendas Mensais
              </h3>
              <div className="h-64 md:h-80 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl mb-2">📊</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Gráfico de Vendas</p>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-500 mt-1">Integração com Chart.js</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 md:p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Tráfego do Site
              </h3>
              <div className="h-64 md:h-80 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl mb-2">📈</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Gráfico de Tráfego</p>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-500 mt-1">Integração com ApexCharts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity & Quick Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 md:p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Atividade Recente
              </h3>
              <div className="space-y-3 md:space-y-4">
                {recentActivities.map((activity, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <span className="text-xl md:text-2xl mr-3">{activity.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 dark:text-white font-medium text-sm md:text-base truncate">
                        {activity.text}
                      </p>
                    </div>
                    <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 md:p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Estatísticas Rápidas
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <span className="text-blue-700 dark:text-blue-300 font-medium text-sm md:text-base">Sessões Ativas</span>
                  <span className="text-blue-700 dark:text-blue-300 font-bold">243</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <span className="text-green-700 dark:text-green-300 font-medium text-sm md:text-base">Taxa de Cliques</span>
                  <span className="text-green-700 dark:text-green-300 font-bold">3.2%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <span className="text-orange-700 dark:text-orange-300 font-medium text-sm md:text-base">Tempo no Site</span>
                  <span className="text-orange-700 dark:text-orange-300 font-bold">4m 32s</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <span className="text-purple-700 dark:text-purple-300 font-medium text-sm md:text-base">Taxa de Rejeição</span>
                  <span className="text-purple-700 dark:text-purple-300 font-bold">12.4%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;