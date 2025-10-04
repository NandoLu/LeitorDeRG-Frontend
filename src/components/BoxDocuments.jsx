const BoxDocuments = ({ children }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">Documentos Processados</h1>
        <p className="text-base text-gray-600">
          Documentos que foram enviados e processados com sucesso.
        </p>
      </div>

      {/* Grid responsivo simples e limpo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {children}
      </div>
      
      {/* Estatísticas simples */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-xl font-bold mb-6 text-center text-gray-800">Estatísticas</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
            <div className="text-sm text-gray-600">Total de Documentos</div>
          </div>
          
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Taxa de Sucesso</div>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">2min</div>
            <div className="text-sm text-gray-600">Tempo Médio</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxDocuments;