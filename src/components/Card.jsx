function Card({ name, document, type = "CPF" }) {
    // Função para determinar cor baseado no tipo
    const getTypeConfig = (docType) => {
        switch(docType) {
            case 'CPF':
                return {
                    color: 'text-blue-600',
                    bgColor: 'bg-blue-50',
                    borderColor: 'border-blue-200'
                };
            case 'RG':
                return {
                    color: 'text-green-600',
                    bgColor: 'bg-green-50',
                    borderColor: 'border-green-200'
                };
            case 'CNH':
                return {
                    color: 'text-purple-600',
                    bgColor: 'bg-purple-50',
                    borderColor: 'border-purple-200'
                };
            default:
                return {
                    color: 'text-gray-600',
                    bgColor: 'bg-gray-50',
                    borderColor: 'border-gray-200'
                };
        }
    };

    const config = getTypeConfig(type);

    return (
        <div className={`bg-white border ${config.borderColor} rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-6`}>
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">{name}</h3>
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${config.bgColor} ${config.color}`}>
                        {type}
                    </span>
                </div>
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
            </div>
            
            {/* Documento */}
            <div className="mb-4">
                <p className="text-2xl font-mono font-bold text-gray-800 tracking-wider">{document}</p>
                <p className="text-sm text-gray-500 mt-1">Documento brasileiro válido</p>
            </div>
            
            {/* Ações */}
            <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    Ver
                </button>
                <button className={`flex-1 px-4 py-2 text-sm ${config.bgColor} ${config.color} rounded-lg hover:opacity-80 transition-opacity flex items-center justify-center gap-2`}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download
                </button>
            </div>
            
            {/* Info processamento */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
                <span>03/10/2024 14:30</span>
                <span className="font-medium">
                    {type === 'CPF' ? '95%' : type === 'RG' ? '88%' : '92%'} precisão
                </span>
            </div>
        </div>
    )
}

export default Card