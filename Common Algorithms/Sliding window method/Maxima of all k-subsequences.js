// Задача программирования 3: максимумы всех k-подпоследовательностей

// function insertMaximumCandidate(value, boundedDeque) {
//   while (!maximums.empty() && maximums.back() < value) {
//     maximums.pop_back();
//   }
//   maximums.push_back(value);
// }

// function removeMaximumCandidate(value, bounded_deque) {
//   if (!maximums.empty() && maximums.front() === value) {
//     maximums.pop_front();
//   }
// }

// function rangeMmaximums(data, n, k) {
//   if (!Array.isArray(data)) {
//     return null;
//   }

//   if (k > n || k === 0 || n === 0) {
//     return null;
//   }

//   const bounded_deque = maximums(k);
//   for (let i = 0; i < k - 1; i++) {
//     insertMaximumCandidate(data[i], maximums);
//   }

//   const result = [];

//   for (let i = k - 1; i < n; i++) {
//     insertMaximumCandidate(data[i], maximums);
//     result[i - k + 1] = maximums.front();
//     removeMaximumCandidate(data[i - k + 1], maximums);
//   }

//   return result;
// }

// const arr = [2, 7, 6, 4, 1, 5, 8];

// console.log(rangeMmaximums(arr, arr.length, 4));
