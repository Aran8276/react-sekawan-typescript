import { useSearchParams } from "react-router-dom";
import { RefObject, useEffect } from "react";
import RestoListView, { RestoListViewProps } from "./RestoListView";

interface SelfProps extends RestoListViewProps {
  inputSearchRef: RefObject<HTMLInputElement>;
  ambilDataSearch: (query: string) => void;
}

export default function RestoList(props: SelfProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") ?? "";
  const input = props.inputSearchRef.current?.value;
  useEffect(() => {
    if (input) {
      setSearchParams({ search: input });
      return;
    }
    if (searchValue) {
      props.ambilDataSearch(searchValue.toString());
      return;
    }
    props.ambilData();
  }, [input]);

  return (
    <RestoListView
      ambilData={props.ambilData}
      data={props.data}
      errorMessage={props.errorMessage}
      isLoading
    />
  );
}
