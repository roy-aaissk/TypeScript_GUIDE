let hasValue : boolean = false
let number : number = 10
let string : string = '1'

const person : {
  name: string;
  age: number;
} = {
  name: 'Jack',
  age: 1
}

let fruits : string[] = ['Banana', 'Apple', 'Grape'];

enum CoffeeSize {
  SHORT= 'SHORT',
  TALL= 'TALL',
  GRANDE= 'GRANDE',
  VENTI= 'VENTI'
}

const coffee = {
  hot: true,
  size: CoffeeSize.SHORT
}


// Callback関数
const doubleNumber: (num: number) => number  = num => num * 2
function doubleAndHandle(num: number, cb: (num: number) => void): void{
  const dobuleNum = cb(num * 2);
  console.log(dobuleNum)
}
doubleAndHandle(21, doubleNumber => {
  return doubleNumber
})

// unknown型
let unknownInput: unknown;
let anyInput: any;
let text: string;
// なんでも入れられるただし他の型の変数に代入ができない
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
// これはできない
// text = unknownInput
// typeofで型判定が必要
if (typeof unknownInput === 'string') {
  text = unknownInput;
}

// never型
// 何も返さない
function error(message: string): never {
  throw new Error(message);
}
console.log(error('This is an error'));

// voidとneverの違いがわからん
