<image src="image.png" alt="Descripción de la imagen">

- Este ejemplo refleja que TypeScript ya no se esta avisando de que a no es un numero, y no se va a sumar con el 3, porque son dos tipos incompatibles.


- (1 punto) Para cada uno de los valores del fichero code2.ts, ¿Qué tipo de datos
inferirá TypeScript? Explica por qué se ha inferido este tipo de datos.
    - a: number / El numero es 1042
    - b: string / es una cadena de texto
    - c: string / es una cadena de texto
    - d: boolean[] / es un array de booleans
    - e: {type: string} / es un objeto de tipo string
    - f: (number | boolean)[] / es un array con tipos que son number y boolean
    - g: number[] / es un array de tipo number
    - h: null / es de tipo null

- (1 punto) ¿Por qué se dispara cada uno de los errores del fichero code3.ts?
    - 1 Error: El primer error se debe a que const i: 3 = 3; es una constante y ademas solo puede contener el valor 3. Si yo cambio el const por el let y luego pongo esto i: number en vez de esto i: 3 funcionara.
    - 2 Error: El segundo error quiere decir que '5' que es un string no se puede
    añadir a un array de numbers, porque el array es de tipo number[].
    - 3 Error: Esto falla porque esta variable no tendra nunca valores validos, porque es de tipo never.
    - 4 Error: Este error ocurre porque la variable de l es de tipo unknown y no se puede realizar una multiplicacion de tipo unknown * 2.

- (0.5 puntos) ¿Cuál es la diferencia entre una clase y una interface en TypeScript?
    - Clase -> Es una plantilla para crear objetos, 
        Puede contener propiedades y métodos que definen el comportamiento de los objetos creados a partir de la clase.
        Se pueden crear instancias (objetos) de una clase utilizando el operador new.
        Y las clases pueden implementar interfaces.
    - Interfaces -> Una interfaz define una estructura para un tipo de datos, pero no contiene implementación.
        No se pueden crear instancias de interfaces directamente.
        Las interfaces se utilizan para garantizar que las clases, objetos o funciones cumplan con una estructura específica.