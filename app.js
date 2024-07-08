class Persona {
    constructor(nombre, edad, ocupacion) {
        this.nombre = nombre;
        this.edad = edad;
        this.ocupacion = ocupacion;
    }
    obtenerNombre() {
        return this.nombre;
    }
    obtenerEdad() {
        return this.edad;
    }
    obtenerOcupacion() {
        return this.ocupacion;
    }
   
    modificarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    modificarEdad(nuevaEdad) {
        this.edad = nuevaEdad;
    }
    modificarOcupacion(nuevaOcupacion) {
        this.ocupacion = nuevaOcupacion;
    }
}

let persona1 = new Persona("Juan Perez", "30", "Psicologo");

let nombrePersona = persona1. obtenerNombre();
let edadPersona = persona1. obtenerEdad();
let ocupacionPersona = persona1. obtenerOcupacion();

alert("Nombre: " + nombrePersona + "\nEdad: " + edadPersona + "\nOcupación: " + ocupacionPersona);

let nuevoNombre = prompt("Ingrese un nuevo nombre:");
persona1. modificarNombre(nuevoNombre);

let nuevaEdad = prompt("Ingrese una nueva edad:");
persona1. modificarEdad(nuevaEdad);

let nuevaOcupacion = prompt("Ingrese una nueva ocupacion:");
persona1. modificarOcupacion(nuevaOcupacion);

alert("Nombre actualizado: " + persona1.obtenerNombre() + "\nEdad actualizada: " + persona1.obtenerEdad() + "\nOcupación actualizada: " + persona1.obtenerOcupacion());
