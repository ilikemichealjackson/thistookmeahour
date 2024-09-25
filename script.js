document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('embedInput');
    const button = document.getElementById('updateEmbed');
    const iframe = document.getElementById('embedFrame');
    const previewText = document.getElementById('previewText');

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
