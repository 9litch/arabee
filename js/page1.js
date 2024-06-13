document.querySelectorAll('.video-container img').forEach(img => {
    img.addEventListener('click', function() {
        const videoId = this.closest('.video-description').getAttribute('data-video');
        const iframe = document.getElementById('youtubeIframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=1`;

        document.querySelector('.popup').style.display = 'block';
        document.querySelector('.popup-overlay').style.display = 'block';
    });
});

document.querySelector('.popup-overlay').addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.popup-overlay').style.display = 'none';
    const iframe = document.getElementById('youtubeIframe');
    iframe.src = "";
});
document.querySelectorAll('.video-containerl img').forEach(img => {
    img.addEventListener('click', function() {
        const videoId = this.closest('.video-descriptionl').getAttribute('data-video');
        const iframe = document.getElementById('youtubeIframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=1`;

        document.querySelector('.popup').style.display = 'block';
        document.querySelector('.popup-overlay').style.display = 'block';
    });
});

document.querySelector('.popup-overlay').addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.popup-overlay').style.display = 'none';
    const iframe = document.getElementById('youtubeIframe');
    iframe.src = "";
});