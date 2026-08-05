// Bài tập 11: Viết hàm filterEvensAndSum để lọc ra các số chẵn từ một mảng số nguyên đầu vào và tính tổng của chúng.
// // Sample usage
// // print(filterEvensAndSum([1, 2, 3, 4, 5, 6])); // 12 (2 + 4 + 6 = 12)
// // print(filterEvensAndSum([12, 14, 15, 19, 20, 100])); // 146 (12 + 14 + 20 + 100 = 146)

function filterEvensAndSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(filterEvensAndSum([1, 2, 3, 4, 5, 6])); // 12
console.log(filterEvensAndSum([12, 14, 15, 19, 20, 100])); // 146