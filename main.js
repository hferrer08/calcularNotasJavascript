let cantidadMaterias = prompt("Digite el numero de materias a calcular la nota, ten en cuenta son 3 cortes: primer corte vale 30%, segundo corte vale 30% y tercer corte vale 40%: ")
let i = 1
let notaFinal = 0

function calcularNota(){

let nombreMateria = prompt("Digite el nombre de su materia: ") 
let primerCorte = prompt("Digite su nota del primer corte: ")
let segundoCorte = prompt("Digite su nota del segundo corte: ")
let tercerCorte = prompt("Digite su nota del tercer corte: ")


notaFinal = primerCorte*0.3 + segundoCorte*0.3 + tercerCorte*0.4
return "La nota final de la materia "+nombreMateria+" es: "+notaFinal



}

if(cantidadMaterias>0){
 while(i<=cantidadMaterias){

alert(calcularNota())
i++

}
}else{
    alert("Valor invalido, debe ser mayor a 0")
}