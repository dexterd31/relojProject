const parrafo = document.getElementById('parrafo')
const reloj = document.getElementById('reloj')
const datos = new Date();

const dias = ['domingo','lunes','martes','miercoles','jueves','Viernes','sabado'];
const meses = ['enero', 'febero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'] 

let dia = datos.getDay();
let fecha = datos.getDate();
let mes = datos.getMonth();
let año = datos.getFullYear();


let franjaHoraria = {
    am: 'AM',
    pm: 'PM'
}
let esHora= '';
//operador ternario
datos.getHours() > 12? esHora= franjaHoraria.pm : esHora = franjaHoraria.am;

//templates
const template = `<div> ${dias[dia]} ${fecha} de ${meses[mes]} del ${año} </div>`;


//funciones
function addItem(element,fatherElement, template){
    const div = document.createElement(element);
    div.innerHTML = template;
    fatherElement.appendChild(div);
}

function time(){
    var hora = new Date();
    reloj.innerHTML = hora.toLocaleTimeString();
}
addItem('div',parrafo,template)   
setInterval(time, 1000);









