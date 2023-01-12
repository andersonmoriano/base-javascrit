let nombre = "";
let apellido = "Herrera";

if(nombre === "")
{
    console.log(apellido);
}
else
{
    console.log(nombre);
}

const result = nombre === '' ? apellido : nombre;
console.log(result);

const isActive = false;
const message = (isActive) ? 'Activo' : 'Inactivo';
console.log(message);