import { useEffect, useState } from "react";
import ProductView from "./ProductView";
import axios from "axios";

interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export default function ProductList() {
  const [data, setData] = useState<Product[]>();

  const ambilData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
  };

  useEffect(() => {
    ambilData();
  }, []);

  return <ProductView data={data} />;
}
