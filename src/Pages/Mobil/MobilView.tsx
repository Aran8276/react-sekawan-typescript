import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import CardMobil from "../../components/CardMobil";
import { Mobil } from "./MobilList";

interface SelfProps {
  mobilArray: Mobil[];
  data: string;
  setData: Dispatch<SetStateAction<string>>;
  setDataInput: Dispatch<SetStateAction<string>>;
  dataInput: string;
  changedTimes: number;
}

export default function MobilView(props: SelfProps) {
  return (
    <>
      <div className="flex flex-col space-y-12 justify-center items-center py-12">
        <div className="grid grid-cols-4 gap-12">
          {props.mobilArray.map((item) => {
            return (
              <CardMobil
                bulanPajak={item.bulanPajak}
                merk={item.merk}
                model={item.model}
                nopol={item.nopol}
                tahun={item.tahun}
                warna={item.warna}
                key={item.nopol}
                src={item.src}
              />
            );
          })}
        </div>
        <Card className="flex flex-col items-center justify-center text-center p-5 h-[320px] w-[320px]">
          <div className="flex flex-col space-y-3">
            <h2 className="font-bold text-lg">Percobaan UseState</h2>
            <h2>{props.data}</h2>
            <Button
              onClick={() => props.setData("Data Telah Diubah!")}
              color="primary"
            >
              Ubah Data
            </Button>
          </div>
          <div className="flex flex-col pt-4 space-y-3">
            <p>{props.dataInput}</p>
            <p>Data telah diedit sebanyak: {props.changedTimes} kali</p>
            <Input
              label="Edit Untuk Perbarui"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                props.setDataInput(e.target.value)
              }
              size="sm"
            />
          </div>
        </Card>
      </div>
    </>
  );
}
