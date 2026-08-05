// Bài tập 7: Viết hàm isAscending nhận vào một mảng số và kiểm tra xem mảng đó có phải là dãy số tăng dần không. Trường hợp mảng chỉ có một phần tử hoặc mảng rỗng không được coi là mảng tăng dần.
// // Sample usage
// print  (isAscending([1, 2, 3, 5])); // true

function isAscending(arr) {
    if (arr.length <= 1) {
        return false;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(isAscending([1, 2, 3, 5])); // true
console.log(isAscending([1, 1, 1])); // false
console.log(isAscending([1])); // false
