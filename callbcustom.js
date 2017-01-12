// var myArr = [2, 10, 40, 11, 18, 90]
// myArr.sort();
// myArr.sort(function(a, b){
//   return a - b
// })

// console.log(myArr)

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


// var nameSort = students.map(function(nameGet){
//   var studentNames = nameGet.name;
//   return studentNames;
//   // console.log(studentNames)
// })
// console.log(nameSort)

// var ageSort = students.map(function(ageGet){
//   var studentAge = ageGet.age;
//   return studentAge;
//   // console.log(studentNames)
// })
// console.log(ageSort)

students.sort(function(a, b){
  let name1 = a.name.toUpperCase();
  let name2 = b.name.toUpperCase();
  if(name1<name2) {
    return - 1;
  }
  if (name1>name2) {
    return 1
  }
  return b.age-a.age
})


console.log(students)