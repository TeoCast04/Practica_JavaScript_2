// Arreglos
const numeros = [1, 2, 3, 4, 5];
const nombres = ['Ana', 'Pedro', 'Juan', 'Laura'];
const edades = [15, 22, 30, 45];
const precios = [100, 200, 300, 400];

// .reduce()
// Suma de todos los números
const sumaNumeros = numeros.reduce((acc, num) => acc + num, 0);
console.log('Suma de números:', sumaNumeros); // 15

// Concatenar nombres
const nombresConcatenados = nombres.reduce((acc, nombre) => acc + ' ' + nombre);
console.log('Nombres concatenados:', nombresConcatenados); // "Ana Pedro Juan Laura"

// Suma de todas las edades
const sumaEdades = edades.reduce((acc, edad) => acc + edad, 0);
console.log('Suma de edades:', sumaEdades); // 112

// Suma de todos los precios
const sumaPrecios = precios.reduce((acc, precio) => acc + precio, 0);
console.log('Suma de precios:', sumaPrecios); // 1000

// .filter()
// Números mayores a 3
const numerosMayoresA3 = numeros.filter(num => num > 3);
console.log('Números mayores a 3:', numerosMayoresA3); // [4, 5]

// Nombres que empiezan con 'J'
const nombresConJ = nombres.filter(nombre => nombre.startsWith('J'));
console.log('Nombres con J:', nombresConJ); // ["Juan"]

// Edades mayores a 18
const edadesAdultos = edades.filter(edad => edad > 18);
console.log('Edades mayores a 18:', edadesAdultos); // [22, 30, 45]

// Precios mayores a 200
const preciosAltos = precios.filter(precio => precio > 200);
console.log('Precios mayores a 200:', preciosAltos); // [300, 400]

// .map()
// Números al cuadrado
const numerosCuadrado = numeros.map(num => num * num);
console.log('Números al cuadrado:', numerosCuadrado); // [1, 4, 9, 16, 25]

// Nombres en mayúsculas
const nombresMayusculas = nombres.map(nombre => nombre.toUpperCase());
console.log('Nombres en mayúsculas:', nombresMayusculas); // ["ANA", "PEDRO", "JUAN", "LAURA"]

// Edades en 10 años
const edadesFuturas = edades.map(edad => edad + 10);
console.log('Edades en 10 años:', edadesFuturas); // [25, 32, 40, 55]

// Precios con descuento del 10%
const preciosDescuento = precios.map(precio => precio * 0.9);
console.log('Precios con descuento:', preciosDescuento); // [90, 180, 270, 360]

// .forEach()
// Imprimir cada número
console.log('Números:');
numeros.forEach(num => console.log(num)); // 1 2 3 4 5

// Imprimir cada nombre
console.log('Nombres:');
nombres.forEach(nombre => console.log(nombre)); // Ana Pedro Juan Laura

// Imprimir cada edad
console.log('Edades:');
edades.forEach(edad => console.log(edad)); // 15 22 30 45

// Imprimir cada precio
console.log('Precios:');
precios.forEach(precio => console.log(precio)); // 100 200 300 400

// Funciones tipo flecha

// Sin parámetros
const saludar = () => console.log('Hola');
saludar(); // Hola

// Un parámetro
const cuadrado = num => num * num;
console.log('Cuadrado de 5:', cuadrado(5)); // 25

// Dos parámetros
const sumar = (a, b) => a + b;
console.log('Suma de 3 y 7:', sumar(3, 7)); // 10

// Tres parámetros
const calcularPromedio = (a, b, c) => (a + b + c) / 3;
console.log('Promedio de 10, 20, 30:', calcularPromedio(10, 20, 30)); // 20

// Con un parámetro por defecto
const saludarConNombre = (nombre = 'Desconocido') => console.log(`Hola, ${nombre}`);
saludarConNombre(); // Hola, Desconocido
saludarConNombre('Carlos'); // Hola, Carlos
