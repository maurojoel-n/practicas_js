/* let miNombre = prompt("Nombre");

let miApellido = prompt("Apellido");

let miEdad = prompt("Edad");

let miMascota = prompt("Nombre de su mascota");

let edadMascota = prompt("Edad de Mascota");

let nombreCompleto = miNombre + " " + miApellido;

let textoPresentación = "Hola, mi nombre es " + nombreCompleto + ", tengo " + miEdad + " años. Vivo con mi esposa Naara y mi perro " + miMascota + " de " + edadMascota + " años de edad.";

let sumaEdades = miEdad + edadMascota;

let restaEdades = miEdad - edadMascota;

let productoEdades = miEdad * edadMascota;

let divisionEdades = miEdad / edadMascota;

console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);
console.log(nombreCompleto);
console.log(textoPresentación);
console.log(sumaEdades);
console.log(restaEdades);
console.log(productoEdades);
console.log(divisionEdades);

let alumno = {
    nombre: "German",
    edad: 9,
    grado: "3er. grado",
    primaria: true,
    institucion: "EPB N° 26",
}

console.table(alumno)

console.log(alumno.nombre)
console.log(alumno.edad)
console.log(alumno.grado)
console.log(alumno.primaria)
console.log(alumno.institucion)

let mascota = {
    nombre: "Rafael",
    tipo_de_animal: "tortuga",
    color: "verde",
    peso: "700 gramos",
    clase: "reptil",
}

console.table(mascota)

console.log(mascota.nombre)
console.log(mascota.tipo_de_animal)
console.log(mascota.color)
console.log(mascota.peso)
console.log(mascota.clase) */

let frutas = ["banana", "manzana", "pera", "kiwi", "naranja"]

console.log(frutas)

console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

let numeros = ["10", "20", "30", "40", "50"]

console.log(numeros)

console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])



let familia = [
    papa = {
        nombre: "Victor",
        edad: 39,
    },
    
    mama = {
        Nombre: "Susana",
        edad: 37,
    },
    
    nene = {
        nombre: "Lucas",
        edad: 11,
    },
    
    bebe = {
        nombre: "Sebastian",
        edad: 2,    
    },
    
    mascotita = {
        nombre: "Luna",
        edad: 1,    
    },
]

console.log(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

let textoAleatorio = "El niño agarro una de las " + numeros[3] + " " + frutas[1] + "s que había en el árbol y se lo dió a " + familia[4]

console.log(textoAleatorio)

let edadA = prompt("Edad")
let edadB = prompt("Edad de mi compañero")



let edadesIguales = (edadA == edadB)
let soyMayor = (edadA > edadB)
let soyMenor = (edadA < edadB)
let soyMayorDeEdad = (edadA >= 18)

console.log("Soy mayor que mi compañero: " + soyMayor)
console.log("Soy menor que mi compañero: " + soyMenor)
console.log("Mi edad es igual que la de mi compañero: " + edadesIguales)
console.log("Soy mayor de edad: " + soyMayorDeEdad + ". Edad: " + edadA)

/* if (edadesIguales) {
    console.log("Mi edad es igual a la de mi compañero: true")
    console.log("Soy mayor que mi compañero: false")
    console.log("Mi menor que mi compañero: false")
}
else if (soyMenor) {
    console.log("Mi edad es igual a la de mi compañero: false")
    console.log("Soy mayor que mi compañero: false")
    console.log("Mi menor que mi compañero: true")
}
else {
    console.log("Mi edad es igual a la de mi compañero: false")
    console.log("Soy mayor que mi compañero: true")
    console.log("Mi menor que mi compañero: false")
} */

let edadPersona = prompt("¿Qué edad tienes?")
let altura = prompt("Altura en cm")

let puedeSubir = (edadPersona > 6 && altura >= 120)

console.log("Puede subir a la atracción: " + puedeSubir)

let pase = prompt("Complete con su tipo de pase: VIP, NORMAL o LIMITADO")
let saldo = prompt("Su saldo en pesos es: ")

let puedePasar = (pase = "VIP" && saldo >= 1000)

console.log("La persona puede pasar:" + puedePasar)
