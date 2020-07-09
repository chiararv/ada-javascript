// - Crear un programa que pida al usuario la distancia de su recorrido y mostrar en un mensaje cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte, definiendo de antemano distintas velocidades para distintos medios de transporte(p.ej.: a pie: 5 km / hora, bici 10km / hora, etc.).

let distancia = prompt(`Ingresa la distancia en km`);

let tiempoPie = distancia / 5;
let tiempoBici = distancia / 10;

alert(`El tiempo a pie es ${tiempoPie} horas y en bici es ${tiempoBici} horas`);
