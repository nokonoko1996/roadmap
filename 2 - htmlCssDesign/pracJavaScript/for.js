// for(初期化式; 条件式; 加算式;) { 処理; }
// for(let i = 1; i <= 5; i++) {
// console.log(`${i}回目の処理`);
// }

for (let i = 0; i < 3; i++) {
  console.log("hello");
}

// while (条件式) {
// 処理 ;
// }

let num = 2;

while(num < 100) { // ②
  console.log(num); // numの値を表示
  num = num * 2; // numの値を2倍して②に戻る
}

// for文を使って配列の要素を表示する例1

const fruits1 = ["りんご", "みかん", "バナナ"];

for(let i = 0; i < fruits1.length; i++) {
  console.log(fruits1[i]);
}

// for(変数 of 配列) {
// 処理;
// }

const fruits = ["りんご", "みかん", "バナナ"];

for (const fruit of fruits) {
  console.log(fruit);
}