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

    var startColor = [255, 255, 255,255, 168, 246,255, 213, 254]; // اللون الأولي (أبيض)
    var endColor = [245,0,143]; // اللون النهائي (أزرق)

    var currentColor = startColor.map((channel, index) => {
        var difference = endColor[index] - channel;
        return Math.round(channel + difference * percentage);
    });

    navbar.style.backgroundColor = 'rgb(' + currentColor.join(',') + ')';
});