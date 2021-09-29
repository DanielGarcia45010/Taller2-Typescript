import { dataStudent } from './dataStudent.js';
var studentsTbody = document.getElementById('students');
renderCoursesInTable(dataStudent);
function renderCoursesInTable(students) {
    console.log('Desplegando estudiante');
    students.forEach(function (student) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + student.code + "</td>\n                             <td>" + student.id + "</td>\n                             <td>" + student.age + "</td>\n                             <td>" + student.adress + "</td>\n                             <td>" + student.number + "</td>";
        studentsTbody.appendChild(trElement);
    });
}
