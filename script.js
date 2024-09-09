// Mouse arama kutusunun üzerine gelince çalışacaklar:
const searchBox = document.querySelector('input');
searchBox.addEventListener('mouseenter', function() {
    console.log('Mouse kutunun üzerine geldi!');
    searchBox.style.width = '40%';
});

searchBox.addEventListener('mouseleave', function() {
    console.log('Mouse kutunun üzerinden çıktı!');
    searchBox.style.width = '20%';
});
