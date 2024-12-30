const price = 6000;

if (price >= 5000) {
  console.log("送料無料");
} else {
  console.log("送料800円")
}

const weight = 300;

if(weight < 250) {
  console.log("200");
} else if(weight < 500) {
  console.log("400") ;
} else if(weight < 1000) {
  console.log("600");
} else {
  console.log("取り扱いできません");
}

//  &&(And) ||(OR)
const a = 5;
console.log(a > 1 && a < 9); // a > 1 と a < 9両方がtrueだからtrueを返す
console.log(a > 1 && a < 3); // a < 3がfalseだからfalseを返す

const b = 10;
console.log(b < 4 || b > 9); // どちらかがtrueだとtrue b > 9 がtrue

const age1 = 25;
if(age1 >= 20 && age1 <= 29) {
  console.log("20代");
}

// 三項演算子

// if文を使ったとき
const size = 20;
let result;
if(size >= 30) {
  result = "粗大ゴミ";
} else {
  result = "不燃ごみ"
}
console.log(result);

// 三項演算子を使ったとき
const size2 = 20;
const result2 = (size2 >= 30) ? "粗大ゴミ" : "不燃ごみ"; 
console.log(result2);

// switch文
const ranking = 2;

switch(ranking) {
  case 1:
  console.log("金メダル");
  break;
  case 2:
    console.log("銀メダル");
    break;
  case 3:
    console.log("銅メダル");
    break;
  default:
    console.log("メダルなし");
}