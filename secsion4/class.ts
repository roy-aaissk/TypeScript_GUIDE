class Person {
  // name field
  name: string;
  age: number;
  // 予約語
  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }

  // thisの型にPersonとするとメソッドとインスタンス変数のthisが設定される
  greeting(this: Person) {
    console.log(`Hello My name is ${this.name}`);
  }
}

let person2: Person;
const quill = new Person('Quill', 10);
quill.greeting();
const anotherQuill = {
  name: 'anotherQuill',
  anotherGreeting: quill.greeting,
};
anotherQuill.anotherGreeting;
