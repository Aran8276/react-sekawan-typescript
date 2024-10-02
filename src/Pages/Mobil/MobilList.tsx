import { useEffect, useState } from "react";
import MobilView from "./MobilView";

export interface Mobil {
  merk: string;
  model: string;
  nopol: string;
  warna: string;
  tahun: number;
  bulanPajak: string;
  src?: string;
}

export default function MobilList() {
  const [data, setData] = useState("Data Inisial");
  const [dataInput, setDataInput] = useState("");
  const [changedTimes, setChangedTimes] = useState(0);

  useEffect(() => {
    setChangedTimes((prev) => prev + 1);
  }, [dataInput]);

  useEffect(() => {
    setChangedTimes(0);
  }, []);

  const mobilArray: Mobil[] = [
    {
      merk: "Mercedes",
      model: "W124 300E",
      nopol: "B 8807 RG",
      warna: "Hitam",
      tahun: 1998,
      bulanPajak: "07",
      src: "https://upload.wikimedia.org/wikipedia/commons/a/ac/1988_Mercedes-Benz_300d_Diesel_Automatic_3.0_Front.jpg",
    },
    {
      merk: "Honda",
      model: "Jazz",
      nopol: "P 1694 DJ",
      warna: "Biru",
      tahun: 2005,
      bulanPajak: "12",
      src: "/hondajazz.jpg",
    },
    {
      merk: "Daihatsu",
      model: "Sigra",
      nopol: "N 1243 KZ",
      warna: "Putih",
      tahun: 2018,
      bulanPajak: "04",
      src: "/daihatsusigra.jpg",
    },
    {
      merk: "Nissan",
      model: "Cefiro",
      nopol: "A 8276 RAN",
      warna: "Merah",
      src: "/cefiro.jpg",
      tahun: 1993,
      bulanPajak: "04",
    },
    {
      merk: "Mercedes",
      model: "W124 300E",
      nopol: "B 8807 RG",
      warna: "Hitam",
      tahun: 1998,
      bulanPajak: "11",
    },
    {
      merk: "Honda",
      model: "Jazz",
      nopol: "P 1694 DJ",
      warna: "Biru",
      tahun: 2005,
      bulanPajak: "03",
    },
    {
      merk: "Daihatsu",
      model: "Sigra",
      nopol: "N 1243 KZ",
      warna: "Putih",
      tahun: 2018,
      bulanPajak: "07",
    },
    {
      merk: "BMW",
      model: "328i",
      nopol: "A 8276 RAN",
      warna: "Merah",
      tahun: 2009,
      bulanPajak: "04",
    },
  ];
  return (
    <MobilView
      changedTimes={changedTimes}
      data={data}
      dataInput={dataInput}
      mobilArray={mobilArray}
      setData={setData}
      setDataInput={setDataInput}
    />
  );
}
