import { useState } from 'react';

function Upload({ name = "Documento" }) {
    const [document, setDocument] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setDocument(file);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setIsDragging(false);
        const file = event.dataTransfer.files[0];
        setDocument(file);
    };

    return (
        <div className="w-full max-w-md mx-auto">
            {/* Upload area com responsividade */}
            <div 
                className={`flex flex-col items-center justify-center p-6 sm:p-8 lg:p-12 border-2 border-dashed rounded-xl shadow-sm text-center cursor-pointer transition-all duration-200 min-h-48 sm:min-h-56 lg:min-h-64 ${
                    isDragging 
                        ? 'border-blue-400 bg-blue-50' 
                        : document 
                            ? 'border-green-400 bg-green-50' 
                            : 'border-gray-400 bg-white hover:bg-gray-50'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <input 
                    id={`file-upload-${name}`}
                    type="file" 
                    onChange={handleFileChange} 
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png,.webp" 
                />
                
                <label htmlFor={`file-upload-${name}`} className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                    {document ? (
                        // Estado com arquivo selecionado
                        <div className="flex flex-col items-center gap-3 sm:gap-4">
                            <div className="relative">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-12 w-12 sm:h-16 sm:w-16 text-green-500" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                                    />
                                </svg>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                    <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            
                            <div className="text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-1 text-gray-800">{name}</h2>
                                <p className="text-sm sm:text-base text-gray-600 truncate max-w-48 sm:max-w-64">{document.name}</p>
                                <p className="text-xs text-gray-500 mt-1">{(document.size / 1024 / 1024).toFixed(2)} MB</p>
                            </div>
                            
                            {/* Barra de progresso simulada */}
                            <div className="w-full max-w-48 sm:max-w-64">
                                <div className="flex justify-between text-xs text-gray-500 mb-1">
                                    <span>Upload completo</span>
                                    <span>100%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full w-full transition-all duration-1000"></div>
                                </div>
                            </div>
                            
                            {/* Botões de ação */}
                            <div className="flex gap-2 sm:gap-3 mt-2">
                                <button 
                                    onClick={(e) => { e.preventDefault(); setDocument(null); }}
                                    className="px-3 py-2 text-xs sm:text-sm bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-1"
                                >
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    Remover
                                </button>
                                <button className="px-3 py-2 text-xs sm:text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1">
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    Processar
                                </button>
                            </div>
                        </div>
                    ) : (
                        // Estado inicial/vazio
                        <div className="flex flex-col items-center gap-3 sm:gap-4">
                            <div className={`transition-all duration-200 ${
                                isDragging ? 'scale-110' : 'scale-100'
                            }`}>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className={`h-12 w-12 sm:h-16 sm:w-16 ${
                                        isDragging ? 'text-blue-500' : 'text-gray-400'
                                    }`}
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" 
                                    />
                                </svg>
                            </div>
                            
                            <div className="text-center">
                                <h2 className="text-lg sm:text-xl font-semibold mb-1 text-gray-800">{name}</h2>
                                <p className="text-sm sm:text-base text-gray-500 mb-2">
                                    {isDragging ? 'Solte o arquivo aqui' : 'Clique para fazer upload'}
                                </p>
                                <p className="text-xs text-gray-400">ou arraste e solte</p>
                            </div>
                            
                            {/* Indicadores de tipos aceitos */}
                            <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mt-2">
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">PDF</span>
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">JPG</span>
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">PNG</span>
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">WEBP</span>
                            </div>
                        </div>
                    )}
                </label>
            </div>
        </div>
    );
}

export default Upload;