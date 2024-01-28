let numero1=23;
let numero2=45;
 
 
//mostramos la suma
let suma=numero1+numero2;
 
document.write("La suma es: " +  suma +"<br>");
 
let resta=numero2-numero1;
 
document.write("La resta es: " + resta + "<br>");
 
 
let multiplicacion=numero2*numero1;
document.write("<strong>La multiplicacion es: </strong>" + multiplicacion + "<br>");
 
 
let division=numero2/numero1;
document.write("<em>La division es: </em>" + division +"<br>");
 
let modulo=numero2/numero1;
document.write("<u>El modulo es: </u>" + modulo);
 



// Pedir los valores por pantalla:
//-objeto window hace referencia ala ventana del navegador. 
// función parseInt(). Convierte en enteros los datos.
//prseFloat(). Conviernte en decimales. 
var ventana=parseInt(window.prompt("Introduce un valor: ")); // Lo que hacemos es mandarle un texto "Introduce un valor", la variable ventana guardará el dato quye voy a teclear en la ventana emergente

//Creamos una ventana emergente
window.alert("El dato que ha tecleado el usuario es: "+ ventana); //Aqui se guarda el dato introducido. 


//las ventanas emergentres y las alert, hasta que no se aceptan no se quitan... 

