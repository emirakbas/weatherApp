
// Mouse arama kutusunun üzerine gelince çalışacaklar:

const searchBox = document.querySelector('input');
const searchButton = document.querySelector('button');

searchBox.addEventListener('mouseenter', function() {
    searchBox.style.width = '30em';
});

searchBox.addEventListener('mouseleave', function() {
    searchBox.style.width = '20em';
});

searchButton.addEventListener('mouseenter', function() {
    searchBox.style.width = '30em';
});

searchButton.addEventListener('mouseleave', function() {
    searchBox.style.width = '20em';
});

// Mouse bitiş.

// Haftanın günleri

const today = new Date();
const dayOfWeek = today.getDay() - 1;
console.log(dayOfWeek); // Haftanın kaçıncı günü olduğunu söyler.
days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
nowDay = days[dayOfWeek];
console.log(nowDay); // Bugünün adını söyler.
// API ve beraberindeki fonksiyonlar:

searchButton.addEventListener('click', function() {

    document.querySelector('#cityNameTitle').innerHTML = searchBox.value;
const cityName = document.querySelector('input');

console.log(cityName.value);

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName.value}&appid=${API_KEY}`)
.then(response => {
    console.log(response);
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
});
});

searchBox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        
    document.querySelector('#cityNameTitle').innerHTML = searchBox.value;
        const cityName = document.querySelector('input');

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName.value}&appid=${API_KEY}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data); // data bizim son kullanıcıya ulaşan verimiz.
            
            data.list.forEach(listAll => {
            const timeMs = new Date(listAll.dt * 1000);
            const timeHour = timeMs.getUTCHours();
            for (i = 3; i > 0; timeHour + 3) {
                if (timeHour == 0) {
                    console.log('Gün sonu');
                }
                console.log(timeHour);
                return timeHour;
            }      
        });
        })
        .catch(error => {
            console.log(error);
        });
    }
});

/* TODO: 
1- Commitlemeden önce API keyleri kaldır ve yerine {API_KEY} yaz. */