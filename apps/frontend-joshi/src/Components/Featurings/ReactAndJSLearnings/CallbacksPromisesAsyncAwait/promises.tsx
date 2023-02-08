import axios from "axios";
import { useEffect, useState } from "react";

export default function Promises() {
  const [asyncData, setAsyncData] = useState({ bio: "" });
  const githubUsersAPI = "https://api.github.com/users";
  const githubUserAPI = "https://api.github.com/users/avaniklsjoshi";

  //TODO: fix data filling
  fetch(githubUsersAPI) //prevents inversion of contron and callback hell,object user is immutable.
    .then((res) => {
      console.log("first api", res.json());
      return fetch(githubUserAPI); // dont forget to use return, if you want to access in next promise
    })
    .then((userAvani) => {
      console.log("userAvani: second api", userAvani.json());
      return userAvani;
    })
    .catch((err) => {
      console.log("Error", err);
      return err;
    })
    .finally(() => {
      console.log("Finally all went well ");
    });

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(githubUserAPI);
      setAsyncData(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {" "}
      Promise is an object that represents eventual completion or failure of the
      async operation, watch console:
      {asyncData ? <div>{asyncData.bio}</div> : <div>Loading...</div>}
    </div>
  );
}
