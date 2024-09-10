// Mouse arama kutusunun üzerine gelince çalışacaklar:

const searchBox = document.querySelector('input');
const searchButton = document.querySelector('button');
searchBox.addEventListener('mouseenter', function() {
    console.log('Mouse kutunun üzerine geldi!');
    searchBox.style.width = '40%';
});

searchBox.addEventListener('mouseleave', function() {
    console.log('Mouse kutunun üzerinden çıktı!');
    searchBox.style.width = '20%';
});

searchButton.addEventListener('mouseenter', function() {
    console.log('Mouse butonun üzerine geldi!');
    searchBox.style.width = '40%';
});

searchButton.addEventListener('mouseleave', function() {
    console.log('Mouse butonun üzerinden çıktı!');
    searchBox.style.width = '20%';
});

// Mouse bitiş.

