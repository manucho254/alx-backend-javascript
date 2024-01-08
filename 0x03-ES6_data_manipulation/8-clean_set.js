export default function cleanSet(set, startString) {
  let newStr = '';
  if (startString.length === 0 || !(set instanceof Set)) {
    return newStr;
  }

  set.forEach((value) => {
    if (typeof value === 'string') {
      if (value.includes(startString)) {
        if (value.startsWith(startString)) {
          if (newStr.length === 0) {
            newStr += `${value.replace(startString, '')}`;
          } else {
            newStr += `-${value.replace(startString, '')}`;
          }
        } else if (newStr.length === 0) {
          newStr += `${value}`;
        } else {
          newStr += `-${value}`;
        }
      }
    }
  });

  return newStr;
}
