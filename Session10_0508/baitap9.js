// Bài tập 9: Viết hàm alternateSum để tính “tổng xen kẽ” từ một mảng số. Trong “tổng xen kẽ”, bạn sẽ cộng số ở vị trí chẵn và trừ số ở vị trí lẻ trong mảng.
// // print(alternateSum([10, 5, 6, 3])); // 8 (10 - 5 + 6 - 3)
// // print(alternateSum([1,2, 3, 4, 5])); // 3 (1 - 2 + 3 - 4 + 5)

function alternateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            sum += arr[i];
        } else {
            sum -= arr[i];
        }
    }
    return sum;
}

console.log(alternateSum([10, 5, 6, 3])); // 8 (10 - 5 + 6 - 3)
console.log(alternateSum([1, 2, 3, 4, 5])); // 3 (1 - 2 + 3 - 4 + 5)