import { useState } from 'react';

function Upload({ name }) {
    const [document, setDocument] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setDocument(file);
    };

    return (
        <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-400 rounded-xl shadow-sm text-center cursor-pointer hover:bg-gray-50 transition-colors duration-200">
            <input 
                id={`file-upload-${name}`}
                type="file" 
                onChange={handleFileChange} 
                className="hidden" 
            />
            <label htmlFor={`file-upload-${name}`} className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                {document ? (
                    <>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-12 w-12 text-green-500 mb-2" 
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
                        <h2 className="text-xl font-semibold mb-1 text-gray-800">{name}</h2>
                        <p className="text-gray-600 truncate w-full">{document.name}</p>
                    </>
                ) : (
                    <>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-12 w-12 text-gray-400 mb-2" 
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
                        <h2 className="text-xl font-semibold mb-1 text-gray-800">{name}</h2>
                        <p className="text-gray-500">Clique para fazer upload</p>
                    </>
                )}
            </label>
        </div>
    );
}

export default Upload;