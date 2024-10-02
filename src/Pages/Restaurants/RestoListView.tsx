// import { Button } from "@nextui-org/button";
import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";
import Grid, { DataRestaurant } from "../../components/Grid";

export interface RestoListViewProps {
  data: DataRestaurant[];
  isLoading: boolean;
  ambilData: () => void;
  errorMessage: string;
}

export default function RestoListView(props: RestoListViewProps) {
  return (
    <div className="flex flex-col space-y-12 justify-center items-center py-24">
      <h2 className="text-2xl font-bold">Zahran Zaidan Nasution (Aran8276)</h2>
      <Grid data={props.data} />
      {props.isLoading ? (
        <Button
          className="w-48"
          isDisabled
          size="lg"
          startContent={<Spinner />}
        ></Button>
      ) : (
        <div>
          <Button
            className="w-48"
            size="lg"
            color="primary"
            onClick={props.ambilData}
          >
            {props.errorMessage}
            Refresh Data
          </Button>
        </div>
      )}
    </div>
  );
}
