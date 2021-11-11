function suma() {
  let a = Number(prompt('Ingrese el primer numero'));
  let b = Number(prompt('Ingrese el segundo numero'));
  return a + b;
}

function promedio() {
  let notas = [];
  let sum = 0;
  for (let i = 0; i < 4; i++) {
    let nota = Number(prompt('ingresa la nota'));
    notas[i] = nota;
    sum = sum + nota;
    console.log(`nota ${i} :`, nota);
  }
  let prom = sum / 4;
  return prom;
}

function areaRectangulo() {
  let base = prompt(' Ingrese Base del Rectangulo');
  let altura = prompt(' Ingrese Altura del Rectangulo');
  return base * altura;
}

function areTriangulo() {
  let base = prompt(' Ingrese Base del Trinagulo');
  let altura = prompt(' Ingrese Altura del Trinagulo');
  return (base * altura) / 2;
}

function areaCirculo() {
  let radio = prompt(' Ingrese el Radio del Cirulo');
  return 3.14 * radio ** 2;
}

function Salario() {
  let horas = Number(prompt('Horas trabajadas por hora semana'));
  let dinero = Number(prompt('ingresa ganancia por hora'));
  return horas * dinero;
}

function MetrosPulgadas() {
  let metros = Number(prompt('Ingrese los metros a convertir'));
  return 0.0254 * metros;
}

function DolaresSoles() {
  let dolares = Number(prompt('Ingrese los dolares a convertir'));
  return 4.01 * dolares;
}

function calcularEdad() {
  let año = Number(prompt('Ingrese su año de nacimiento'));
  return 2021 - año;
}

function menorEdad() {
  let nombre = prompt('Ingrese su nombre');
  let edad = Number(prompt('Ingrese su edad'));
  if (edad < 18) {
    return `Ere menor de edad :  ${edad} ,${nombre}`;
  } else {
    return `Ere mayor de edad :  ${edad} , ${nombre}`;
  }
}

function Bono() {
  let antiguedad = Number(prompt('Años de antiguedad'));
  if (antiguedad <= 5) {
    return 100*antiguedad;
  } else {
    return 1000*antiguedad;
  }
}

function Salrio10() {
  let salarioInicial = 1500;
  salrioTotal = salarioInicial;
  for (let i = 0; i < 6; i++) {
    salrioTotal = salrioTotal + +(1500 * 0.1);
    console.log(` Salario ${i} :`, salrioTotal);
  }
}

function Calificaciones() {
  let alumnos = Number(prompt('Ingrese la cantidad de alumnos'));
  let cantNotas = Number(prompt('Ingrese la cantidad de cantiNotas'));
  let promedioMayor =0;
 
  for (let j = 1; j <= alumnos; j++) {
  console.log(`Alumono ${j} :`);
    let sum = 0;
    let promedio = 0;
    for (let i = 0; i < cantNotas; i++) {
      let nota = Number(prompt('ingresa la nota'));
      sum = sum + nota;
    }
    promedio = sum / cantNotas;
    console.log(`Promedio ${j} : ${promedio}`);
    if (promedio > promedioMayor) {
      promedioMayor = promedio;
    }
  }
  return promedioMayor;
}


/*function Focos() {
  let n = Number(prompt(' Cantidad de focos'));
  let color;
  let verde = 0;
  let blanco = 0;
  let rojo = 0;
  for (let i = 0; i < n; i++) {
    switch (color) {
      case 'verde':
        verde++;
        break;
      case 'rojo':
        rojo++;
        break;
      case 'blanco':
        blanco++;
        break;
    }
    console.log(` focos verdes : ${verde}`);
    console.log(` focos rojos : ${rojo}`);
    console.log(` focos blancos : ${blanco}`);
  }
}*/

//console.log('la suma  es : ',suma());
//console.log('promedio es : ',promedio());
//console.log(' El area del Rectangulo es : ',areaRectangulo());
//console.log('El area del Trinagulo es : ',areTriangulo());
//console.log('El area del Cirulo es  : ',areaCirculo());
//console.log('El salario semanal es : ',Salario());
//console.log(' La pulgadas son   : ',MetrosPulgadas());
//console.log(' los soles es : ',DolaresSoles());
//console.log(' Su edad es    : ',calcularEdad());
//console.log(menorEdad());
//
//console.log(Salrio10());console.log('Su bono es : ',Bono());

console.log('El promedio mayor es  : ', Calificaciones());
//console.log(Focos());
