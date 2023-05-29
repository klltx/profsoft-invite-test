const inAscendingOrder = (array = [3, 1, 5, 2]) => {
  const arrayCopy = [...array];
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arrayCopy[j] > arrayCopy[j + 1]) {
        let buff = arrayCopy[j];
        arrayCopy[j] = arrayCopy[j + 1];
        arrayCopy[j + 1] = buff;
      }
    }
  }
  return arrayCopy;
};

const inDescendingOrder = (array = [3, 1, 5, 2]) =>
  inAscendingOrder(array).reverse();

console.log(inAscendingOrder([1, 16, 23, 2, 25, 14, 32, 3, 90, 24]));
console.log(inDescendingOrder([1, 16, 23, 2, 25, 14, 32, 3, 90, 24]));
