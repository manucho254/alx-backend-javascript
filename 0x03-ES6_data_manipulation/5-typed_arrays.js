export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const intBuff = new Int8Array(buffer);

  try {
    intBuff[position] = value;
    return buffer;
  } catch (error) {
    throw new Error('Position outside range');
  }
}
