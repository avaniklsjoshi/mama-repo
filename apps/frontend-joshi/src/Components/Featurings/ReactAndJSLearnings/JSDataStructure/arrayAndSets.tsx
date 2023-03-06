export default function ArrayAndSets() {
  // Arrays ------------------
  const arr = [1, 2, "avani"];
  arr.pop(); // O(1)
  arr.push("joshi"); // O(1)
  arr.shift(); // O(n)
  arr.unshift(0); // O(n) concat, splice, sclice
  //Search -> // O(n) forEach, map, fiter, reduce
  for (const item of arr) {
    console.log(item);
  }

  // Sets ------------------
  // 1. set can be of mixed data type
  // 2. Each value is unique
  // 3. Do not maintain insert order
  // 4. dynamically sized
  // 5. Iterable
  // 6. search and delete is faster than arrays
  const set = new Set([1, 2, 3]);
  set.add(4);
  console.log(set.has(4));
  set.delete(3);
  console.log(set.size);
  for (const item of arr) {
    console.log(item);
  }
  set.clear();

  return (
    <div>
      Array And Sets
      <div> {`Arr: ${arr}`}</div>
      <div> {"Set: Check console"}</div>
    </div>
  );
}
