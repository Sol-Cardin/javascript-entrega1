/**El simulador fue diseñado para reflejar un proceso nuevo que se implementó en mi trabajo como Project Manager, donde tengo que calcular el nivel de prioridad de los pedidos enviados por el cliente. Para esta entrega, simplifiqué la lógica a dos variables, aunque mi intención es expandirlo a cinco variables en el futuro.

Funcionamiento del simulador: El simulador funciona como una calculadora de prioridad basada en dos variables:
   *Tipo de Pedido: Determina la naturaleza del trabajo solicitado.
   *País: Indica el mercado desde el cual proviene el pedido.
Ambas variables tienen un valor base que se multiplica por el valor de la opción seleccionada para obtener un puntaje final.

Variables y opciones:
   *Tipo de Pedido (valor base: 4)
    Opciones:
     *Corrección: 4
     *Mantenimiento del Hero: 3
     *Mantenimiento del Producto: 2
     *Pregunta: 1
   *País (valor base: 2)
    Opciones:
     *México: 2
     *Chile: 1
     *Argentina: 0,5

La fórmula utilizada para calcular el puntaje es:
(Tipo de Pedido * Opción de Pedido) + (País * Opción de País)
Ejemplo:
Si el pedido es de "Mantenimiento del Hero" y proviene de "México":
Cálculo: (4×3)+(2×2)=12+4=16
Resultado: Puntaje 16.

El sistema clasifica los resultados en tres niveles:
   *L1 (Critical): Puntaje entre 14 y 20.
   *L2 (Medium): Puntaje entre 7 y 13.
   *L3 (Low): Puntaje menor o igual a 6.
*/

// SIMULADOR PARA CALCULAR EL NIVEL DE PRIORIDAD
// Valores base de las variables
const valorTipoPedido = 4;
const valorPais = 2;

// Opciones y valores -- Objeto Literal
const opcionesTipoPedido = {
    "Corrección": 4,
    "Mantenimiento del Hero": 3,
    "Mantenimiento del Producto": 2,
    "Pregunta": 1
};

const opcionesPais = {
    "Mexico": 2,
    "Chile": 1,
    "Argentina": 0.5
};

// Nota para el evaluador: Aunque este simulador no requiere un bucle para su funcionalidad principal,agregué ejemplos de bucles para demostrar su uso y aplicación en este proyecto.
console.log("Opciones disponibles para Tipo de Pedido:");
for (const tipo in opcionesTipoPedido) {
    console.log(`- ${tipo}: Valor ${opcionesTipoPedido[tipo]}`);
}

console.log("\nOpciones disponibles para País:");
for (const pais in opcionesPais) {
    console.log(`- ${pais}: Valor ${opcionesPais[pais]}`);
}

// Función para calcular el puntaje del tipo de pedido
function calcularPuntajeTipoPedido(tipoPedido) {
    return valorTipoPedido * opcionesTipoPedido[tipoPedido];
}

// Función para calcular el puntaje del país
function calcularPuntajePais(pais) {
    return valorPais * opcionesPais[pais];
}

// Función para calcular el puntaje total
function calcularPuntaje(tipoPedido, pais) {
    const puntajeTipoPedido = calcularPuntajeTipoPedido(tipoPedido);
    const puntajePais = calcularPuntajePais(pais);
    return puntajeTipoPedido + puntajePais;
}

// Función para determinar el nivel de prioridad, utilizando condicionales
function determinarNivelPrioridad(puntaje) {
    if (puntaje >= 14 && puntaje <= 20) {
        return "L1 - Critical";
    } else if (puntaje >= 7 && puntaje <= 13) {
        return "L2 - Medium";
    } else if (puntaje <= 6) {
        return "L3 - Low";
    }
}

// Prompt pidiéndole al usuario que introduzca el tipo de pedido y el país
const tipoPedidoSeleccionado = prompt("Ingresa el tipo de pedido (Corrección, Mantenimiento del Hero, Mantenimiento del Producto, Pregunta):");
const paisSeleccionado = prompt("Ingresa el país (Mexico, Chile, Argentina):");

// Salida de los cálculos y resultado de Nivel de Prioridad -- Condicionales
if (opcionesTipoPedido[tipoPedidoSeleccionado] && opcionesPais[paisSeleccionado]) {
    const puntaje = calcularPuntaje(tipoPedidoSeleccionado, paisSeleccionado);
    const nivelPrioridad = determinarNivelPrioridad(puntaje);
    console.log(`El puntaje calculado es: ${puntaje}`);
    console.log(`El nivel de prioridad es: ${nivelPrioridad}`);
} else {
    console.error("Alguna de las opciones ingresadas no es válida."); // Detiene la ejecución si los datos ingresados son inválidos
}