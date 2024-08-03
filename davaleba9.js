function maxNumber(m, n) {
    if (m > n) {
        return m;
    } else if (n > m) {
        return n;
    } else {
        return 0;
    }
}
let result = maxNumber(5, 10);
//console.log(result);


function sumNumbers(a, b) {
    return a + b;
}
result = sumNumbers(5, 7);
//console.log(result);


function printName() {
    console.log("ანა მიქაძე");
}
//printName();

function fullName(firstname, lastname) {
    return firstname + " " + lastname;
}
let name = fullName("ანა", "მიქაძე");
//console.log(name);


function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
let factorialResult = factorial(5);
//console.log(factorialResult);


const student = {
    firstName: "ანა",
    lastName: "მიქაძე",
    age: 20,
    scores: [4, 7, 5, 3, 2],
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
//console.log(student.fullName())
function sumScores(scores) {
    return scores.reduce((sum, score) => sum + score, 0);
}
let scoresSum = sumScores(student.scores);
//console.log(scoresSum); 

console.log(`${student.firstName}, ${student.age}`);