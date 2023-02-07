import axios from "axios";
import { useEffect, useState } from "react";

export default function Promises() {
  const [data, setData] = useState(null);

  const githubAPI = "https://api.github.com/users/avaniklsjoshi";
  const user = fetch(githubAPI); //prevents inversion of contron and callback hell,object user is immutable.
  console.log(user);
  user.then((data) => {
    console.log(data);
  });

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(githubAPI);
      setData(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {" "}
      Promise is an object that represents eventual completion or failure of the
      async operation, watch console:
      {data ? <div>{data}</div> : <div>Loading...</div>}
    </div>
  );
}
