// Bài tập 14: Viết hàm findMissingNumber để tìm số thiếu trong một dãy số từ 1 đến n. Mảng đầu vào chứa các số từ 1 đến n nhưng thiếu một số, không có trùng lặp.
// // Sample usage
// // print(findMissingNumber([1, 2, 4, 5, 6], 6)); // 3
// // print(findMissingNumber([3, 7, 1, 2, 8, 4, 5], 8)); // 6
// // print(findMissingNumber([1, 2, 3, 4], 4)); // 0

function findMissingNumber(arr, n) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let expectedSum = (n * (n + 1)) / 2;
    return expectedSum - sum;
}

console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // 3
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5], 8)); // 6
console.log(findMissingNumber([1, 2, 3, 4], 4)); // 0
