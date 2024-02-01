// Bài toán Tìm tổng con dãy lớn nhất (Maximum Subarray Sum) - Thuật toán Kadane
// Cho một mảng số, tìm tổng lớn nhất của các mảng con liên tiếp và trả về giá trị tổng
// Input 1: [4, 1, -4, -10, 2, 8] -> Output 1: 10
// Input 2: [-5, 4, 3, 9, -6, 0, 7] -> Output 2: 17

const maxSubarraySum = (arr) => {
  let max = arr[0];
  let currentMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentMax = Math.max(arr[i], currentMax + arr[i]);
    max = Math.max(max, currentMax);
  }

  return max;
};

const arr = [4, 1, -4, -10, 2, 8];
console.log(maxSubarraySum(arr));
