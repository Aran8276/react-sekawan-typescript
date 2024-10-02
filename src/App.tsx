import { useState, ChangeEvent, useEffect, FormEvent, useRef } from "react";
import axios from "axios";
import { DataRestaurant } from "./components/Grid.js";
import AppView from "./AppView.js";
import "@fontsource/inter";

export interface NavLinkType {
  label: string;
  href: string;
}

const navLinks: NavLinkType[] = [
  { label: "Produk", href: "/" },
  { label: "Resto", href: "/restaurant" },
  { label: "Armada", href: "/mobil" },
];

export default function App() {
  const [search, changeSearch] = useState("");
  const apiUrl = "https://restaurant-api.dicoding.dev/list";
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState<DataRestaurant[]>([]);
  const inputSearchRef = useRef<HTMLInputElement>(null);

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    ambilDataSearch(e.target.value);
    changeSearch(input);
  };

  const submitSearchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const input = formData.get("search")?.toString();
    const path = window.location.pathname;
    if (!(path == "/restaurant")) {
      window.location.replace(`/restaurant?search=${input}`);
      return;
    }
  };

  useEffect(() => {
    if (search == "") {
      return;
    }

    ambilDataSearch(search);
  }, [search]);

  const ambilDataSearch = async (query: string) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://restaurant-api.dicoding.dev/search?q=${query}`
      );
      const data = res.data;
      setData(data.restaurants);
      setLoading(false);
      return;
    } catch (error: any) {
      setErrorMessage(error.message);
      return;
    }
  };

  const ambilData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(apiUrl);
      const data = res.data;
      setData(data.restaurants);
      setLoading(false);
      return;
    } catch (error: any) {
      setErrorMessage(error.message);
      return;
    }
  };

  return (
    <AppView
      ambilData={ambilData}
      ambilDataSearch={ambilDataSearch}
      data={data}
      errorMessage={errorMessage}
      inputSearchRef={inputSearchRef}
      isLoading={isLoading}
      navLinks={navLinks}
      searchHandler={searchHandler}
      submitSearchHandler={submitSearchHandler}
    />
  );
}
