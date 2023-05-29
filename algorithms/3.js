const arr = [0, 8, 12, 16, 19, 25, 28, 30, 33, 37, 47, 85, 100];

const findIndexElem = (elem, arr) => {
  const res = arr.indexOf(elem);
  return res === -1 ? null : res;
};

console.log(findIndexElem(100, arr));
