// Bài tập 10: Viết hàm sumOfSquares nhận vào một mảng số nguyên và trả về tổng bình phương của mỗi số trong mảng.
// // Sample usage
// // print(sumOfSquares([1,2, 3])); // 14 (1^2 + 2^2 + 3^2 = 14)
// // print(sumOfSquares([4, 5, 6])); // 77 (4^2 + 5^2 + 6^2 = 77)

function sumOfSquares(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
    }
    return sum;
}

console.log(sumOfSquares([1, 2, 3])); // 14
console.log(sumOfSquares([4, 5, 6])); // 77