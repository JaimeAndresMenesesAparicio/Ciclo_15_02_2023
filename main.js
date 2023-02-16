
let pf, nota=0;

for (i = 1; i <= 3; i++){
    let num = Number(prompt(`Ingrese la nota del parcial ${i}:`));
    nota = nota + num;
}
pf=((nota/3)*.55);
let ef = (Number(prompt("Ingrese la nota del exámen final:"))*.3);
let tf = (Number(prompt("Ingrese la nota del trabajo final:"))*.15);
alert (`El promedio final de la materia es: ${pf+ef+tf}`);
