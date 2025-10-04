// Componente de demonstração dos conceitos implementados
function DemoLayout() {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 mt-8">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
          Demonstração dos Conceitos Implementados
        </h2>
        
        {/* Seção Flexbox */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-blue-600">1. Layout com Flexbox</h3>
          
          {/* Exemplo 1: Flex Direction */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4 text-gray-700">Direções Flexíveis (flex-row/flex-col)</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="bg-blue-500 text-white p-4 rounded-lg flex-1 text-center">
                  flex-col no mobile
                </div>
                <div className="bg-green-500 text-white p-4 rounded-lg flex-1 text-center">
                  flex-row no desktop
                </div>
                <div className="bg-purple-500 text-white p-4 rounded-lg flex-1 text-center">
                  Responsivo
                </div>
              </div>
            </div>
          </div>
          
          {/* Exemplo 2: Justify e Align */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4 text-gray-700">Justify, Align e Gap</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="bg-red-500 text-white p-3 rounded-lg">justify-between</div>
                <div className="bg-yellow-500 text-white p-3 rounded-lg">items-center</div>
                <div className="bg-indigo-500 text-white p-3 rounded-lg">gap-4</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Seção Grid */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-green-600">2. Layout com Grid</h3>
          
          {/* Exemplo 1: Grid Responsivo */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4 text-gray-700">Grid Responsivo (grid-cols-*)</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="bg-cyan-500 text-white p-4 rounded-lg text-center">1 col mobile</div>
                <div className="bg-teal-500 text-white p-4 rounded-lg text-center">2 cols sm</div>
                <div className="bg-emerald-500 text-white p-4 rounded-lg text-center">3 cols md</div>
                <div className="bg-lime-500 text-white p-4 rounded-lg text-center">4 cols lg</div>
              </div>
            </div>
          </div>
          
          {/* Exemplo 2: Grid com span */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4 text-gray-700">Grid com Col-span e Row-span</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-3 gap-4 h-64">
                <div className="bg-pink-500 text-white p-4 rounded-lg flex items-center justify-center col-span-2 row-span-2">
                  col-span-2<br/>row-span-2
                </div>
                <div className="bg-rose-500 text-white p-4 rounded-lg flex items-center justify-center">1</div>
                <div className="bg-red-500 text-white p-4 rounded-lg flex items-center justify-center">2</div>
                <div className="bg-orange-500 text-white p-4 rounded-lg flex items-center justify-center">3</div>
                <div className="bg-amber-500 text-white p-4 rounded-lg flex items-center justify-center">4</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Seção Responsividade */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-purple-600">3. Responsividade e Mobile First</h3>
          
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4 text-gray-700">Breakpoints (sm, md, lg, xl)</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="space-y-4">
                <div className="bg-gray-800 text-white p-4 rounded-lg">
                  <div className="block sm:hidden">📱 Mobile (&lt; 640px) - Você está vendo este texto</div>
                  <div className="hidden sm:block md:hidden">📱 Small (640px - 768px) - Você está vendo este texto</div>
                  <div className="hidden md:block lg:hidden">💻 Medium (768px - 1024px) - Você está vendo este texto</div>
                  <div className="hidden lg:block xl:hidden">🖥️ Large (1024px - 1280px) - Você está vendo este texto</div>
                  <div className="hidden xl:block">🖥️ Extra Large (&gt;= 1280px) - Você está vendo este texto</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Exemplo de combinação Flex + Grid */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4 text-gray-700">Combinação Flex + Grid</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <h5 className="font-medium mb-3 text-gray-600">Seção Flex</h5>
                  <div className="flex gap-3">
                    <div className="bg-violet-500 text-white p-3 rounded-lg flex-1 text-center text-sm">Flex 1</div>
                    <div className="bg-purple-500 text-white p-3 rounded-lg flex-1 text-center text-sm">Flex 2</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h5 className="font-medium mb-3 text-gray-600">Seção Grid</h5>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-500 text-white p-3 rounded-lg text-center text-sm">Grid 1</div>
                    <div className="bg-indigo-500 text-white p-3 rounded-lg text-center text-sm">Grid 2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Resumo dos conceitos */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border">
          <h3 className="text-xl font-bold mb-4 text-gray-800">✅ Conceitos Implementados</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">Flexbox</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Containers flexíveis</li>
                <li>• flex-row e flex-col</li>
                <li>• justify-content</li>
                <li>• align-items</li>
                <li>• gap responsivo</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-600 mb-2">Grid</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• grid-cols-* responsivo</li>
                <li>• col-span e row-span</li>
                <li>• gap e alinhamento</li>
                <li>• place-items</li>
                <li>• Layouts complexos</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-600 mb-2">Responsividade</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Mobile First</li>
                <li>• Breakpoints (sm,md,lg,xl)</li>
                <li>• Flex + Grid combinados</li>
                <li>• Design adaptativo</li>
                <li>• UX otimizada</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoLayout;