export default function MapFilterReduce() {
  const githubAPI = "https://api.github.com/users/avaniklsjoshi";
  const user = fetch(githubAPI); //prevents inversion of contron and callback hell,object user is immutable.
  console.log(user);
  user.then((data) => {
    console.log(data);
  });
  return (
    <div>
      Promise is an object that represents eventual completion or failure of the
      async operation, watch console:
    </div>
  );
}
