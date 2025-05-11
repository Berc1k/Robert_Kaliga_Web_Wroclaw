import { useLoaderData } from "react-router-dom";
import type { Product } from "../types/interfaces";
import { ProductCard } from "../components/ProductCard";

export function Home() {
  const products = useLoaderData() as Product[];

  return (
    <div className="p-5 pt-10 pb-10">
      <ul className="flex flex-col gap-2">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
