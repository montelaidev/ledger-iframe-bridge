export const hexToAscii = (text) => {
  const bytes = text.match(/.{1,2}/gu) ?? [];
  return String.fromCharCode(...bytes.map((byte) => Number.parseInt(byte, 16)));
};
