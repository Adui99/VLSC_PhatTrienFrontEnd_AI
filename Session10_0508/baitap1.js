// Bài tập 1: Tạo hàm findMax
// Viết hàm findMax nhận vào một mảng số và trả về số lớn nhất trong mảng đó sử dụng vòng lặp for.
// // Sample usage
// print(findMax([1,3, 5, 7, 9])); // 9
// print  (findMax([10,20, 30, 40, 50])); // 50
// print  (findMax([-5,-2, -1, -3])); // -1

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([1, 3, 5, 7, 9])); //9
console.log(findMax([10, 20, 30, 40, 50])); //50
console.log(findMax([-5, -2, -1, -3])); // -1