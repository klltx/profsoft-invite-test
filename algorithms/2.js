const list = {
  A: ["B", "C"],
  B: ["D", "F"],
  C: ["K", "L"],
  D: ["M", "N"],
  E: ["P", "X"],
  F: ["Y", "Z"],
  G: ["F", "Z"],
};

const pathExist = (list, start, end) => {
  let isReachable = false;

  for (let i = 0; i < list[start].length; i++) {
    const edge = list[start][i];
    if (edge === end) return true;

    if (list[edge]) isReachable = pathExist(list, edge, end);
  }

  return isReachable;
};

console.log(pathExist(list, "A", "L"));
