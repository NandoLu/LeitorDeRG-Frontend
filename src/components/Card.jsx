function Card({ name, document }) {
    return (
        <div className="bg-white border rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-black">{name}</h2>
            <p className="text-gray-600">{document}</p>
        </div>
    )
}

export default Card