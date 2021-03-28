// let firstName = 'mohamed';
// console.log(firstName);
// document.getElementById('grading').
// textContent = 'grading system';

// var userName  = prompt("please enter your name");
// console.log(userName);
//     var grade = prompt("please enter your grade");
// var gradeConvert = parseInt(grade);
    
//     if (grade >= 90 && grade  <= 100){
//            console.log("A")
//            document.getElementById('grading').textContent = 'name: ' + userName + ' ' + 'grade: A' ;
//        }
//        else if (grade  >= 85 && grade  < 90){
//              document.getElementById('grading').textContent = 'name: ' + userName + ' ' + 'grade: B' ;
//        }
//        else if (grade  >= 70 && grade < 85){
//         document.getElementById('grading').textContent = 'name: ' + userName + ' ' + 'grade: C' ;
//        }
//        else if (grade  >= 60 && grade < 70){
//         document.getElementById('grading').textContent = 'name: ' + userName + ' ' + 'grade: D' ;
//     }
//        else {
//         document.getElementById('grading').textContent = 'name: ' + userName + ' ' + 'grade: F' ;
//        }

// document.getElementById('grading').textContent = 'name: ' + Name  ;

//  for(let i = 0; i<= 10; i++){
//     if(i%2 !==0 ){
//         console.log(i);
//     }
// }

// let meaures = (uName , h , w) => {
//     console.log(uName);
//     return h + w;
// }
// console.log(meaures('osama',165,80));
// let fruits = ["orange", "apple","grapes"];
// for(i = 0 ; i<fruits.length ; i++){
//     console.log(fruits[i]);
// }
// let user ={
//     name: "fatma",
//     age:"30",
//     mark:"50"

// }
// let u = document.getElementById('text').value;
// user[u] = document.getElementById('value').value;
// console.log(objct);
students = [
    {
        name:'Ahmed',
        age:17,
        math: 15,
        eng:30,
        arabic:20,
        degrees:[15,30,20]
    },

    {
        name:'Omar',
        age:17,
        math: 18,
        eng:20,
        arabic:10,
        degrees:[17,18,10]
    },

    {
        name:'Zain',
        age:18,
        math: 15,
        eng:20,
        arabic:20,
        degrees:[15,20,20]
    },
]
students.forEach((student) => {


console.log(student.name);
// console.log(students[i].degrees);
// students[i].degrees.forEach((j) =>{


    // console.log(students[i].name + students.degrees[0] + 
    //     students.degrees[1] + students.degrees[2]);  
});

// for( var i = 0; i< students.length; i++){
//     console.log(students[i].name );
//     for(j = 0; j < students[degrees].length; i++){
//         console.log(students[j].name + students.degrees[0] + 
//             students.degrees[1] + students.degrees[2]); 
      
//     }

// }

const st = students.find(word => word.age == 17);

console.log(st);

const result = students.filter(word => word.age == 17);

console.log(result);