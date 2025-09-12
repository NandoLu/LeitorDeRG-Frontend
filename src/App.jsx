import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import Upload from "./components/Upload.jsx";
import BoxUpload from "./components/BoxUpload.jsx";
import BoxDocuments from "./components/BoxDocuments.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-6 flex flex-col items-center gap-6">
        {/* Exemplos de cards reutilizáveis */}
        <BoxUpload>
          <Upload />
        </BoxUpload>
        <BoxDocuments>
          <Card name="Nome da Pessoa" document="123.123.123-12" />
          <Card name="Nome da Pessoa" document="123.123.123-12" />
        </BoxDocuments>
      </main>
    </div>
  );
}

export default App;