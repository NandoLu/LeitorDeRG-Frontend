import Header from "./components/Header.jsx"
import Card from "./components/Card.jsx"

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Exemplos de cards reutilizáveis */}
        <Card title="React" description="Uma biblioteca para interfaces modernas." />
        <Card title="Tailwind" description="Um framework CSS utilitário poderoso." />
        <Card title="Checkpoint" description="Sua primeira atividade prática com React + Tailwind." />
      </main>
    </div>
  )
}

export default App