// [0] Variables

const liensNav = document.querySelectorAll('nav ul > li');
const fichiersAudio = document.getElementsByTagName('audio');
const arcEnCiel = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// [1] Événements liens navbar
for(let i = 0; i < liensNav.length; i++){
    // [1-a] Couleurs des touches
    liensNav[i].addEventListener('mouseover', function() {
        this.style.backgroundColor = arcEnCiel[i];
        // Parce que "mi" en blanc se voit mal sur fond jaune :
        if(this.style.backgroundColor == 'yellow'){
            this.firstElementChild.style.webkitTextFillColor = '#000';
        } else {this.firstElementChild.style.webkitTextFillColor = '#fff'}
    });
    liensNav[i].addEventListener('mouseout', function() {
        this.style.backgroundColor = 'initial';
        this.firstElementChild.style.webkitTextFillColor = 'transparent'
    });
    // [1-b] Lecture audio au survol (ne pas placer avant [1-a])
    liensNav[i].addEventListener('mousemove', () => {
        fichiersAudio[i].play();
    })
};

/*
// Bizarrement, cette boucle fonctionne aussi avec la simple condition "liensNav" mais seulement pour cet événement.
for(let i = 0; liensNav; i++){
    liensNav[i].addEventListener('mousemove', () => {
        fichiersAudio[i].play();
    })
}
*/