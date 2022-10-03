// HIGHER ORDER FUNCTIONS

let grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Cyrus', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Jeff', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

let isBoy = student => student.sex === "M";
let isGirl = student => student.sex === "F";

let getBoys = grades => (grades.filter(isBoy));
let getGirls = grades => (grades.filter(isGirl));

let average = grades => (grades.reduce((acc,curr) => (acc + curr.grade), 0) / grades.length);


//Highest Grade
let maxGrade = grades => (Math.max(...grades.map(student => student.grade)));
console.log(`Highest grade is ${maxGrade(grades)}`);
//Lowest Grade
let minGrade = grades => (Math.min(...grades.map(student => student.grade)));
console.log(`Lowest grade is ${minGrade(grades)}`)
//Highest Grade of Boys
let maxBoys = maxGrade(getBoys(grades));
console.log(`Max grade for boys is: ${maxBoys}`);
//Highest Grade of Girls
let maxGirls = maxGrade(getGirls(grades));
console.log(`Max grade for girls is: ${maxBoys}`);
//Lowest Grade of Boys
let lowBoys = minGrade(getBoys(grades));
console.log(`Lowest grade for boys is: ${lowBoys}`);
//Lowest Grade of Girls
let lowGirls = minGrade(getGirls(grades));
console.log(`Lowest grade for girls is: ${lowGirls}`);



// EXAMPLES:
users = [
    {
        name: "Harry",
        age: 17
    },
    {
        name: "Hermione",
        age: 18
    },
    {
        name: "Ron",
        age: 18
    }
];

// AS A NON-HOF
getName = (user) => user.name;
usernames = [];

for (let i=0; i < users.length; i++){
    const name = getName(users[i]);
    usernames.push(name);
}

console.log(usernames);

// OR AS A HIGHER ORDER FUNCTION:
usernames = users.map(getName);
console.log(usernames);


/// ANOTHER EXAMPL

// increment the number by another number
function incr(num, pad) {
    return num + pad
}

// decrement the number by another number
function decr(num,pad){
    return num - pad;
}

function smartOperation(data, operation, pad){
    // check if passed value(pad) is not a number
    // if so, handle it by assigning a zero value.
  //  pad = isNan(pad) ? 0 : pad;   <--- NOT WORKING

    let result = [];
    for (const elem of data){
        result.push(operation(elem, pad));
    }
    return result;
}

const data = [12,3,50];

//increment the array now:
const result = smartOperation(data, incr, 3);
console.log(result);
//decrement the array:
const result2 = smartOperation(data,decr, 10);
console.log(result2);