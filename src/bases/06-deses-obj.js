const persona = 
{
    nombre: 'Luis',
    apellido: 'Moriano',
    edad: 19,
    direccion:
    {
        ciudad: 'Abancay',
        lat: '23648468',
        lng: '34234243',
    },
};

console.log(persona.nombre);

const {nombre, apellido, edad} = persona;
console.log(nombre,apellido, edad);
