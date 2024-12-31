// 関数宣言
// function 関数名() {
//   処理;
// }

// 関数の呼び出し
// 関数名();

function hello() {
  console.log("こんにちは");
}

hello();
hello();

// 引数のある関数
// function 関数名(引数名) {
// 処理 ;
// }

// 引数のある関数の呼び出し
// 関数名(実引数)

function hello1(name) {
  console.log(`こんにちは${name}さん`);
}

hello1("Alice");
hello1("Bob");

// function 関数名() {
// 処理 ;
// return 戻り値 ;
// }

function pi() {
  return 3.14;
}

const a = pi();
console.log(a);

function double(number) {
  const result = number * 2;
  return result;
}

const c = double(10);
console.log(c);

const b = double(8);
console.log(b);

// 複数の引数を持つ関数
// function 関数名(仮引数1, 仮引数2, 仮引数3) {
// 処理 ;
// }

// 関数名(実引数1, 実引数2, 実引数3)

function sum(a, b) {
  const result = a + b;
  return result;
}

const x = sum(3, 5);
console.log(x);

const y = sum(10, 20);
console.log(y);

// デフォルト引数を設定しておく
function hello2(name = "ゲスト") {
  console.log(`こんにちは${name}さん`);
}

hello2("Bob");
hello2();