import { ChangeEvent, FormEvent, RefObject } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataRestaurant } from "./components/Grid";
import PageNavbar from "./components/PageNavbar";
import Detail from "./Pages/Detail/Detail";
import Error404 from "./Pages/Error404";
import RestoList from "./Pages/Restaurants/RestoList";
import MobilList from "./Pages/Mobil/MobilList";
import ProductList from "./Pages/Product/ProductList";

interface SelfProps {
  searchHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  submitSearchHandler: (e: FormEvent<HTMLFormElement>) => void;
  ambilData: () => Promise<void>;
  ambilDataSearch: (query: string) => Promise<void>;
  inputSearchRef: RefObject<HTMLInputElement>;
  navLinks: Array<{ label: string; href: string }>;
  isLoading: boolean;
  errorMessage: string;
  data: DataRestaurant[];
}

export default function AppView(props: SelfProps) {
  return (
    <BrowserRouter>
      <PageNavbar
        searchHandler={(e) => props.searchHandler(e)}
        searchFormHandler={(e) => props.submitSearchHandler(e)}
        searchInputRef={props.inputSearchRef}
        navLinks={props.navLinks}
      />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/mobil" element={<MobilList />} />
        <Route
          path="/restaurant"
          element={
            <RestoList
              inputSearchRef={props.inputSearchRef}
              isLoading={props.isLoading}
              ambilData={props.ambilData}
              ambilDataSearch={props.ambilDataSearch}
              data={props.data}
              errorMessage={props.errorMessage}
            />
          }
        />
        <Route path="/restaurant/:id" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
