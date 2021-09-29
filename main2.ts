import { Student } from './student.js';

import { dataStudent } from './dataStudent.js';

let studentsTbody: HTMLElement = document.getElementById('students')!;

renderCoursesInTable(dataStudent);

function renderCoursesInTable(students: Student[]): void {
    console.log('Desplegando estudiante');
    students.forEach((student) => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${student.code}</td>
                             <td>${student.id}</td>
                             <td>${student.age}</td>
                             <td>${student.adress}</td>
                             <td>${student.number}</td>`;
      studentsTbody.appendChild(trElement);
    });
  }