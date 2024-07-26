for(let number=2; number<8; number++){
    console.log(number)
}

for(let number=5; number<35; number+=4){
    console.log(number)
}

let product = 1
for(let number=3; number<8; number++){
    product = product * number
}
console.log(product)

let person ={
    firstname: "ana",
    lastname: "mikadze",
    age:30
}
console.log(person.firstname +" "+ person.lastname)
for (const key in person){
    console.log(key)
}


let fruits =["apple", "banana", "orange"]
for(let index=0; index < fruits.length; index++) {
    const element = fruits[index]
console.log(element)}
fruits.unshift("grape")
fruits.push("pineapple")
console.log(fruits)

let sum =0
for( let number=1;number<34; number++){
    sum= sum + number
}
console.log(sum)
