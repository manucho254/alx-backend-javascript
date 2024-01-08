export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const intBuff = new Int8Array(buffer);
  const view = new DataView(buffer);

  try {
    intBuff[position] = value;
    return view;
  } catch (error) {
    console.log(error);
    throw new Error('Position outside range');
  }
}
