const premierLienNav = document.querySelector('nav ul > li:first-child');
const deuxiemeLienNav = document.querySelector('nav ul > li:nth-child(2)');
const troisiemeLienNav = document.querySelector('nav ul > li:nth-child(3)');
const quatriemeLienNav = document.querySelector('nav ul > li:nth-child(4)');
const cinquiemeLienNav = document.querySelector('nav ul > li:nth-child(5)');
const sixiemeLienNav = document.querySelector('nav ul > li:nth-child(6)');
const septiemeLienNav = document.querySelector('nav ul > li:nth-child(7)');

premierLienNav.addEventListener('mouseover', function() {
    document.querySelector('#c4').play();
});
deuxiemeLienNav.addEventListener('mouseover', function() {
    document.querySelector('#d4').play();
});
troisiemeLienNav.addEventListener('mouseover', function() {
    document.querySelector('#e4').play();
});
quatriemeLienNav.addEventListener('mouseover', function() {
    document.querySelector('#f4').play();
});
cinquiemeLienNav.addEventListener('mouseover', function() {
    document.querySelector('#g4').play();
});
sixiemeLienNav.addEventListener('mouseover', function() {
    document.querySelector('#a4').play();
});
septiemeLienNav.addEventListener('mouseover', function() {
    document.querySelector('#b4').play();
});

// Ne fonctionne pas avec une boucle

/*const liensNav = document.querySelectorAll('nav ul > li');
const fichiersAudio = document.getElementsByTagName('audio');

for(i = 0; i < fichiersAudio.length; i++){
    liensNav[i].onmouseover = () => {
        fichiersAudio[i].play();
    }
}*/

////

const elementsLi = document.getElementsByTagName('li');
const arcEnCiel = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

for(let i = 0; i < elementsLi.length; i++){
    elementsLi[i].addEventListener('mouseover', function() {
        // this.style.backgroundImage = 'initial';
        // this.style.webkitBackgroundClip = 'initial';
        this.style.backgroundColor = arcEnCiel[i];
        if(this.style.backgroundColor == 'yellow'){
            this.children[0].style.webkitTextFillColor = '#000';
        } else {this.children[0].style.webkitTextFillColor = '#fff'}
    });
    elementsLi[i].addEventListener('mouseout', function() {
        // this.style.backgroundImage = 'initial';
        // this.style.webkitBackgroundClip = 'text';
        this.style.backgroundColor = 'initial';
        this.children[0].style.webkitTextFillColor = 'transparent'
    });
};