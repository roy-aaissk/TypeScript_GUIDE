class Person {
  // readonly修飾子は変数やパラメータに設定できる。(内部でも変更できない)
  // public readonly id: number = 32;
  // id = 30 これはできない
  // readonly修飾子はconstructor内では再代入が可能である

  // publicを明示的に宣言することもできる。
  // initの変数の書き方は2パターンある
  // 1. initNameのように変数を準備
  // 2. Public, Privateとつけて変数と型を指定する
  constructor(
    public readonly name: string,
    private age: number
  ) {}

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
