class Person {
  // name field
  // publicを明示的に宣言することもできる。
  name: string;
  private age: number;
  // 予約語
  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }

  incrementAge() {
    this.age += 1;
  }

  // thisの型にPersonとするとメソッドとインスタンス変数のthisが設定される
  greeting(this: Person) {
    console.log(`Hello My name is ${this.name}. I am ${this.age} years old`);
  }
}

let person2: Person;
const quill = new Person('Quill', 10);
quill.incrementAge();
// initで宣言してしまうと自由に後から変更できるそのためプライベートフィールドを使う
// プライベートフィールドを使うと中では宣言できるが外側で変更というか呼び出しができない
// quill.age = 42
quill.greeting();
const anotherQuill = {
  name: 'anotherQuill',
  anotherGreeting: quill.greeting,
};
anotherQuill.anotherGreeting;
