import { Avatar } from "@nextui-org/avatar";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { ApiResponse } from "./Detail";

interface SelfProps {
    data: ApiResponse;
    getRandomAvatar: () => string;
}


export default function DetailView(props: SelfProps) {
  return (
    <div className="flex justify-center items-center py-12">
      {props.data ? (
        <div className="flex flex-col space-y-12">
          <Card className="h-[640px] w-[1280px] px-4 py-2">
            <CardHeader>
              <h2 className="font-bold text-lg">Resto</h2>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="flex flex-col">
                <div className="flex justify-between space-x-12 py-4">
                  <div className="w-full">
                    <img
                      className="rounded-xl"
                      src={`https://restaurant-api.dicoding.dev/images/large/${props.data.restaurant.pictureId}`}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col self-center space-y-3 w-[1280px]">
                    <h2 className="text-2xl font-bold">
                      {props.data.restaurant.name}
                    </h2>
                    <p className="text-justify">
                      {props.data.restaurant.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col space-y-3 pt-3">
                  <div>
                    <h3 className="text-lg">Kategori</h3>
                    <ul className="list-disc pl-6">
                      {props.data.restaurant.categories.map((item) => {
                        return <li>{item.name}</li>;
                      })}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg">Daftar Menu</h3>
                    <p className="list-disc pl-4 text-lg pt-1">- Makanan</p>
                    <ul className="list-disc pl-12 py-1">
                      {props.data.restaurant.menus.foods.map((item) => {
                        return <li>{item.name}</li>;
                      })}
                    </ul>
                    <p className="list-disc pl-4 text-lg py-1">- Minuman</p>
                    <ul className="list-disc pl-12 py-1">
                      {props.data.restaurant.menus.drinks.map((item) => {
                        return <li>{item.name}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </CardBody>
            <Divider />
            <CardFooter>
              <div>{props.data.restaurant.address}</div>
            </CardFooter>
          </Card>
          <div className="grid grid-cols-2 self-center gap-6">
            {props.data.restaurant.customerReviews.map((item) => {
              return (
                <Card className="w-[32rem]">
                  <CardHeader>
                    <span className="font-bold">Review</span>
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <div className="flex flex-1 space-x-5 pl-2">
                      <Avatar size="lg" src={props.getRandomAvatar()} />
                      <div className="flex flex-col pb-6">
                        <h2 className="font-bold text-lg">{item.name}</h2>
                        <p>{item.review}</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="">Loading</div>
      )}
    </div>
  );
}
