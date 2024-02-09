// Bài toán: Làm phẳng 1 mảng có chứa các mảng con (không dùng hàm flat)
// Input 1: [1, 2, [3, 4], [[2], 0]] -> Output 1: [1, 2, 3, 4, 2, 0];
// Input 2: [[1, 2, [3], [], 2],[4, 4]]

const array = [[1, 'n', [3], [], 2], [4, 4], [true]];
const flattenArray = (array) => {
  const result = [];
  const flat = (arr) => {
    arr.forEach((value) => {
      if (Array.isArray(value)) flat(value);
      else result.push(value);
    });
  };

  flat(array);

  return result;
};

// console.log(array.flat(Infinity));
console.log(flattenArray(array));
