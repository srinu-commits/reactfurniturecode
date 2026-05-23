function ProductCard({ product }) {
  return (
    <div className="shadow-lg rounded-xl overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="h-64 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">{product.name}</h2>

        <p className="text-gray-600">₹ {product.price}</p>

        <button className="mt-3 bg-black text-white px-4 py-2 rounded">
          View
        </button>
      </div>
    </div>
  );
}

export default ProductCard;