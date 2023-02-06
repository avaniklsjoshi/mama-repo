export default function MapFilterReduce() {
  const arr = [2, 1, 4, 11, 3, 8, 9];
  const users = [
    { firstName: "Avani", lastName: "Joshi", age: 30 },
    { firstName: "Apoorv", lastName: "Joshi", age: 30 },
    { firstName: "Aaradhya", lastName: "Joshi", age: 35 },
    { firstName: "Vikas", lastName: "Upadhyay", age: 34 }
  ];
  const binary = () => {
    return arr.map((x) => x.toString(2)); // returns new array
  };
  const thrice = () => {
    return arr.map((x) => x * 3);
  };
  const multipleOf3 = () => {
    return arr.filter((x) => x % 3 == 0); // returns new array
  };
  const arraySum = () => {
    return arr.reduce((accumulator, current) => (accumulator += current), 0); // returns accumulator
  };
  const arrayMax = () => {
    return arr.reduce((accumulator, current) => {
      if (accumulator < current) return current;
      return accumulator;
    }, 0);
  };
  // List of full names
  const fullNames = () => {
    return users.map((x) => x.firstName + " " + x.lastName);
  };
  // List of first names, whose age is greater than 30
  const firstNamesAgeGreaterThan30 = () => {
    return users.filter((x) => x.age > 30).map((x) => x.firstName);
  };
  // List of first names, whose age is greater than 30, alternative of filter and map chaining
  const firstNamesAgeLessThan30WithReduce = () => {
    return users.reduce((accumulator: any, current) => {
      if (current.age <= 30) {
        accumulator.push(current.firstName);
      }
      return accumulator;
    }, []);
  };
  // List by age group
  const ageGroups = () => {
    const out = users.reduce((accumulator: any, current) => {
      if (accumulator[current.age]) {
        accumulator[current.age] += 1;
      } else {
        accumulator[current.age] = 1;
      }

      return accumulator;
    }, {}); // returns accumulator
    console.log(out);
    return "check console";
  };
  return (
    <div>
      Array: {arr.map((x) => x + ", ")}
      <div>
        This will map out binary of the array: {binary().map((x) => x + ", ")}
        <br />
        This will map out thrice of the value of the array:{" "}
        {thrice().map((x) => x + ", ")}
      </div>
      <div>
        This will filter out multiple of 3 from the array:{" "}
        {multipleOf3().map((x) => x + ", ")}
      </div>
      <div>This will sum out the array: {arraySum()}</div>
      <div>This will find out max from the array: {arrayMax()}</div>
      <div>
        This will find list of users full name:{" "}
        {fullNames().map((x) => x + ", ")}
      </div>
      <div>
        This will find list of users first name age greater than 30:{" "}
        {firstNamesAgeGreaterThan30().map((x) => x + ", ")}
      </div>
      <div>
        This will find list of users first name whose age is less than 31:{" "}
        {firstNamesAgeLessThan30WithReduce().map((x: any) => x + ", ")}
      </div>
      <div>This will find age group of users:{ageGroups()}</div>
    </div>
  );
}
