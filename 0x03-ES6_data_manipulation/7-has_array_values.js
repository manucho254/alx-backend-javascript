export default function hasValuesFromArray(set, array) {
  // check if set contains items from array

  const seen = [];
  array.forEach((val) => {
    if (set.has(val)) {
      seen.push(val);
    }
  });

  return array.length === seen.length;
}
