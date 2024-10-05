const arr = [1, 2, 3, 4, 5, 6, 7];
const n = arr.length;

const prefixSumArr = new Array(n);

prefixSumArr[0] = arr[0];
for (let i = 1; i < n; i++) {
  prefixSumArr[i] = prefixSumArr[i - 1] + arr[i];
}

// index1=2,index2=5
console.log(prefixSumArr[5] - prefixSumArr[2]);
