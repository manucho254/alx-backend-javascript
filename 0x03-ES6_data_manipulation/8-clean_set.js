export default function cleanSet(set, startString) {
  const newStr = [];
  if (!startString || startString.length === 0 || !(set instanceof Set)) {
    return '';
  }

  set.forEach((value) => {
    if (typeof value === 'string') {
      if (value.includes(startString)) {
        if (value.startsWith(startString)) {
          newStr.push(value.replace(startString, ''));
        } else if (!value.startsWith(startString)) {
          newStr.push(value);
        }
      }
    }
  });

  return newStr.join('-');
}
