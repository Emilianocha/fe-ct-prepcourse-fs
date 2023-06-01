/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   var vString = string;
   return vString;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var vResultado = x + y;
   return vResultado;
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var vResultado1 = x - y;
   return vResultado1;
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   var vResultadodiv = x/y;
   return vResultadodiv;
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   var vResultadomul = x*y;
   return vResultadomul;
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   var vResultadoresto = x % y;
   return vResultadoresto;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
