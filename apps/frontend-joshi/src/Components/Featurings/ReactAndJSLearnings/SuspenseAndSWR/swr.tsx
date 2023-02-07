import axios from "axios";
import useSWR from "swr";

export default function SWR() {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    "https://random-facts2.p.rapidapi.com/getfact",
    fetcher
  );
  if (error) return <div>Request Failed</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <h1>Random Fact:</h1>
      <p>{data.randomFact}</p>
    </div>
  );
}
