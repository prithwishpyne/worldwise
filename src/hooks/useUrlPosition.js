import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchParams, setSearchParams] = useSearchParams();
  setSearchParams;

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  console.log(lat, lng);

  return [lat, lng];
}
