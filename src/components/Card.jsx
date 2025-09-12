function Card({ title, description }) {
    return (
        <div className="bg-white border rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}

export default Card