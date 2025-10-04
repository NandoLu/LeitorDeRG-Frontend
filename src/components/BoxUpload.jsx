const UploadContainer = ({ children }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">Upload de Documentos</h1>
        <p className="text-base text-gray-600">
          Faça o upload dos seus documentos para processamento automático.
        </p>
      </div>

      {/* Container do upload */}
      <div className="flex flex-col gap-6">
        {children}
        
        {/* Informações dos formatos aceitos */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Formatos Aceitos</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex flex-col items-center p-4 bg-red-50 rounded-lg">
              <svg className="w-8 h-8 text-red-500 mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-700">PDF</span>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
              <svg className="w-8 h-8 text-blue-500 mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-700">JPG</span>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
              <svg className="w-8 h-8 text-green-500 mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-700">PNG</span>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-yellow-50 rounded-lg">
              <svg className="w-8 h-8 text-yellow-500 mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-700">WEBP</span>
            </div>
          </div>
          
          {/* Informações de limite */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Tamanho máximo: 10MB</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Qualidade recomendada: Alta resolução</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadContainer;