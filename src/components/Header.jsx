function Header() {
    return (
        <header className="bg-blue-600 text-white shadow-md">
            {/* Container flex com diferentes direções e alinhamentos */}
            <div className="flex flex-col sm:flex-row justify-between items-center py-4 px-6 gap-4">
                {/* Logo/Título principal */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">RG</span>
                    </div>
                    <h1 className="text-2xl font-bold">Leitor de RG</h1>
                </div>
                
                {/* Navegação flex */}
                <nav className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                        Dashboard
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-blue-400 rounded-lg hover:bg-blue-700 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Upload
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header