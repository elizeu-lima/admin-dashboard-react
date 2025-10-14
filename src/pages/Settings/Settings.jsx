import React, { useState } from 'react';
import Header from '../../components/Layout/Header';
import Sidebar from '../../components/Layout/Sidebar';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('geral');
  const [settings, setSettings] = useState({
    // Geral
    siteName: 'Admin Dashboard',
    siteDescription: 'Sistema de administração moderno',
    language: 'pt-BR',
    timezone: 'America/Sao_Paulo',
    
    // Notificações
    emailNotifications: true,
    pushNotifications: false,
    securityAlerts: true,
    newsletter: false,
    
    // Segurança
    twoFactorAuth: false,
    sessionTimeout: 30,
    passwordExpiration: 90
  });

  const handleInputChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const saveSettings = () => {
    // Simular salvamento
    alert('Configurações salvas com sucesso!');
  };

  const tabs = [
    { id: 'geral', label: 'Geral', icon: '⚙️' },
    { id: 'notificacoes', label: 'Notificações', icon: '🔔' },
    { id: 'seguranca', label: 'Segurança', icon: '🔒' },
    { id: 'aparencia', label: 'Aparência', icon: '🎨' },
    { id: 'integracao', label: 'Integração', icon: '🔗' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <Sidebar />
      
      <main className="md:ml-64 pt-16 pb-20 md:pb-6">
        <div className="p-4 md:p-6">
          {/* Page Header */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Configurações</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm md:text-base">Gerencie as configurações do sistema</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
            {/* Mobile Tabs */}
            <div className="lg:hidden">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-2">
                <div className="flex space-x-1 overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center px-3 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <span className="mr-2">{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block lg:w-64">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sticky top-24">
                <nav className="space-y-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-2 border-blue-600 dark:border-blue-400 font-semibold'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <span className="text-lg mr-3">{tab.icon}</span>
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 md:p-6">
                {/* Geral */}
                {activeTab === 'geral' && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Configurações Gerais</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Nome do Site
                        </label>
                        <input
                          type="text"
                          value={settings.siteName}
                          onChange={(e) => handleInputChange('siteName', e.target.value)}
                          className="w-full px-3 md:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Descrição
                        </label>
                        <input
                          type="text"
                          value={settings.siteDescription}
                          onChange={(e) => handleInputChange('siteDescription', e.target.value)}
                          className="w-full px-3 md:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Idioma
                        </label>
                        <select
                          value={settings.language}
                          onChange={(e) => handleInputChange('language', e.target.value)}
                          className="w-full px-3 md:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base"
                        >
                          <option value="pt-BR">Português (Brasil)</option>
                          <option value="en-US">English (US)</option>
                          <option value="es-ES">Español</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Fuso Horário
                        </label>
                        <select
                          value={settings.timezone}
                          onChange={(e) => handleInputChange('timezone', e.target.value)}
                          className="w-full px-3 md:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base"
                        >
                          <option value="America/Sao_Paulo">Brasília (GMT-3)</option>
                          <option value="America/New_York">New York (GMT-5)</option>
                          <option value="Europe/London">London (GMT+0)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Notificações */}
                {activeTab === 'notificacoes' && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Configurações de Notificação</h2>
                    
                    <div className="space-y-4">
                      {[
                        { id: 'emailNotifications', label: 'Notificações por Email', description: 'Receba notificações importantes por email' },
                        { id: 'pushNotifications', label: 'Notificações Push', description: 'Receba notificações em tempo real no navegador' },
                        { id: 'securityAlerts', label: 'Alertas de Segurança', description: 'Alertas sobre atividades suspeitas na conta' },
                        { id: 'newsletter', label: 'Newsletter', description: 'Receba atualizações e novidades do sistema' }
                      ].map((notification) => (
                        <div key={notification.id} className="flex items-center justify-between p-3 md:p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <div className="flex-1 mr-4">
                            <h3 className="font-medium text-gray-900 dark:text-white text-sm md:text-base">{notification.label}</h3>
                            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">{notification.description}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={settings[notification.id]}
                              onChange={(e) => handleInputChange(notification.id, e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className="w-10 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Segurança */}
                {activeTab === 'seguranca' && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Segurança</h2>
                    
                    <div className="space-y-4 md:space-y-6">
                      <div className="flex items-center justify-between p-3 md:p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <div className="flex-1 mr-4">
                          <h3 className="font-medium text-gray-900 dark:text-white text-sm md:text-base">Autenticação de Dois Fatores</h3>
                          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">Aumente a segurança da sua conta com 2FA</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.twoFactorAuth}
                            onChange={(e) => handleInputChange('twoFactorAuth', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-10 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                        </label>
                      </div>

                      <div className="p-3 md:p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Tempo de Sessão (minutos)
                        </label>
                        <input
                          type="number"
                          value={settings.sessionTimeout}
                          onChange={(e) => handleInputChange('sessionTimeout', parseInt(e.target.value))}
                          className="w-full px-3 md:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base"
                          min="5"
                          max="120"
                        />
                        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">Tempo de inatividade antes do logout automático</p>
                      </div>

                      <div className="p-3 md:p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Expiração de Senha (dias)
                        </label>
                        <input
                          type="number"
                          value={settings.passwordExpiration}
                          onChange={(e) => handleInputChange('passwordExpiration', parseInt(e.target.value))}
                          className="w-full px-3 md:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base"
                          min="30"
                          max="365"
                        />
                        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">Período para forçar a troca de senha</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Aparência */}
                {activeTab === 'aparencia' && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Aparência</h2>
                    <div className="text-center py-8 md:py-12">
                      <div className="text-4xl md:text-6xl mb-4">🎨</div>
                      <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-white mb-2">Personalização de Tema</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">Em breve: recursos para personalizar cores e temas do dashboard</p>
                    </div>
                  </div>
                )}

                {/* Integração */}
                {activeTab === 'integracao' && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Integrações</h2>
                    <div className="text-center py-8 md:py-12">
                      <div className="text-4xl md:text-6xl mb-4">🔗</div>
                      <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-white mb-2">Sistema de Integração</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">Em breve: integração com APIs e serviços externos</p>
                    </div>
                  </div>
                )}

                {/* Save Button */}
                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={saveSettings}
                    className="w-full md:w-auto bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm md:text-base"
                  >
                    Salvar Configurações
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;