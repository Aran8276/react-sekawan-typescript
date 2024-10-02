import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { DataRestaurant } from "../components/Grid";
import Star from "./Star";
import { Divider } from "@nextui-org/divider";

export default function RestaurantCard(props: DataRestaurant) {
  return (
    <Card className="text-start p-4 w-[300px] h-[200px] items-center hover:scale-[1.05]">
      <CardBody>
        <div className="flex justify-between space-x-4 w-full">
          <div className="flex items-center">
            <img
              src={`https://restaurant-api.dicoding.dev/images/medium/${props.pictureId}`}
              className="rounded-xl w-48 object-contain"
              alt=""
            />
          </div>
          <div className="flex flex-col w-[160px]">
            <h2 className="font-bold text-lg">{props.name}</h2>
            <p className="">{props.description}</p>
          </div>
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex relative top-2 items-center">
          <div className="pr-1 opacity-85 text-gray-800">{props.rating}</div>
          {[...Array(props.rating)].map(() => {
            return <Star />;
          })}
        </div>
      </CardFooter>
    </Card>
  );
}
