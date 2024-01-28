// creamos un array con el nombre diasemana. Apuntes clase

let diasemana=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
let numeros=[1,2,3,4,5,6];

//Cada elemento ocupa dentro del array, una celda. Tiene una posición 



console.log(diasemana[0]); //Para imprimir primer elemento de mi array
console.log(numeros[0]); //Para imprimir primer elemento de mi array


//Me indica la longitud del array con el .lenght
window.alert("La longitud del array es: " +diasemana.length);

//Recorrer un array. Pintar la info que está dentro del array.
//Se el numero de celdas y se cual es la primera celda. Por eso uso FOR

for(let i=0; i<diasemana.length;i++){
    console.log(diasemana[i]); // Mostramos contenido total del array

}
//Importante, no meter dentro del bucle si no me sale varias veces
// Lo oredena alfabeticamente de la A-Z
console.log("Ejemplo sort con array: "+diasemana.sort()); 

// Me permite unir 2 o más array. 
//Juntar 2 arrays y mostrar el resultado. Hay que crear una 3ª variable
let arrayconcatenados=diasemana.concat(numeros); 

console.log("Ejemplo utilizando concat: "+arrayconcatenados);

console.log("Utilizando IndexOff: "+diasemana.indexOf("Jueves"));
// Buscar un caracter, si devuelve un "-1" significa que no lo contiene
//si lo contiene, devuelve su posición
//Como está el sort previamenter, me lo dirá en el orden que se encuentra pero ya ordenados. 

//----------------------------------------------------------------------------------
//Vamos a crear un array con 100 números
//Comprobamos que el array contiene el número 50

//Podemos crear un bucle for para cargar el array con los 100 numeros y no ir numero por numero

let datos =new Array();
for(let i=1; i<101; i++){
     
    datos[i-1]=i; // Como i =1 y la primera celda es 0 por eso ponemos -1.
    //Podemos inicializar la i en 0 y así no pondríamos el -1 
}
//Imprimimos el array con otro For
for(let j=0;j<datos.length;j++){
    console.log(datos[j]);
}

//Buscamos el 50

if(datos.indexOf(50)<0){ // Si me devuelve un valor <0, quiere decir que el numero no existe. 
    console.log("El numero 50 no existe "); 
}else{// si NO nos da un valor negativo, si existe.
    console.log("Existe")
}