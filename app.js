let kellog = {
    name: "Kellogs"
}

let granolaBar = {
    wrapper: true,
    brand: "Nature Valley",
    ingredients: ["Granola", "Sugar", "Chocolate Chips", "More sugar"],
    nutritionalFacts: false,
    delicious: true,
    devoured: true,
    manufacturer: {
        name: "Nature Valley",
        address: "4450 whatevs street, where ever",
        parentCompany: kellog
    }
}


// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

let numberToFind = 50


// for (let count = 1; count <= 10; count++) {
//     if (count % 2 == 0) {
//         console.log(count);
//         continue;
//     }
// }

// for (let count = 1; count <= 10; count++) {
//     if (!(count % 2)) {
//         console.log(count);
//         continue;
//     }
// }


// for (let count = 1; count <= 10; count++) {
//     if (count % 2 == 1) {
//         continue;
//     }
//     console.log(count);
// }

// for (let count = 2; count <= 10; count += 2) {
//     console.log(count);
// }



// let num = 1
// while (num <= 10) {
//     console.log(num);
//     num++
// }


// let i = 1

// do {
//     console.log(i);
//     i++
// } while (i <= 10)


let staff = [
    {
        name: "Dmoney",
        role: "Instructor"
    },
    {
        name: "Mark",
        role: "Instructor"
    },
    {
        name: "Tim",
        role: "Assistant Instructor"
    },
    {
        name: "Jake",
        role: "CEO"
    }
]


let word = "something"
let reversed = word.split("").reverse().join("")
console.log(word, reversed);

let reversedWord = ""
for (let i = word.length - 1; i > -1; i--) {
    reversedWord += word[i]
}
console.log(reversedWord);



staff.unshift({
    name: "Brittany",
    role: "Director of Recruiting and Marketing"
})


staff[1].name = "D$"

let instructors = staff.map(staffMember => staffMember)
console.log(instructors);
instructors[0].name = "Darryl"


for (let i = 0; i < staff.length; i++) {
    let staffMember = staff[i]
    console.log(`${staffMember.name} - ${staffMember.role}`);
}

console.log("forEach with lambda");

staff.forEach((staffMember, index) => console.log(`${index + 1}. ${staffMember.name} - ${staffMember.role}`))

staff.reverse()


console.log("forEach with standard function");
staff.forEach(function (staffMember, index) {
    console.log(`${index + 1}. ${staff[index].name} - ${staffMember.role}`)
})


let indexToRemove = staff.findIndex(staffMember => staffMember.name.toLowerCase() == "Tim".toLowerCase())
let foundIndex = -1
for (let i = 0; i < staff.length; i++) {
    let staffMember = staff[i]
    if (staffMember.name == "Tim") {
        foundIndex = i
    }
}
console.log(foundIndex);


if (indexToRemove > -1) {
    staff.splice(indexToRemove, 1)
    console.log("Removed!");
}
else {
    console.log("Couldnt find that one");
}


let mark = {
    name: "Mark",
    role: "Instructor"
}


for (let key in mark) {
    console.log(`${key} - ${mark[key]}`);

}

let keys = Object.keys(mark)

for (let i = 0; i < keys.length; i++) {
    let key = keys[i]
    let value = mark[key]
    console.log("Keys: ", key, value);
}

