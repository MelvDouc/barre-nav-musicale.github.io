const liensNavbar = document.querySelectorAll('nav > ul > li');
const fichiersAudio = document.querySelectorAll('#mes-audios > audio');

// premierLienNavbar.addEventListener('mouseover', function() {
//     document.querySelector('#mes-audios > audio:nth-child(1)').play();
// })

for(i = 0; i < liensNavbar.length; i++) {
    liensNavbar[i].addEventListener('mouseover', function() {
        fichiersAudio[i].play()
    })
}