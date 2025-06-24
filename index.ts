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
type Persons = {
  Name: string;
  age?: number;
  Location: string;
};

const User = (user: Persons) => {
  return `Name is :${user.Name} ,Age :${user.age} and Location :${user.Location}`;
};
console.log(User({ Name: "sagor", age: 20, Location: "dhaka" }));

// Intersection type
type UserInfo = {
  Name: string;
  Age: number;
};
type Employee = {
  Email: string;
  Password: string;
};

type User = UserInfo & Employee;

const user: User = {
  Name: "Ali",
  Age: 44,
  Email: "ali@gmail.com",
  Password: "3435re",
};
console.log(`Name:${user.Name}`);

// Union
type UserInfos = {
  names: string;
  ages: number;
  genders: string;
};

type UserDetails = {
  email: string;
  password: string;
};

let users: UserInfos | UserDetails = {
  names: "hamid",
  ages: 23,
  genders: "Male",
};

console.log(`${users.ages}`);

// letral types
let colors: "red" | "yellow";
let color: "red" = "red";
colors = "red";
// colors = "green"; not allowed
console.log(colors);

// Tuples
const game: [number, string, boolean] = [1, "cricket", true];
console.log(game[2]);

// Enum Type
enum Clown {
  funny = "funny",
  joke = "joker",
}
console.log(Clown.joke);

// OOP
class Persone {
  readonly name: string;
  private email: string;
  protected age: number;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  public getMail(): string {
    return this.email;
  }
}
const perso = new Persone("ali", 30, "fjd@.com");
console.log(perso);

class Per extends Persone {
  address: string;
  location: string;
  constructor(
    address: string,
    name: string,
    email: string,
    age: number,
    location: string
  ) {
    super(name, age, email);
    this.address = address;
    this.location = location;
  }
}

const P1 = new Per("dhaka", "ali", "jdhfjdf@g.com", 34, "Bangladesh");
console.log(P1);

//Getters and Setters
class Balance {
  private _balance: number = 0;
  get balance(): number {
    return this._balance;
  }
  set balance(amount: number) {
    this._balance = amount;
  }
}

const Balanc = new Balance();
console.log(`Current balance is :${Balanc.balance}`);
Balanc.balance = 50;
console.log(`After getter New balance is :${Balanc.balance}`);

// Interfaces
// Basic
interface Peaple {
  name: string;
  age: number;
  gender: string;
}
const Users: Peaple = {
  name: "ahmed",
  age: 32,
  gender: "Male",
};
console.log(Users);

// functional interfaces
interface Maths {
  (x: number, y: number): number;
}
const Add: Maths = (a, b) => a + b;
console.log(Add(3, 4));
const Sub: Maths = (c, d) => d - c;
console.log(Sub(4, 6));

//methods interfaces

interface Details {
  firstname: string;
  lastname: string;
  age: number;
  hello(): void;
}

const greet = (person: Details) => {
  console.log(
    `${person.firstname} ${person.lastname} and age is ${person.age}`
  );
  console.log(person.hello());
};

const ali: Details = {
  firstname: "ali",
  lastname: "ahmed",
  age: 34,
  hello() {
    console.log("hi everyone");
  },
};

greet(ali);

// extends
interface Movie {
  name: string;
  rating: number;
  movie(name: string, rating: number): string | number;
}

interface Movies extends Movie {
  review: string;
}
const movie1: Movies = {
  name: "harry potter",
  rating: 4.5,
  review: "great to watch.",
  movie(name: string, rating: number): string | number {
    return `${name} is ${this.review} and my rattin is :${rating}`;
  },
};
console.log(movie1.movie(movie1.name, movie1.rating));

// class interfaces

interface Student {
  name: string;
  roll: number;
  greet(): void;
}
class Student implements Student {
  constructor(name: string, roll: number) {
    this.name = name;
    this.roll = roll;
  }
  greet(): void {
    console.log(
      `hello everyone i am ${this.name} and my roll no is ${this.roll}`
    );
  }
}
const stu1 = new Student("sagor", 34);
stu1.greet();

// declaration mergin interfaces
interface Car {
  model: string;
  start(): void;
}
interface Car {
  brand: string;
  stop(): void;
}

const Mycare: Car = {
  model: "fi24",
  brand: "ferrari",
  start(): void {
    console.log("start the car.");
  },
  stop(): void {
    console.log("stop the car");
  },
};
Mycare.start();

// GENIRICS TYPES
function Unique<T>(item: T, defaultValue: T): [T, T] {
  return [item, defaultValue];
}

console.log(Unique<number>(4, 5));
console.log(Unique<string>("ertt", "jkgg"));
console.log(Unique<boolean>(true, false));

//
//
function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}

let ArrNum = [1, 2, 3, 4, 5, 6, 7, 8];
const evenResult = filterArray<number>(ArrNum, (num) => num % 2 === 0);
console.log(evenResult);
//
interface Fruit {
  name: string;
  color: string;
}

const fruitArray: Fruit[] = [
  { name: "apple", color: "red" },
  { name: "pineapple", color: "yellow" },
  { name: "cherry", color: "red" },
];

const redFruit = filterArray<Fruit>(
  fruitArray,
  (fruit) => fruit.color === "red"
);
console.log(redFruit);
// or
const yellowFruit = fruitArray.filter((fruit) => fruit.color === "yellow");
console.log(yellowFruit);

//
function Multigen<T, U, V>(a: T, b: U, c: V): [T, U, V] {
  return [a, b, c];
}
console.log(Multigen<string, number, boolean>("habib", 13, true));
//
interface responsData<T> {
  status: number;
  data: T;
}

const Data: responsData<{ name: string; age: number }> = {
  status: 200,
  data: {
    name: "https",
    age: 3,
  },
};
console.log(Data);
