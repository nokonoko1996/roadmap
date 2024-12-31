const book = {
  title: "吾輩は猫である",
  author: "夏目漱石",
  pages: 620
}

console.log(book);
console.log(book.title); // ドット表記法
console.log(book["title"]); // ブラケット表記法
console.log(book.year); // 存在しないプロパティ = undefined

// プロパティと追加と上書き

const person = {name: "Alice", age: 20}
person.name = "Bob" ;
person["age"] = 25;
console.log(person);

// メソッドの書き方

const person1 = {
  name: "アリス",
  age: 20,
  interests: ["読書", "料理"],
  greet: function() {
    console.log("こんにちは"); }
  }

  person1.greet();

  // thisを経由してプロパティにアクセスする

  const person2 = {
    name: "Alice",
    greet: function( ) {
      console.log(`こんにちは、私は${this.name}です。`);
    }
  }

  person2.greet( );
  person2.name = "Bob";
  person2.greet( );