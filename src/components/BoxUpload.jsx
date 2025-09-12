const UploadContainer = ({ children }) => {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 text-white">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Envie o Documento</h1>
        <p className="text-base md:text-lg text-gray-300">
          Utilize esta seção para fazer o upload dos documentos solicitados.
          Por favor, garanta que os arquivos estejam com boa qualidade e visibilidade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
};

export default UploadContainer;