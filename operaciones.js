const fs = require('fs');

function registrar(nombre, edad, tipoAnimal, color, enfermedad) {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));

    const nuevaCita = {
        nombre,
        edad,
        tipoAnimal,
        color,
        enfermedad
    };

    citas.push(nuevaCita);

    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2), 'utf-8');
    console.log('Cita registrada con éxito.');
}

function leer() {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    console.log('Citas registradas:');
    console.log(citas);
}

module.exports = { registrar, leer };
