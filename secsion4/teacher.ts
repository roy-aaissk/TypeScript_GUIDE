// extendsをするとClassの継承ができる
class Teacher extends Person {
  // 継承された子クラスでコンストラクタを宣言する場合親クラスのinit変数の定義とsuperが必要。
  // 追加で子クラスにinit変数を追加する場合は,subjectのように書く
  constructor(
    name: string,
    age: number,
    public subject: string
  ) {
    super(name, age);
  }
}

const teacher = new Teacher('Quill', 30, 'Math');
teacher.greeting();
