/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   var valor;

   if(x==y){
   valor = true;
      return valor;
   }
   else{
   valor = false;
      return valor;
   }
}

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:

   var longitudstr1 = str1.length;
   var longitudstr2 = str2.length;
   var resultado;
   if(longitudstr1===longitudstr2){
   resultado=true;
   return resultado;
   }
   else{
      resultado=false;
      return resultado;  
   }
}

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   var resultado;
   if (num<90){
      resultado = true;
      return resultado;
   }

   else{
      resultado = false;
      return resultado;
   }
}

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   var resultado;
   if(num>50){
     
      resultado = true;
      return resultado;
   }
   else{
      resultado = false;
      return resultado;
   }
}

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:

 var resultado;
 var retorno;
 resultado = num % 2;
 if(resultado==0){
retorno= true;
return retorno;
 }
 else{
   retorno= false;
   return retorno;
}

}

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   var resultado;
   var retorno;
   resultado = num % 2;
   if(resultado==0){
      retorno=false;
      return retorno;
   }
   else{
      retorno=true;
      return retorno;
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
