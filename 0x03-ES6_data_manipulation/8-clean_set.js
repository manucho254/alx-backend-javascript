export default function cleanSet(set, startString) {
  let newStr = '';
  if (startString.length === 0) {
    return newStr;
  }
  set.forEach((value) => {
    if (value.includes(startString)) {
      if (newStr.length === 0) {
        newStr += `${value.replaceAll(startString, '')}`;
      } else {
        newStr += `-${value.replaceAll(startString, '')}`;
      }
    }
  });

  return newStr;
}
