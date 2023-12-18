// JavaScript

const loading = document.getElementById('loading');

function animation(){
  loading.classList.add('loaded');
}
//window.addEventListener('load', animation);

// 指定秒後に動作させる
window.setTimeout( animation, 2000 );

const map = L.map('map').setView([33.580889,130.419067], 17);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



const whiteIcon = L.icon({
    iconUrl: 'images/ico.png',
    shadowUrl: 'images/ico_shadow.png',
  
  iconSize:     [40, 40], // size of the icon
  shadowSize:   [40, 40], // size of the shadow
  iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
  shadowAnchor: [20, 40],  // the same for the shadow
  popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
  });    

  L.marker([33.5800002, 130.4148555], { icon: whiteIcon }).addTo(map).
bindPopup('こんにちは！');