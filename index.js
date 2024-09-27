const { registrar, leer } = require('./operaciones');

const operacion = process.argv[2];

if (operacion === 'registrar') {
    const nombre = process.argv[3];
    const edad = process.argv[4];
    const tipoAnimal = process.argv[5];
    const color = process.argv[6];
    const enfermedad = process.argv[7];

    if (!nombre || !edad || !tipoAnimal || !color || !enfermedad) {
        console.log('Por favor proporciona todos los datos: nombre, edad, tipo de animal, color y enfermedad.');
    } else {
        registrar(nombre, edad, tipoAnimal, color, enfermedad);
    }
} else if (operacion === 'leer') {
    leer();
} else {
    console.log('Operación no reconocida. Usa "registrar" o "leer".');
}