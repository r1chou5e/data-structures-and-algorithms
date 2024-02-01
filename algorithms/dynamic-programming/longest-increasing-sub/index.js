// Bài toán Dãy con tăng dài nhất (Longest Increasing Subsequence - LIS):
// Tìm mảng con có các phần tử liên tiếp tăng dần (phần tử sau phải lớn hơn phần tử trước) trong mảng đã cho và trả về độ dài mảng đó
// Input 1: [1, 5, 4, 3, 9, 10, 11] -> Output 1: 4
// Input 2: [4, -1, 2, 2, 4, 3] -> Output 2: 2

const longestIncreasingSub = (arr, originLen) => {
  if (isIncreasing(arr)) return arr.length;

  let maxLength = 0;

  for (let i = 0; i <= originLen - arr.length + 1; i++) {
    const length = longestIncreasingSub(
      arr.slice(i, arr.length + i - 1),
      originLen
    );
    maxLength = maxLength < length ? length : maxLength;
  }

  return maxLength;
};

const isIncreasing = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) return false;
  }
  return true;
};

const arr = [0, -1, 2, 4, 4, -2, 5, 10, 11, 9, 3];
console.log(longestIncreasingSub(arr, arr.length));
