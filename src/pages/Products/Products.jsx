import React, { useState } from 'react';
import Header from '../../components/Layout/Header';
import Sidebar from '../../components/Layout/Sidebar';

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'iPhone 15 Pro',
      category: 'Eletrônicos',
      price: 8999.99,
      stock: 15,
      status: 'Disponível',
      image: '📱'
    },
    {
      id: 2,
      name: 'MacBook Air M2',
      category: 'Computadores',
      price: 12999.99,
      stock: 8,
      status: 'Disponível',
      image: '💻'
    },
    {
      id: 3,
      name: 'AirPods Pro',
      category: 'Áudio',
      price: 2499.99,
      stock: 0,
      status: 'Esgotado',
      image: '🎧'
    },
    {
      id: 4,
      name: 'iPad Air',
      category: 'Tablets',
      price: 5999.99,
      stock: 5,
      status: 'Disponível',
      image: '📟'
    },
    {
      id: 5,
      name: 'Apple Watch',
      category: 'Wearables',
      price: 3999.99,
      stock: 12,
      status: 'Disponível',
      image: '⌚'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Todas');

  const categories = ['Todas', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'Todas' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const totalValue = products.reduce((sum, product) => sum + (product.price * product.stock), 0);
  const lowStockProducts = products.filter(p => p.stock < 10 && p.stock > 0).length;
  const outOfStockProducts = products.filter(p => p.stock === 0).length;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <Sidebar />
      
      <main className="md:ml-64 pt-16 pb-20 md:pb-6">
        <div className="p-4 md:p-6">
          {/* Page Header */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Gerenciar Produtos</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm md:text-base">Controle de inventário e produtos</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-3 md:p-6">
              <div className="flex items-center">
                <div className="p-2 md:p-3 rounded-xl bg-blue-500 text-white mr-2 md:mr-4">
                  <span className="text-lg md:text-2xl">📦</span>
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400">Total</h3>
                  <div className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">{products.length}</div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-3 md:p-6">
              <div className="flex items-center">
                <div className="p-2 md:p-3 rounded-xl bg-green-500 text-white mr-2 md:mr-4">
                  <span className="text-lg md:text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400">Valor Total</h3>
                  <div className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
                    R$ {totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-3 md:p-6">
              <div className="flex items-center">
                <div className="p-2 md:p-3 rounded-xl bg-yellow-500 text-white mr-2 md:mr-4">
                  <span className="text-lg md:text-2xl">⚠️</span>
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400">Estoque Baixo</h3>
                  <div className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">{lowStockProducts}</div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-3 md:p-6">
              <div className="flex items-center">
                <div className="p-2 md:p-3 rounded-xl bg-red-500 text-white mr-2 md:mr-4">
                  <span className="text-lg md:text-2xl">❌</span>
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400">Esgotados</h3>
                  <div className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">{outOfStockProducts}</div>
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
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base"
                />
              </div>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 md:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <button className="bg-blue-500 text-white px-4 md:px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm md:text-base whitespace-nowrap">
                + Novo Produto
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-4 md:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl md:text-4xl">{product.image}</div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      product.status === 'Disponível' 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                        : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Categoria:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{product.category}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Preço:</span>
                      <span className="font-medium text-green-600 dark:text-green-400">
                        R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Estoque:</span>
                      <span className={`font-medium ${
                        product.stock === 0 
                          ? 'text-red-600 dark:text-red-400'
                          : product.stock < 10
                          ? 'text-yellow-600 dark:text-yellow-400'
                          : 'text-green-600 dark:text-green-400'
                      }`}>
                        {product.stock} unidades
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                    <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-600 transition-colors">
                      Editar
                    </button>
                    <button className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      Gerenciar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Empty State */}
          {filteredProducts.length === 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Nenhum produto encontrado</h3>
              <p className="text-gray-500 dark:text-gray-400">Tente ajustar os filtros de busca</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Products;