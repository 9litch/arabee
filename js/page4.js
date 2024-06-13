const gameLink = document.querySelector('.x');
const gameFrame = document.getElementById('gameFrame');

gameLink.addEventListener('click', function(event) {
    event.preventDefault();
    gameFrame.src = this.href;
    gameFrame.style.display = 'block';
});

function toggleSubMenu(id) {
    var subMenu = document.getElementById(id);
    if (subMenu.style.display === 'block') {
        subMenu.style.display = 'none';
    } else {
        subMenu.style.display = 'block';
    }
  }
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrollPosition = window.scrollY;
    var pageHeight = document.body.scrollHeight - window.innerHeight;
    var percentage = scrollPosition / pageHeight;

    var startColor = [169, 38, 210,187, 76, 217, 205, 114, 230,223, 152, 243]; // اللون الأولي (أبيض)
    var endColor = [255, 255, 255]; // اللون النهائي (أزرق)


    var currentColor = startColor.map((channel, index) => {
        var difference = endColor[index] - channel;
        return Math.round(channel + difference * percentage);
    });

    navbar.style.backgroundColor = 'rgb(' + currentColor.join(',') + ')';
});