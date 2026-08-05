// Bài tập 8: Viết hàm countGreaterThan nhận vào một mảng số và một số value, hàm trả về số lượng phần tử trong mảng lớn hơn value.
// Sample usage
// print  (countGreaterThan([1, 5, 7, 2, 3], 3)); // 2
// print  (countGreaterThan([2, 3, 1, -6, 8], 5)); // 1
// print  e(countGreaterThan([], 5)); // 0

function countGreaterThan(arr, value) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            count++;
        }
    }
    return count;
}

console.log(countGreaterThan([1, 5, 7, 2, 3], 3)); // 2
console.log(countGreaterThan([2, 3, 1, -6, 8], 5)); // 1
console.log(countGreaterThan([], 5)); // 0