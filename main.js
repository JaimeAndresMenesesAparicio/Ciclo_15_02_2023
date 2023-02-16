// Pedir un numero al usuario y ver 
// la tabala de multiplicar
// anteriores al numero digitado
// Ejemplo  Usuario = 3
// Tabla 1, Tabla 2, Tabla 3

let num = Number(prompt("Usuario ingrese un número para multiplicar"))
for (let a = 1; a<= num; a++ ){
    console.log(`Tabla del ${a}`);
for (let i = 1; i<= 10; i++){
    console.log(`${a} X ${i} = ${a*i}`);
}
}