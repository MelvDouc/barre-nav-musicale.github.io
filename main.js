const liensNavbar = document.querySelectorAll('nav > ul > li');
const premierLienNavbar = document.querySelector('nav > ul > li:nth-child(1) > a');
const deuxiemeLienNavbar = document.querySelector('nav > ul > li:nth-child(2) > a');
const troisiemeLienNavbar = document.querySelector('nav > ul > li:nth-child(3) > a');
const quatriemeLienNavbar = document.querySelector('nav > ul > li:nth-child(4) > a');
const cinquiemeLienNavbar = document.querySelector('nav > ul > li:nth-child(5) > a');
const sixiemeLienNavbar = document.querySelector('nav > ul > li:nth-child(6) > a');
const septiemeLienNavbar = document.querySelector('nav > ul > li:nth-child(7) > a');
const fichiersAudio = document.querySelectorAll('#mes-audios > audio');

premierLienNavbar.addEventListener('mouseover', function() {
    document.querySelector('#mes-audios > audio:nth-child(1)').play();
})

// for(i = 0; i < liensNavbar.length; i++) {
//     liensNavbar[i].addEventListener('mouseover', function() {
//         fichiersAudio[i].play();
//     })
// }