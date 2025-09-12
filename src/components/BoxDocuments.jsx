const BoxDocuments = ({ children }) => {
  return (
    <div className="bg-gray-700 rounded-2xl shadow-xl p-8 md:p-12 text-white">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Documentos upload</h1>
        <p className="text-base md:text-lg text-gray-300">
          Esta seção é para mostrar os documentos que foram enviados e estão salvos.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {children}
      </div>
    </div>
  );
};

export default BoxDocuments;