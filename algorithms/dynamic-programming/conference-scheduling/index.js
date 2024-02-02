// Bài toán Tổ chức hội nghị (Conference Scheduling)
// Cho một danh sách các cuộc họp với thời gian bắt đầu và kết thúc, tìm số lượng lớn nhất các cuộc họp không trùng nhau có thể tổ chức trong một phòng.
// Input 1: [[2, 3], [4, 6], [2, 5], [5, 12]] -> Output 1: 2
// Input 2: [[8, 10], [8.5, 11], [7, 9], [10, 12], [13, 17], [12.5, 14]] -> Output 2: 3
const maxMeetingScheduling = (meetings) => {};

const isConflicted = (meetingA, meetingB) => {
  if (meetingA[0] >= meetingB[1] || meetingB[0] >= meetingA[1]) return false;
  return meetingA[1] > meetingB[0] || meetingA[0] < meetingB[1];
};

console.log(isConflicted([14, 19], [12, 13]));
