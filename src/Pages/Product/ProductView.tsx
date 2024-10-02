import { Card } from "@nextui-org/card";
import { Product } from "./ProductList";
import { Button } from "@nextui-org/button";
import "./Product.scss";

interface SelfProps {
  data: Product[] | undefined;
}

export default function ProductView(props: SelfProps) {
  return (
    <div className="flex justify-center container py-8">
      <div className="flex space-y-8 flex-col">
        <div className="flex justify-center text-center">
          <h1 className="bg-clip-text animated-gradient">
            Product Section by Aran8276
          </h1>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {props.data?.map((item) => {
            return (
              <Card className="w-[240px] h-[284px] p-3">
                <div className="flex space-y-2 flex-col">
                  <div className="flex justify-center">
                    <img
                      className="rounded-xl w-[100px] h-[120px] object-contain"
                      src={item.image}
                    />
                  </div>
                  <h2 className="font-bold text-lg truncate">{item.title}</h2>
                  <p className="line-clamp-2">{item.description}</p>
                  <Button
                    variant="shadow"
                    className="gradient-color-zahran text-white"
                  >
                    Kunjungi
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
