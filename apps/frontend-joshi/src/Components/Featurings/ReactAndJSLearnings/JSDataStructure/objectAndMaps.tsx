// 1. Objects are unordered but maps are ordered
// 2. Keys in object can only be of type symbol or string, but in maps it can be of any type
// 3. An Object has a prototype and may contain default keys which may collide with our own keys, but not in maps
// 4. Object are not iterables, but maps are
// 5. Length of the object needs to be determined manually, but it is readily available in maps
// 6. we can attach functionality to objects but maps can only store data

export default function ObjectAndMaps() {
  const maps = new Map([
    ["a", 1],
    ["b", 2]
  ]);
  maps.set("c", 3); // add value
  maps.delete("b"); // delete value
  maps.set("c", 3); // add value
  console.log(`Maps size: ${maps.size}`);
  console.log(`Maps contains key: ${maps.has("a")}`);
  maps.clear(); // delete all in maps

  for (const [key, value] of maps) {
    console.log(`Maps: ${key}: ${value}`);
  }
  return <div>Object And Maps</div>;
}
