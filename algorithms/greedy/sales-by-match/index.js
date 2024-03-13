function sockMerchant(n, ar) {
  let pairCount = 0;
  let newAr = ar.map((sock) => {
    return { sock, paired: false };
  });
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (
        newAr[i].sock === newAr[j].sock &&
        !newAr[j].paired &&
        !newAr[i].paired
      ) {
        newAr[j].paired = true;
        newAr[i].paired = true;
        pairCount++;
      }
    }
  }

  return pairCount;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
