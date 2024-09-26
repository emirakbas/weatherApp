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

document.querySelector('#desToDay').innerHTML = (`${nowDay} `);

document.querySelector('#d1').innerHTML = (`${dayTwo}`);
document.querySelector('#d2').innerHTML = (`${dayThree}`);
document.querySelector('#d3').innerHTML = (`${dayFour}`);
document.querySelector('#d4').innerHTML = (`${dayFive}`);
document.querySelector('#d5').innerHTML = (`${daySix}`);

// Haftanın günleri bitiş.

// Hava Açıklamaları (Weather Descriptions - wD):

const wD = {
    'clear sky': 'Hava Açık',
    'few clouds': 'Az Bulutlu',
    'scattered clouds': 'Parçalı Bulutlu',
    'broken clouds': 'Çok Bulutlu',
    'shower rain': 'Yer Yer Sağanak Yağışlı',
    'rain': 'Sağanak Yağışlı',
    'thunderstorm': 'Gök Gürültülü Fırtına',
    'snow': 'Karlı',
    'mist': 'Sisli',
    'overcast clouds': 'Hava Kapalı',
    "200" : "Hafif yağmurlu gök gürültülü fırtına",
    "201" : "Yağmurlu gök gürültülü fırtına",
    "202" : "Yoğun yağmurlu gök gürültülü fırtına",
    "210" : "Hafif gök gürültüsü",
    "211" : "Gök gürültüsü",
    "212" : "Yoğun gök gürültüsü",
    "221" : "Dağınık gök gürültüsü",
    "230" : "Hafif çiseli gök gürültüsü",
    "231" : "Çiseli gök gürültüsü",
    "232" : "Yoğun çiseli gök gürültüsü",
    "300" : "Hafif çiseli yağmur",
    "301" : "Çiseli yağmur",
    "302" : "Yoğun çiseli yağmur",
    "310" : "Hafif çiseli yağmur",
    "311" : "Çiseli yağmur",
    "312" : "Yoğun çiseli yağmur",
    "313" : "Yağmur ve çiselik",
    "314" : "Yoğun yağmur ve çiselik",
    "321" : "Yağmur çiseli",
    "500" : "Hafif yağmur",
    "501" : "Orta şiddette yağmur",
    "502" : "Yoğun yağmur",
    "503" : "Çok yoğun yağmur",
    "504" : "Aşırı yağmur",
    "511" : "Donmuş yağmur",
    "520" : "Hafif şiddette sağanak yağmur",
    "521" : "Sağanak yağmur",
    "522" : "Yoğun sağanak yağmur",
    "531" : "Dağınık sağanak yağmur",
    "600" : "Hafif kar",
    "601" : "Kar",
    "602" : "Yoğun kar",
    "611" : "Sleet (karla karışık yağmur)",
    "612" : "Hafif yağmur ve kar",
    "613" : "Yağmur ve kar",
    "615" : "Hafif yağmur ve kar",
    "616" : "Yağmur ve kar",
    "620" : "Hafif kar yağışı",
    "621" : "Kar yağışı",
    "622" : "Yoğun kar yağışı",
    "701" : "Sis",
    "711" : "Duman",
    "721" : "Haze (sisli hava)",
    "731" : "Toz",
    "741" : "Sis",
    "751" : "Kum",
    "761" : "Toz",
    "762" : "Volkanik kül",
    "771" : "Fırtına",
    "781" : "Tornado",
    "800" : "Açık hava",
    "801" : "Az bulutlu",
    "802" : "Parçalı bulutlu",
    "803" : "Çok bulutlu",
    "804" : "Kapalı",
};

// Hava ikonları:

const wI = {
    '01d': 'http://openweathermap.org/img/wn/01d@2x.png',
    '02d': 'http://openweathermap.org/img/wn/02d@2x.png',
    '03d': 'http://openweathermap.org/img/wn/03d@2x.png',
    '04d': 'http://openweathermap.org/img/wn/04d@2x.png',
    '09d': 'http://openweathermap.org/img/wn/09d@2x.png',
    '10d': 'http://openweathermap.org/img/wn/10d@2x.png',
    '11d': 'http://openweathermap.org/img/wn/11d@2x.png',
    '13d': 'http://openweathermap.org/img/wn/13d@2x.png',
    '50d': 'http://openweathermap.org/img/wn/50d@2x.png',
    '01n': 'http://openweathermap.org/img/wn/01n@2x.png',
    '02n': 'http://openweathermap.org/img/wn/02n@2x.png',
    '03n': 'http://openweathermap.org/img/wn/03n@2x.png',
    '04n': 'http://openweathermap.org/img/wn/04n@2x.png',
    '09n': 'http://openweathermap.org/img/wn/09n@2x.png',
    '10n': 'http://openweathermap.org/img/wn/10n@2x.png',
    '11n': 'http://openweathermap.org/img/wn/11n@2x.png',
    '13n': 'http://openweathermap.org/img/wn/13n@2x.png',
    '50n': 'http://openweathermap.org/img/wn/50n@2x.png'
};

