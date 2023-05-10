function recuperarValor(){
    let valorPantallaString = document.getElementById('pantallaResultado').value;
    
    return valorPantallaString;
}
function accionBoton1(){
    let laPantalla = document.getElementById ('pantallaResultado');
    let valorAnterioP = recuperarValor();
    let nuevoValorP = valorAnterioP+'1';
    laPantalla.value = nuevoValorP;
}
function accionBoton2(){
    let laPantalla = document.getElementById ('pantallaResultado');
    let valorAnterioP = recuperarValor();
    let nuevoValorP = valorAnterioP+'2';
    laPantalla.value = nuevoValorP;
}
function accionBoton3(){
    let laPantalla = document.getElementById ('pantallaResultado');
    let valorAnterioP = recuperarValor();
    let nuevoValorP = valorAnterioP+'3';
    laPantalla.value = nuevoValorP;
}
function accionBoton4(){
    let laPantalla = document.getElementById ('pantallaResultado');
    let valorAnterioP = recuperarValor();
    let nuevoValorP = valorAnterioP+'4';
    laPantalla.value = nuevoValorP;
}
function accionBoton5(){
    let laPantalla = document.getElementById ('pantallaResultado');
    let valorAnterioP = recuperarValor();
    let nuevoValorP = valorAnterioP+'5';
    laPantalla.value = nuevoValorP;
}
function accionBoton6(){
    let laPantalla = document.getElementById ('pantallaResultado');
    let valorAnterioP = recuperarValor();
    let nuevoValorP = valorAnterioP+'6';
    laPantalla.value = nuevoValorP;
}
function accionBoton7(){
    let laPantalla = document.getElementById ('pantallaResultado');
    let valorAnterioP = recuperarValor();
    let nuevoValorP = valorAnterioP+'7';
    laPantalla.value = nuevoValorP;
}
function accionBoton8(){
    let laPantalla = document.getElementById ('pantallaResultado');
    let valorAnterioP = recuperarValor();
    let nuevoValorP = valorAnterioP+'8';
    laPantalla.value = nuevoValorP;
}
function accionBoton9(){
    let laPantalla = document.getElementById ('pantallaResultado');
    let valorAnterioP = recuperarValor();
    let nuevoValorP = valorAnterioP+'9';
    laPantalla.value = nuevoValorP;
}
function accionBoton0(){
    let laPantalla = document.getElementById ('pantallaResultado');
    let valorAnterioP = recuperarValor();
    let nuevoValorP = valorAnterioP+'0';
    laPantalla.value = nuevoValorP;
}
function asignarEventos(){
     //variables
   let elBoton1 = document.getElementById('boton1');
   elBoton1.addEventListener('click', accionBoton1);

   let elBoton2 = document.getElementById('boton2');
   elBoton2.addEventListener('click', accionBoton2);

   let elBoton3 = document.getElementById('boton3');
   elBoton3.addEventListener('click', accionBoton3);

   let elBoton4 = document.getElementById('boton4');
   elBoton4.addEventListener('click', accionBoton4);

   let elBoton5 = document.getElementById('boton5');
   elBoton5.addEventListener('click', accionBoton5);

   let elBoton6 = document.getElementById('boton6');
   elBoton6.addEventListener('click', accionBoton6);

   let elBoton7 = document.getElementById('boton7');
   elBoton7.addEventListener('click', accionBoton7);

   let elBoton8 = document.getElementById('boton8');
   elBoton8.addEventListener('click', accionBoton8);

   let elBoton9 = document.getElementById('boton9');
   elBoton9.addEventListener('click', accionBoton9);

   let elBoton0 = document.getElementById('boton0');
   elBoton0.addEventListener('click', accionBoton0);
}