export const splitArrayIntoChunks = <T extends any>(
  arr: T[],
  itemsPerChunk: number
): T[][] => {
  const chunksArray: T[][] = [];
  for (let i = 0; i < arr.length; i += itemsPerChunk) {
    const chunk = arr.slice(i, i + itemsPerChunk);
    chunksArray.push(chunk);
  }
  return chunksArray;
};
