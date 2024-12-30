// テンプレートリテラルでの改行
const longText = `こんにちは
こんばんは
おはよう`;
// console.log(longText); 

// エスケープ記号を使った改行
const longText2 = "こんにちは\n" +
"こんばんは\n" +
"おはよう";
// console.log(longText2); 

//インクリメント演算子
//数値に1を足すこと
let count = 10;
count++;
// console.log(count)

//配列の操作
const interests = ["読書", "料理", "キャンプ"];
const count2 = interests.length; // 配列の要素数
// console.log(count2);

interests.push("散歩"); // 配列の最後尾に要素を追加する
// console.log(interests)

const last = interests.pop(); // 配列の一番最後の要素を取り出す
// console.log(last);
// console.log(interests);

const check1 = interests.includes("読書"); // 読書があるか調べる
// console.log(check1);

const check2 = interests.includes("サッカー"); // サッカーがあるか調べる
// console.log(check2);

const a = interests.join("と"); // 要素を一つの文字列にする
console.log(a);

const string = "読書と料理とキャンプ";
const b = string.split("と");
console.log(b);