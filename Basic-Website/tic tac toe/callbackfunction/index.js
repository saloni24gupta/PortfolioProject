// const data = document.getElementById("students")
const students = [
    {name: "harry", student: "Javascript"},
    {name: "Rohan", student: "machine leadrning"},
    {name: "vishal", student: "machine leadrning"},
    {name: "samruddhi", student: "machine leadrning"}
]

console.log(students)

function entrollStudent(student, callback) {
    setTimeout(function() {
       students.push(student);
       callback();
       console.log("student has been enrolled")
    }, 3000)
}



function getStudents() {
    setTimeout(function() {
        let str = "";
        students.forEach((student) => {
          str+= `<li>${student.name }</li>`
        });
        document.getElementById("students").innerHTML = str;
        console.log("student data has been fetched")
    }, 1000)
}
let newStudent = {name: "kiran", subject: "deep learning"}
entrollStudent(newStudent, getStudents);



console.log("Ajav tutorial")

let fetchBTN = document.getElementById("fetchbtn");
let BackUPBtn = document.getElementById("backupbtn");
fetchBTN.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    const xhr = new XMLHttpRequest();
    // xhr.open('GET', "saloni.txt", true);
    xhr.open('GET', "https://jsonplaceholder.typicode.com/todos/1", true);
    xhr.onprogress = function() {
        console.log("on progress");
    }

    xhr.onload = function() {
        console.log(this.responseText)
    }
    xhr.send()
}