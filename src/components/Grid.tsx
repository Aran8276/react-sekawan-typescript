import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

export interface DataRestaurant {
  id: string;
  name: string;
  description: string;
  pictureId: number;
  city: string;
  rating: number;
}

interface SelfProps {
  data: DataRestaurant[];
}

export default function Grid(props: SelfProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {props.data.map((item, index) => {
        return (
          <Link className="w-min" to={`/restaurant/${item.id}`}>
            <RestaurantCard
              key={index}
              city={item.city}
              description={item.city}
              id={item.id}
              name={item.name}
              pictureId={item.pictureId}
              rating={Math.round(item.rating)}
            />
          </Link>
        );
      })}
    </div>
  );
}
