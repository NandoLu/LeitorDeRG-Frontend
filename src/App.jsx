import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import Upload from "./components/Upload.jsx";
import BoxUpload from "./components/BoxUpload.jsx";
import BoxDocuments from "./components/BoxDocuments.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      {/* Main container usando flexbox com direções responsivas */}
      <main className="p-4 sm:p-6 lg:p-8">
        {/* Container principal flex com diferentes direções e gaps */}
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-8 max-w-7xl mx-auto">
          
          {/* Seção de Upload - flex column para mobile, mantém largura no desktop */}
          <div className="flex-1 xl:max-w-md">
            <BoxUpload>
              <Upload />
            </BoxUpload>
          </div>
          
          {/* Seção de Documentos - ocupa espaço restante */}
          <div className="flex-1">
            <BoxDocuments>
              <Card name="João Silva Santos" document="123.456.789-01" type="CPF" />
              <Card name="Maria Oliveira Costa" document="12.345.678-9" type="RG" />
              <Card name="Pedro Henrique Lima" document="987.654.321-00" type="CPF" />
              <Card name="Ana Carolina Souza" document="98.765.432-1" type="RG" />
              <Card name="Carlos Eduardo Pereira" document="111.222.333-44" type="CPF" />
              <Card name="Fernanda Ribeiro Silva" document="11.223.344-5" type="RG" />
            </BoxDocuments>
          </div>
        </div>
        
        {/* Seção adicional demonstrando flexbox com diferentes alinhamentos */}
        <div className="mt-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Estatísticas de Documentos</h2>
            
            {/* Flex container com justify-between e align-items */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
              
              {/* Cards de estatísticas usando flex */}
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg flex-1">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600">Total</span>
                    <span className="text-lg font-semibold text-gray-800">Documentos</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg flex-1">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600">Processados</span>
                    <span className="text-lg font-semibold text-gray-800">Com Sucesso</span>
                  </div>
                </div>
              </div>
              
              {/* Botão de ação alinhado à direita */}
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Exportar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;