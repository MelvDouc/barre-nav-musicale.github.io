// [0] Variables

const liensNav = document.querySelectorAll('nav ul > li');
const fichiersAudio = document.getElementsByTagName('audio');
const arcEnCiel = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// [1] Couleurs des touches

for(let i = 0; i < liensNav.length; i++){
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
};

// [2] Lecture audio au survol (ne pas placer avant [1])

for(let i = 0; liensNav; i++){ /* Ne fonctionne pas avec ;i < liensNav; */
    liensNav[i].addEventListener('mousemove', () => {
        fichiersAudio[i].play();
    })
}