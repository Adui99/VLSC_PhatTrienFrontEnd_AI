// Bài tập 4: Viết hàm countPositiveNumbers nhận vào một mảng số và trả về số lượng số dương trong mảng đó.
// // Sample usage
// print  (countPositiveNumbers([-1,2, 3, -4, 5])); // 3

function countPositiveNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    return count;
}

console.log(countPositiveNumbers([-1, 2, 3, -4, 5])); // 3
