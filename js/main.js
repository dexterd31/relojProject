const parrafo = document.getElementById('parrafo')
const reloj = document.getElementById('reloj')
const datos = new Date();

const dias = ['domingo','lunes','martes','miercoles','jueves','Viernes','sabado'];
const meses = ['enero', 'febero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'] 

const dia = datos.getDay();
const fecha = datos.getDate();
const mes = datos.getMonth();
const año = datos.getFullYear();

const hora = datos.getHours();
const minuto = datos.getMinutes()
const segundo = datos.getSeconds()
const franjaHoraria = {
    am: 'AM',
    pm: 'PM'
}
let esHora= '';
//operador ternario
hora > 12? esHora= franjaHoraria.pm : esHora = franjaHoraria.am

//templates
const template = `<div> ${dias[dia]} ${fecha} de ${meses[mes]} del ${año} </div>`;
const template2 = `<div> ${hora}:${minuto}:${segundo} ${esHora} </div>`;

//funciones
function addItem(element,fatherElement, template){
    const div = document.createElement(element);
    div.innerHTML = template;
    fatherElement.appendChild(div)
}
function generateTime(){
    return reloj.textContent = `${hora}:${minuto}:${segundo} ${esHora}`;
}

//call functions
addItem('div',parrafo, template);
generateTime()





