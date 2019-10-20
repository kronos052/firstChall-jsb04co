/*  -----------------------------------------------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------------------


    * * * * * * * * * * * * * * * *
    *  1. C A L C U L A D O R A   *
    * * * * * * * * * * * * * * * *
    
    Crea un programa que permita realizar sumas, restas, multiplicaciones y divisiones. 

        - El programa debe recibir dos números (n1, n2).

        - Debe existir una variable que permita seleccionar de alguna forma el tipo de operación (suma, resta, multiplicación 
          o división).

        - Opcional: agrega una operación que permita elevar n1 a la potencia n2.*/

let n1 = parseInt(prompt('Dime un número'));
let n2 = parseInt(prompt('Dime otro número'));

function sumar(n1, n2) {
  return n1 + n2;
}
function restar(n1, n2) {
  return n1 - n2;
}
function dividir(n1, n2) {
  return n1 / n2;
}
function multiplicar(n1, n2) {
  return n1 * n2;
}
let potencia = Math.pow(n1, n2);

let tipoDeOperacion = parseInt(
  prompt(
    'escribe el número de la operación a realizar: 1 = sumar;2 = restar;3 = dividir;4 = multiplicar o 5 = potencia'
  )
);
let resultado = '';

if (tipoDeOperacion === 1) {
  resultado = sumar(n1, n2);
  alert('Resultado = ' + resultado);
} else if (tipoDeOperacion === 2) {
  resultado = restar(n1, n2);
  alert('Resultado = ' + resultado);
} else if (tipoDeOperacion === 3) {
  resultado = dividir(n1, n2);
  alert('Resultado = ' + resultado);
} else if (tipoDeOperacion === 4) {
  resultado = multiplicar(n1, n2);
  alert('Resultado = ' + resultado);
} else if (tipoDeOperacion === 5) {
  resultado = potencia;
  alert('Resultado = ' + resultado);
}

/*   -----------------------------------------------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------------------


    * * * * * * * * * * * * * * * * * * * * *
    *  2. D A D O   E L E C T R Ó N I C O   *
    * * * * * * * * * * * * * * * * * * * * *

    Simula el uso de un dado electrónico cuyos valores al azar irán del 1 al 6. 
    
        - Crea una variable "totalScore" en la que se irá almacenando la puntuación total tras cada una de las tiradas. 

        - Una vez alcanzados los 50 puntos el programa se detendrá y se mostrará un mensaje que indique el fin de la partida.

        - Debes mostrar por pantalla los distintos valores que nos devuelva el dado (números del 1 al 6) así como el valor de la
          variable "totalScore" tras cada una de las tiradas. */
let totalScore = 0;
for (let i = 0; i <= totalScore; i++) {
  // en este no consigo que el bucle pare cuando el total alcanza 50
  let number = Math.floor(Math.random() * 6) + 1;
  if (totalScore + number < 50) {
    totalScore += number;
  }

  console.log(number, totalScore);
}
alert('fin de la partida');

/*  -----------------------------------------------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------------------


    * * * * * * * * * * * * * * * * * * * * * * *
    *  3. R E G I S T R O   A C A D É M I C O   *
    * * * * * * * * * * * * * * * * * * * * * * *

    En este último ejercicio vamos a asignar una serie de alumnos a distintos profesores.

        - Crea la clase "Person" que incluya las propiedades "name", "age" y "gender", y un método que muestre por pantalla las
          propiedades de una persona. 

        - Crea la clase "Student". Esta clase debe heredar de "Person", y debe incluír, a mayores, las propiedades: "subject"
          y "group", y un método que permita registrar una lista de estudiantes.

        - Crea la clase "Teacher". Esta clase debe heredar de "Person", y debe incluír, a mayores, las propiedades: "subject", "group"
          y "studentsList". Esta última propiedad será un array. Crea un método que permita asignar alumnos al profesor. Esta asignación 
          se almacenará en "studentList". Solo los alumnos cuya propiedad "subject" y "group" coincida con la del profesor serán almace-
          nados en la propiedad "studentList" de cada profesor.
          
        - El objetivo final es mostrar por pantalla la lista de profesores junto a todas sus propiedades, entre ellas, los alu-
          mnos que tiene asignados.

        - Deben figurar un mínimo de tres profesores. 
                                    

    -----------------------------------------------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------------------------------

*/
const studentNames = ['Willy', 'Ivan', 'Ramiro', 'Pablo', 'David', 'Pedro', 'Lucía', 'Sara', 'Montse'];
const studentAges = [18, 18, 18, 18, 18, 19, 19, 19, 19];
const studentGenders = ['male', 'male', 'male', 'male', 'male', 'male', 'female', 'female', 'female'];
const studentSubject = ['Math', 'Science', 'Art', 'Math', 'Science', 'Art', 'Math', 'Science', 'Art'];
const studentGroup = [1, 2, 3, 1, 2, 3, 1, 2, 3];
const professorNames = ['Eduardo', 'Berto', 'María'];
const professorAges = [35, 42, 28];
const professorGenders = ['male', 'male', 'female'];
const professorSubject = ['Math', 'Science', 'Art'];
const professorGroup = [1, 2, 3];

class Person {
  name;
  age;
  gender;
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  static propierties(name, age, gender) {
    return new Person(name, age, gender);
  }
}
class Student extends Person {
  subject;
  group;
  constructor(name, age, gender, subject, group) {
    super(name, age, gender);
    this.subject = subject;
    this.group = group;
  }
  static aStudentsList(name, age, gender, subject, group) {
    return name.map((name, index) => {
      return new Student(name, age[index], gender[index], subject[index], group[index]);
    });
  }
}
class Teacher extends Person {
  subject;
  group;
  studentsList = [];
  constructor(name, age, gender, subject, group) {
    super(name, age, gender);
    this.subject = subject;
    this.group = group;
  }
  assignStudents(students) {
    for (const student of students) {
      //en este no consigo pushear a la studentsList
      if (student.subject === professor.subject) {
        studentsList.push(student);
      }
    }
    return this.studentsList;
  }

  static professorsList(name, age, gender, subject, group) {
    return name.map((name, index) => {
      return new Teacher(name, age[index], gender[index], subject[index], group[index]);
    });
  }
}

const propierties = Person.propierties();
console.log(propierties);
const students = Student.aStudentsList(studentNames, studentAges, studentGenders, studentSubject, studentGroup);
console.log(students);
const professors = Teacher.professorsList(
  professorNames,
  professorAges,
  professorGenders,
  professorSubject,
  professorGroup
);
console.log(professors);
