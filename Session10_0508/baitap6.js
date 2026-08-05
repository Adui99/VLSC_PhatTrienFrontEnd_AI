// Bài tập 6: Viết hàm calculateAverage nhận vào một mảng số và trả về trung bình cộng của các số trong mảng đó, trả về 0 nếu mảng trống.
// // Sample usage
// print  (calculateAverage([10,20, 30, 40, 50])); // 30

function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == null) {
            return 0;
        }
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calculateAverage([10, 20, 30, 40, 50])); // 30