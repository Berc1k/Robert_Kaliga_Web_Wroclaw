import type { LoaderFunction } from "react-router-dom";

export const productsLoader: LoaderFunction = async () => {
  const response = await fetch("/Robert_Kaliga_Web_Wroclaw/products.json");
  if (!response.ok) {
    throw new Error("Failed to load products");
  }
  return response.json();
};
