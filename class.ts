class Person {
  // name field
  name: string;
  // 予約語
  constructor(initName: string) {
    this.name = initName
  }
}

const quill = new Person('Quill');
console.log(quill);
