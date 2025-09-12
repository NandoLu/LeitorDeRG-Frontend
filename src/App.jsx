import Header from "./components/Header.jsx"
import Card from "./components/Card.jsx"
import Upload from "./components/Upload.jsx"

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Exemplos de cards reutilizáveis */}
        <Upload/>
        <Card name="Nome da Pessoa" document="123.123.123-12" />
      </main>
    </div>
  )
}

export default App