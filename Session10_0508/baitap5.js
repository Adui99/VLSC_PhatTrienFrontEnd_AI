// Bài tập 5: Viết hàm sumArray nhận vào một mảng số và trả về tổng của tất cả các số trong mảng đó.
// // Sample usage
// print  (sumArray([1, 2, 3, 4, 5])); // 15

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15