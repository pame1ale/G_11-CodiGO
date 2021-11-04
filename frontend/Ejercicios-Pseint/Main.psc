Algoritmo Main
	Definir nun1 Como Entero
	Definir nun2 Como Entero
	Definir nun3 Como Entero
	Definir nun4 Como Entero
	Definir base Como Entero
	Definir altura Como Entero
	Definir radio Como Entero
	Definir nombre Como Caracter
	Definir edad Como Entero
	Definir horas Como Entero
	Definir dineroH Como Entero
	Definir año Como Entero
	Suma()
	Promedio()
	AreaRectangulo()
	AreaTriangulo()
	AreaCirculo()
	Salario()
	MetrosPulgadas()
	DolaresSoles()
	CalculoEdad()
	MenorEdad()
	Bono()
	Salario10()
	Calificaciones()
	focos()
	
FinAlgoritmo

//Ejercicio 1 suma
Funcion Suma()
	Escribir "Ingrese dos numeros para la summa"
	Leer nun1 nun2
		Imprimir " La suma es :" nun1 + nun2
FinFuncion

//Ejercicio 2 promedio
Funcion Promedio()
	Escribir "Ingrese 4 numeros para hallar el promedio"
	Leer nun1 nun2 nun3 nun4
	Imprimir " El promdio es:" (nun1 + nun2 + nun3 + nun4)/4 
FinFuncion

//Ejercicio 3 area-rectangulo
Funcion AreaRectangulo()
	Escribir "Ingrese la base y la altura Rectangulo"
	Leer  base altura
	Imprimir " Area de un rectangulo :" base*altura
FinFuncion

//Ejercicio 4 area-triangulo
Funcion AreaTriangulo()
	Escribir "Ingrese la base y la altura Rectangulo"
	Leer  base altura
	Imprimir " Area de un triangulo:" (base*altura)/2
FinFuncion

//Ejercicio 5 area-circulo
Funcion AreaCirculo()
	Escribir "Ingrese el radio Circulo"
	Leer radio
	Imprimir " Area de un circulo:"  3.14*radio^2 
FinFuncion

//Ejercicio 6 sueldo
Funcion Salario()
	Escribir "Ingrese total de horas trabajadas semanalmente y su salario por hora"
	Leer horas dineroH
	Imprimir " Sueldo semanal:"  horas*dineroH 
FinFuncion

//Ejercicio 7 Metros a Pulgadas
Funcion MetrosPulgadas()
	Escribir "Ingrese la cantidad de metros"
	Leer nun1
	Imprimir " La cantidad de pulgadas seria:" 0.0254*nun1
FinFuncion

//Ejercicio 8 Dolares a Soles
Funcion DolaresSoles()
	Escribir "Ingrese la cantidad de dolares"
	Leer nun1
	Imprimir " La cantidad de Soles seria :"   nun1*4.01
FinFuncion

//Ejercicio 9 Calculo de la Edad
Funcion CalculoEdad()
	Escribir "Ingrese su año de nacimiento"
	Leer nun1
	Imprimir " Su edas actual es :"  2021-nun1
FinFuncion

//Ejercicio 10 menor edad
Funcion MenorEdad()
	Escribir "Ingrese su nombre y edad"
	Leer nombre edad
	si edad >= 18 Entonces
		Escribir  "Eres mayor de edad "  edad " " nombre
	SiNo
		Escribir  "Eres menor de edad "  edad " " nombre
	FinSi
FinFuncion

//Ejercicio 11 bono
Funcion Bono()
	Escribir " Ingrese los años de antiguedad "
	Leer año
	si año <= 5 Entonces
		Escribir "su bono es de : "  100*año
	SiNo
		Escribir  "su bono es de : " 1000*año
	FinSi
FinFuncion

//Ejercicio 12
Funcion Salario10()
    SalarioInicila = 1500
	SalarioTotal = SalarioInicila
	Escribir  "Salario Inicial = " SalarioInicila
	Para i<-1 Hasta 6 Con Paso 1 Hacer
		SalarioTotal = SalarioTotal + (1500*0.10)
		Escribir "salario" i " = " SalarioTotal
	Fin Para
FinFuncion

//Ejercicio 13
Funcion Calificaciones()
	Definir  n Como Entero
	Definir  nota1 Como Entero
	Definir  nota2 Como Entero
	Definir  nota3 Como Entero
	Definir  promd Como Real
	mayorPromedio =0.0
	
	Escribir "Ingrese la cantidad de alumnos"
	Leer n
		Para i<-1 Hasta n Con Paso 1 Hacer
			Escribir "Ingrese la 3 notas"
			Leer nota1 nota2 nota3
			promd = (nota1 + nota2 + nota3)/3
			Escribir " Promedio : " i "= " promd
			si promd > mayorPromedio
				mayorPromedio = promd
			FinSi
		Fin Para
		Escribir "El mayor promedio es : " mayorPromedio
FinFuncion

//Ejercicio 14 focos contabilizar
Funcion focos()
	Definir n Como Entero
	Definir color Como Caracter
	Escribir "Cantidad de focos"
	Leer n
	Escribir "Color de focos"
	verde = 0
	blanco = 0
	rojo = 0
	Para i<-1 Hasta n Con Paso 1 Hacer
		Leer color
		Segun color Hacer
			"verde":
				verde = verde + 1
			"blanco":
				blanco = blanco + 1
			"rojo":
				rojo = rojo + 1
		Fin Segun
	Fin Para
	Escribir "La cantidad de focos verdes es : " verde
	Escribir "La cantidad de focos blancos es : " blanco
	Escribir "La cantidad de focos rojos es : " rojo
FinFuncion


	