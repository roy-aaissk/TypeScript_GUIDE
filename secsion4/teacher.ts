// extendsをするとClassの継承ができる
class Teacher extends Person {
  get subject() {
    if (!this._subject) {
      throw new Error('There is no subject.');
    }
    return this._subject;
  }

  // valueは代入した値
  set subject(value) {
    if (!value) {
      throw new Error('There is no subject.');
    }
    this._subject = value;
  }
  // 継承された子クラスでコンストラクタを宣言する場合親クラスのinit変数の定義とsuperが必要。
  // 追加で子クラスにinit変数を追加する場合は,subjectのように書く
  constructor(
    name: string,
    age: number,
    private _subject: string
  ) {
    super(name, age);
  }
}

const teacher = new Teacher('Quill', 30, 'Math');
teacher.greeting();

// setterの実行タイミング
// teacher.subject がMusicになる
teacher.subject = 'Music';

// getterの実行タイミング
teacher.subject;
