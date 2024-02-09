// Bài toán: Tìm các số là bội của tất cả phần tử trong mảng A và là ước của tất cả phần tử trong mảng B
// Input 1: A = [2, 6], B = [24, 36] -> Output 1: [6, 12]
// Input 2: A = [2, 4], B = [16, 32, 96] -> Output 2: [4, 8, 16]
const solution = (a, b) => {
  const maxA = Math.max(...a);
  const minB = Math.min(...b);
  const result = [];
  for (let i = maxA; i <= minB; i++) {
    let flag = true;
    a.forEach((value) => {
      if (i % value !== 0) flag = false;
    });
    b.forEach((value) => {
      if (value % i !== 0) flag = false;
    });
    if (flag) result.push(i);
  }
  return result;
};

console.log(solution([2, 4], [16, 32, 96]));