const wIBig = {
    '01d': 'http://openweathermap.org/img/wn/01d@4x.png',
    '02d': 'http://openweathermap.org/img/wn/02d@4x.png',
    '03d': 'http://openweathermap.org/img/wn/03d@4x.png',
    '04d': 'http://openweathermap.org/img/wn/04d@4x.png',
    '09d': 'http://openweathermap.org/img/wn/09d@4x.png',
    '10d': 'http://openweathermap.org/img/wn/10d@4x.png',
    '11d': 'http://openweathermap.org/img/wn/11d@4x.png',
    '13d': 'http://openweathermap.org/img/wn/13d@4x.png',
    '50d': 'http://openweathermap.org/img/wn/50d@4x.png',
    '01n': 'http://openweathermap.org/img/wn/01n@4x.png',
    '02n': 'http://openweathermap.org/img/wn/02n@4x.png',
    '03n': 'http://openweathermap.org/img/wn/03n@4x.png',
    '04n': 'http://openweathermap.org/img/wn/04n@4x.png',
    '09n': 'http://openweathermap.org/img/wn/09n@4x.png',
    '10n': 'http://openweathermap.org/img/wn/10n@4x.png',
    '11n': 'http://openweathermap.org/img/wn/11n@4x.png',
    '13n': 'http://openweathermap.org/img/wn/13n@4x.png',
    '50n': 'http://openweathermap.org/img/wn/50n@4x.png'
};

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

        var averageTemperature = parseInt(data.list[0].main.temp - 273.15);
        console.log(` ${cityName.value} bugün ${averageTemperature} °C'dir.`);

        console.log(`Hava Tipi: ${data.list[0].weather[0].description}`);

        const wDID = data.list[0].weather[0].id;
        document.querySelector('#todayStatusDescription').innerHTML = wD[wDID];
        
        // Arayüz Hava İkonları:

        const wIID = data.list[0].weather[0].icon;
        document.querySelector('#todayIcon').src = wIBig[wIID];
        console.log(wIBig[wIID]);

        const wIID2 = data.list[8].weather[0].icon;
        document.querySelector('#si1').src = wI[wIID2];
        console.log(wI[wIID2]);

        const wIID3 = data.list[16].weather[0].icon;
        document.querySelector('#si2').src = wI[wIID3];

        const wIID4 = data.list[24].weather[0].icon;
        document.querySelector('#si3').src = wI[wIID4];

        const wIID5 = data.list[32].weather[0].icon;
        document.querySelector('#si4').src = wI[wIID5];

        const wIID6 = data.list[39].weather[0].icon;
        document.querySelector('#si5').src = wI[wIID6];
        console.log(wIID6);

        // Arayüz Tahmin Değerleri:
        document.querySelector('#todayTemp').innerHTML = (averageTemperature + '°C');
        document.querySelector('#todayHumidity').innerHTML = ('Nem %' + data.list[0].main.humidity);
        document.querySelector('#todayWind').innerHTML = ('Rüzgar ' + data.list[0].wind.speed + 'm/s');
        console.log(`Nem: %${data.list[0].main.humidity}`);

        document.querySelector('#sbtx1').innerHTML = (parseInt(data.list[8].main.temp - 273.15) + '°C');
        document.querySelector('#sbtx2').innerHTML = ('%' + data.list[8].main.humidity);
        document.querySelector('#sbtx3').innerHTML = (data.list[8].wind.speed + 'm/s');
        console.log(`Nem: %${data.list[8].main.humidity}`);

        document.querySelector('#sbtx4').innerHTML = (parseInt(data.list[16].main.temp - 273.15) + '°C');
        document.querySelector('#sbtx5').innerHTML = ('%' + data.list[16].main.humidity);
        document.querySelector('#sbtx6').innerHTML = (data.list[16].wind.speed + 'm/s');
        console.log(`Nem: %${data.list[16].main.humidity}`);

        document.querySelector('#sbtx7').innerHTML = (parseInt(data.list[24].main.temp - 273.15) + '°C');
        document.querySelector('#sbtx8').innerHTML = ('%' + data.list[24].main.humidity);
        document.querySelector('#sbtx9').innerHTML = (data.list[24].wind.speed + 'm/s');
        console.log(`Nem %${data.list[24].main.humidity}`);

        document.querySelector('#sbtx10').innerHTML = (parseInt(data.list[32].main.temp - 273.15) + '°C');
        document.querySelector('#sbtx11').innerHTML = ('%' + data.list[32].main.humidity);
        document.querySelector('#sbtx12').innerHTML = (data.list[32].wind.speed + 'm/s');
        console.log(`Nem: %${data.list[32].main.humidity}`);

        document.querySelector('#sbtx13').innerHTML = (parseInt(data.list[39].main.temp - 273.15) + '°C');
        document.querySelector('#sbtx14').innerHTML = ('%' + data.list[39].main.humidity);
        document.querySelector('#sbtx15').innerHTML = (data.list[39].wind.speed + 'm/s');
        console.log(`Nem: %${data.list[39].main.humidity}`);

        })
        
        .catch(error => {
            console.log(error);
        });
    }
});