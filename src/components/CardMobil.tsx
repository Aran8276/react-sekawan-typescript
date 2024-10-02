import { Card } from "@nextui-org/card";
import { Mobil } from "../Pages/Mobil";

export default function CardMobil(props: Mobil) {
  return (
    <Card className="flex flex-col justify-center items-center w-[200px] min-h-[200px] max-h-[480px]">
      {props.src ? (
        <div className="p-2">
          <img
            className="w-full h-[100px] rounded-xl object-contain"
            src={props.src}
            alt={props.model}
          />
        </div>
      ) : (
        <></>
      )}
      <p className="font-bold text-lg">{props.merk}</p>
      <p className="text-red-500">{props.model}</p>
      <p>{props.warna}</p>
      <div className="p-2">
        <div className="border-[1px] px-2 border-black rounded-md bg-black text-white text-center font-bold">
          <div className="flex flex-col">
            <p>{props.nopol}</p>
            <p className="text-[9px]">
              {(props.tahun + 5).toString().slice(-2)} • {props.bulanPajak}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
