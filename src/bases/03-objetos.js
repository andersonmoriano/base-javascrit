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
const persona2 = {...persona};
console.log(persona.nombre);
persona2.nombre = "Peter";
console.log(persona2.nombre);