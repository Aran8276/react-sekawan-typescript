import axios from "axios";
import { useParams } from "react-router-dom";
import DetailView from "./DetailView";
import { useEffect, useState } from "react";

export interface Welcome {
  error: boolean;
  message: string;
  restaurant: Restaurant;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  city: string;
  address: string;
  pictureId: string;
  categories: Category[];
  menus: Menus;
  rating: number;
  customerReviews: CustomerReview[];
}

export interface Category {
  name: string;
}

export interface CustomerReview {
  name: string;
  review: string;
  date: string;
}

export interface Menus {
  foods: Category[];
  drinks: Category[];
}

export interface ApiResponse {
  error: boolean;
  message: string;
  restaurant: Restaurant;
}

const avatars = [
  "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  "https://i.pravatar.cc/150?u=a04258a2462d826712d",
  "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  "https://i.pravatar.cc/150?u=a04258114e29026302d",
  "https://i.pravatar.cc/150?u=a04258114e29026708c",
];

export default function Detail() {
  const { id } = useParams();
  const [data, setData] = useState<ApiResponse | null>(null);

  const ambilData = async () => {
    const res = await axios.get(
      `https://restaurant-api.dicoding.dev/detail/${id}`
    );
    setData(res.data);
  };

  const getRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * avatars.length);
    return avatars[randomIndex];
  };

  useEffect(() => {
    ambilData();
  }, []);

  useEffect(() => {}, [data]);
  return <DetailView data={data!} getRandomAvatar={getRandomAvatar} />;
}
