
fin = 0, precio=0;

for (i = 1; i >= fin ; i++){
    let num = Number(prompt("Usuario ingrese el precio del medicamento:"));
    precio = precio + num;
    let n = Number(prompt("Desea continuar: Si: 1/No: 0"));
    if(n == 1){i = 0 }
    else{break;}
}
console.log(`El descuento es: ${precio*0.10}`);
console.log(`El total a cancelar es: ${precio}`);
