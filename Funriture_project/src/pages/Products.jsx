import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Wooden Chair",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    id: 2,
    name: "Luxury Sofa",
    price: 25000,
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
  },
];

function Products() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default Products;