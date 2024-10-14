document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('embedInput');
    const button = document.getElementById('updateEmbed');
    const iframe = document.querySelector('.embed-container iframe');
    const previewText = document.getElementById('previewText');
    const openHtmlButton = document.getElementById('openHtmlButton');
    const seriesButton = document.getElementById('seriesButton');

    function updatePreview() {
        const parameter = input.value || '[THIS IS THE VARIABLE]';
        const baseUrl = 'https://vidsrc.me/embed/movie?imdb=';
        const fullUrl = baseUrl + parameter;
        previewText.textContent = 'Current embed: ' + fullUrl;
    }

    function updateEmbed() {
        const parameter = input.value || '[THIS IS THE VARIABLE]';
        const baseUrl = 'https://vidsrc.me/embed/movie?imdb=';
        iframe.src = baseUrl + parameter;
    }

    function getRandomSeriesUrl() {
        const urls = [
            'https://frevrtv.vercel.app/',
            'https://frevrtv2.vercel.app/',
            'https://frevrtv3.vercel.app/'
        ];
        return urls[Math.floor(Math.random() * urls.length)];
    }

    openHtmlButton.addEventListener('click', function() {
        window.location.href = 'index (4).html';
    });

    seriesButton.addEventListener('click', function() {
        const randomUrl = getRandomSeriesUrl();
        window.location.href = randomUrl;
    });

    input.addEventListener('input', updatePreview);
    button.addEventListener('click', updateEmbed);

    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            updateEmbed();
        }
    });

    // Initialize with default values
    updatePreview();
    updateEmbed();
});
