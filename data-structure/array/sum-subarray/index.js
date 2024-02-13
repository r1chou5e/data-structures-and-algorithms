// Bài toán sinh tất cả mảng con của mảng A sao cho tổng các phần tử của mảng con bằng k
// Input 1: A = [1, 5, 8, 10, 3, 2]; k = 10 -> Output 2: [[5, 3, 2], [10], [8, 2]]
function findSubarrayWithSum(arr, k) {
  const result = [];

  const combine = (current, start) => {
    for (let i = start; i < arr.length; i++) {
      if ([...current, arr[i]].reduce((acc, value) => acc + value, 0) === k)
        result.push([...current, arr[i]]);
      combine([...current, arr[i]], i + 1);
    }
  };

  combine([], 0);

  return result;
}

console.log(findSubarrayWithSum([-10, 5, 7, -3, 8, 1], 4));
