// Bài tập 3: Viết hàm findMin nhận vào một mảng số và trả về số nhỏ nhất trong mảng đó sử dụng vòng lặp for.
// // Sample usage
// print  (findMin([5,2, 8, 1, 4])); // 1

function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

console.log(findMin([5, 2, 8, 1, 4])); // 1
