let id: number = 5;
let company: string = "Hello";
let isPublished: boolean = true;
let x: any = 'hello';
x = true;

let age: number;

age = 30;

let ids: number[] = [1,2,3,4,5];
let arr: any[] = [1, true, 'hello'];

let person: [number, string, boolean] = [1, 'Brad', true]

let employee: [number, string][];

employee = [
    [1, "bob"],
    [2,'mary']
];

let pid: string | number = 1;

pid = "bebo";

enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

let cid: any = 1;

// let customerId = <number>cid
let customerId = cid as number

// Functions

function addNum(x: number, y: number): number {
    return x + y
}

console.log(addNum(1,2))

function log(message: string | number): void {
    console.log(message)
}

log(1);
log("bob");

interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}
