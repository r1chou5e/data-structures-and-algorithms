function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  const applesDist = apples.map((apple) => apple + a);
  const orangesDist = oranges.map((orange) => orange + b);
  const applesCount = applesDist.reduce((acc, distance) => {
    if (distance >= s && distance <= t) return acc + 1;
    return acc;
  }, 0);
  console.log(applesCount);

  const orangesCount = orangesDist.reduce((acc, distance) => {
    if (distance >= s && distance <= t) return acc + 1;
    return acc;
  }, 0);
  console.log(orangesCount);
}

function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let s1 = x1,
    s2 = x2;
  if ((s1 < s2 && v1 <= v2) || (s1 > s2 && v1 >= v2)) return 'NO';
  if (s1 < s2) {
    while (s1 < s2) {
      s1 += v1;
      s2 += v2;
    }
    if (s1 === s2) return 'YES';
    return 'NO';
  } else if (s1 > s2) {
    while (s1 > s2) {
      s1 += v1;
      s2 += v2;
    }
    if (s1 === s2) return 'YES';
    return 'NO';
  } else return 'YES';
}

function breakingRecords(scores) {
  // Write your code here
  let min = -1,
    max = -1,
    result = [0, 0];
  scores.forEach((value, index) => {
    if (index === 0) {
      min = value;
      max = value;
    }
    if (value > max) {
      if (max !== -1) result[0] += 1;
      max = value;
    }
    if (value < min) {
      if (min !== -1) result[1] += 1;
      min = value;
    }
    console.log(result);
  });
  return result;
}

function migratoryBirds(arr) {
  // Write your code here
  let frequency = [];
  arr.forEach((value) => {
    if (frequency[value]) frequency[value]++;
    else frequency[value] = 1;
  });
  const maxFreq = Math.max(...frequency.filter((value) => Boolean(value)));

  let res = -1;

  frequency.forEach((value, index) => {
    if (value === maxFreq) {
      if (index < res || res === -1) res = index;
    }
  });

  return res;
}

function dayOfProgrammer(year) {
  // Write your code here
  const bigMonths = [1, 3, 5, 7, 8, 10, 12];
  const smallMonths = [4, 6, 9, 11];
  let months = [],
    feb = 28;
  if (year > 1918) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      feb = 29;
    }
  } else if (year < 1918) {
    if (year % 4 === 0) feb = 29;
  }
  for (let i = 1; i <= 12; i++) {
    if (bigMonths.includes(i)) months[i] = 31;
    else if (smallMonths.includes(i)) months[i] = 30;
    else months[i] = feb;
  }
  if (year === 1918) {
    let date = 32 + 14,
      month = 3;
    while (date <= 256) {
      date += months[month];
      month++;
    }
    month--;
    date -= months[month];
    const day = 256 - date;
    const res = `${day >= 10 ? day : '0' + day}.${
      month >= 10 ? month : '0' + month
    }.${year}`;
    console.log(res);
  } else {
    let date = 31,
      month = 2;
    while (date <= 256) {
      date += months[month];
      month++;
    }
    month--;
    date -= months[month];
    const day = 256 - date;
    const res = `${day >= 10 ? day : '0' + day}.${
      month >= 10 ? month : '0' + month
    }.${year}`;
    console.log(res);
  }
}

// countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
// console.log(kangaroo(0, 3, 4, 2));
// console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
// console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
dayOfProgrammer(1918);
