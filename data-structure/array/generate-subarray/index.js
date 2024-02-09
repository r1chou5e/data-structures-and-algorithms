// Bài toán sinh tất cả mảng con của mảng A
// Input 1: [1, 3, 5, 10] -> Output 1: [[1],[3],[5],[10], [1,3], [3,5], [5,10], [1,5], [3,10], [1,10], [1,3,5], [3,5,10], [1,3,10], [1,5,10], [1,3,5,10], []]

const generateSubarrays = (arr) => {
  const result = [];

  const combine = (current, start) => {
    for (let i = start; i < arr.length; i++) {
      console.log([...current, arr[i]]);
      result.push([...current, arr[i]]);
      combine([...current, arr[i]], i + 1);
    }
  };

  combine([], 0);

  return result;
};

console.log(generateSubarrays([1, 9, 3, 10]));
