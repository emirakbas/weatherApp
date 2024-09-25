let API_KEY = 'YOUR_API_KEY';

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
console.log(`Bugün haftanın ${dayOfWeek + 1}. günüdür.`); // Haftanın kaçıncı günü olduğunu söyler.
days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
nowDay = days[dayOfWeek];
dayTwo = days[(dayOfWeek + 1)%7];
dayThree = days[(dayOfWeek + 2)%7];
dayFour = days[(dayOfWeek + 3)%7];
dayFive = days[(dayOfWeek + 4)%7];
daySix = days[(dayOfWeek + 5)%7];
console.log(`Bugün günlerden ${nowDay}.`); // Bugünün adını söyler.
// API ve beraberindeki fonksiyonlar:

document.querySelector('#desToDay').innerHTML = (`${nowDay} (Bugün)`);

document.querySelector('#d1').innerHTML = (`${dayTwo}`);
document.querySelector('#d2').innerHTML = (`${dayThree}`);
document.querySelector('#d3').innerHTML = (`${dayFour}`);
document.querySelector('#d4').innerHTML = (`${dayFive}`);
document.querySelector('#d5').innerHTML = (`${daySix}`);

// Haftanın günleri bitiş.

// Hava Açıklamaları (Weather Descriptions - wD):

wD = ['clear sky', 'few clouds', 'scattered clouds', 'broken clouds', 'shower rain', 'rain', 'thunderstorm', 'snow', 'mist', 'overcast clouds'];
wDTR = ['Hava Açık', 'Az Bulutlu', 'Parçalı Bulutlu', 'Çok Bulutlu', 'Yer Yer Sağanak Yağışlı', 'Sağanak Yağışlı', 'Gök Gürültülü Fırtına', 'Karlı', 'Sisli', 'Hava Kapalı'];

// Hava ikonları:

wI = ['01d', '02d', '03d', '04d', '09d', '10d', '11d', '13d', '50d'];


searchButton.addEventListener('click', function() {

document.querySelector('#cityNameTitle').innerHTML = searchBox.value;
const cityName = document.querySelector('input');

console.log(`Aranan şehir: ${cityName.value}`);

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
            
/*             data.list.forEach(listAll => {
            const timeMs = new Date(listAll.dt * 1000);
            const timeHour = timeMs.getUTCHours();
            for (i = 3; i > 0; timeHour + 3) {
                if (timeHour == 0) {
                    console.log('Gün sonu');
                }
                console.log(timeHour);
                return timeHour;s
            }      
        }); */

        var averageTemperature = parseInt(data.list[0].main.temp - 273.15 + 4);
        console.log(` ${cityName.value} bugün ${averageTemperature} °C'dir.`);

        console.log(data.list[0].weather[0].description);
        if (data.list[0].weather[0].description == wD[0]) {
            document.querySelector('#todayStatusDescription').innerHTML = wDTR[0];
        } else if (data.list[0].weather[0].description == wD[1]) { 
            document.querySelector('#todayStatusDescription').innerHTML = wDTR[1];
        } else if (data.list[0].weather[0].description == wD[2]) {
            document.querySelector('#todayStatusDescription').innerHTML = wDTR[2];
        } else if (data.list[0].weather[0].description == wD[3]) {
            document.querySelector('#todayStatusDescription').innerHTML = wDTR[3];
        } else if (data.list[0].weather[0].description == wD[4]) {
            document.querySelector('#todayStatusDescription').innerHTML = wDTR[4];
        } else if (data.list[0].weather[0].description == wD[5]) {
            document.querySelector('#todayStatusDescription').innerHTML = wDTR[5];
        } else if (data.list[0].weather[0].description == wD[6]) {
            document.querySelector('#todayStatusDescription').innerHTML = wDTR[6];
        } else if (data.list[0].weather[0].description == wD[7]) {
            document.querySelector('#todayStatusDescription').innerHTML = wDTR[7];
        } else if (data.list[0].weather[0].description == wD[8]) {
            document.querySelector('#todayStatusDescription').innerHTML = wDTR[8];
        } else if (data.list[0].weather[0].description == wD[9]) {
            document.querySelector('#todayStatusDescription').innerHTML = wDTR[9];
        } 
        else {
            document.querySelector('#todayStatusDescription').innerHTML = data.list[0].weather[0].description;
        }

        if (data.list[0].weather[0].icon == wI[0]) {
            document.querySelector('#todayIcon').src = 'https://openweathermap.org/img/wn/01d@4x.png';
        } else if (data.list[0].weather[0].icon == wI[1]) {
            document.querySelector('#todayIcon').src = 'https://openweathermap.org/img/wn/02d@2x.png';
        } else if (data.list[0].weather[0].icon == wI[2]) {
            document.querySelector('#todayIcon').src = 'http://openweathermap.org/img/wn/03d@2x.png';
        } else if (data.list[0].weather[0].icon == wI[3]) {
            document.querySelector('#todayIcon').src = 'http://openweathermap.org/img/wn/04d@2x.png';
        } else if (data.list[0].weather[0].icon == wI[4]) {
            document.querySelector('#todayIcon').src = 'http://openweathermap.org/img/wn/09d@2x.png';
        } else if (data.list[0].weather[0].icon == wI[5]) {
            document.querySelector('#todayIcon').src = 'http://openweathermap.org/img/wn/10d@2x.png';
        } else if (data.list[0].weather[0].icon == wI[6]) {
            document.querySelector('#todayIcon').src = 'http://openweathermap.org/img/wn/11d@2x.png';
        } else if (data.list[0].weather[0].icon == wI[7]) {
            document.querySelector('#todayIcon').src = 'http://
        })
        
        .catch(error => {
            console.log(error);
        });
    }
});


/* TODO: 
1- Commitlemeden önce API keyleri kaldır ve yerine {API_KEY} yaz. */