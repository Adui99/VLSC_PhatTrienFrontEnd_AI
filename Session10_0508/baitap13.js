// Bài tập 13: Viết hàm calculateGrade để tính điểm trung bình từ một mảng điểm số và trả về xếp loại dựa trên điểm trung bình đó. Xếp loại được định nghĩa như sau:
// A: Điểm trung bình từ 90 trở lên
// B: Điểm trung bình từ 80 đến dưới 90
// C: Điểm trung bình từ 70 đến dưới 80
// D: Điểm trung bình từ 60 đến dưới 70
// F: Điểm trung bình dưới 60

function calculateGrade(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    if (average >= 90) {
        return "A";
    } else if (average >= 80) {
        return "B";
    } else if (average >= 70) {
        return "C";
    } else if (average >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(calculateGrade([100, 90, 80, 85, 95])); // A
console.log(calculateGrade([90, 80, 70, 60, 50])); // C
console.log(calculateGrade([80, 70, 60, 50, 40])); // D
console.log(calculateGrade([70, 60, 50, 40, 30])); // F
console.log(calculateGrade([60, 50, 40, 30, 20])); // F