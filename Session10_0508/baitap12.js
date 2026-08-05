// Bài tập 12: Viết hàm findLongestWord nhận vào một mảng các chuỗi và trả về chuỗi dài nhất trong mảng đó. Nếu có nhiều chuỗi có độ dài giống nhau và là dài nhất, trả về chuỗi xuất hiện đầu tiên.
// // Sample usage
// // print(findLongestWord(["apple", "banana", "cherry", "date"])); // banana
// // print(findLongestWord(["hello","world", "this", "is", "great"])); // hello

function findLongestWord(arr) {
    let longestWord = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord(["apple", "banana", "cherry", "date"])); // banana
console.log(findLongestWord(["hello", "world", "this", "is", "great"])); // hello