type Person = {
  name: string;
};

const person: Person = {
  name: "Ali",
};

console.log(person.name);

//type annotation
let Name: string = "halim";
console.log(Name);

var Numberer: number = 43;
console.log(Numberer);

let Boo: boolean = true;

if (Boo === true) {
  console.log("mr.");
} else {
  console.log("mrs.");
}

// Type inference
let You = "Shagor";
console.log(You);

let Value = 23;
console.log(Value);

let Bool = true;
console.log(Bool);

// function parameter annotation
function addone(num1: number, num2: number) {
  return num1 + num2;
}
console.log(addone(3, 5));

const Mul = (n1: number, n2: number) => {
  return n1 * n2;
};
console.log(Mul(3.4, 4.8));

// Functoin Return annotations
const Return = (n: number): number => {
  return n ** n;
};
console.log(Return(3.3));

//never keywords
const ErrMessage = (msg: string): never => {
  throw new Error(`this message: ${msg}`);
};
// console.log(ErrMessage("hello"));

// Array types
const num: number[] = [1.2, 4, 5];

const str: Array<string> = ["alu", "valu"];

const Multi: Array<boolean | number | string> = [true, 2, 3.4, "alu", "valu"];
Multi.push("harry");
console.log(Multi);
//Multi dimensional array
const multi: Array<any> = [[[]]];

//objects annotations
const Person: { fullName: string; lastName: string; age?: number } = {
  fullName: "sagor",
  lastName: "mia",
  // age: 34,
};
console.log(`Name:${Person.fullName}${Person.lastName},age:${Person.age}`);

const userInfo = (): { Name: string; Age: number; Gender: string } => {
  return {
    Name: "hamid",
    Age: 45,
    Gender: "Male",
  };
};
console.log(userInfo());

// type aliases
