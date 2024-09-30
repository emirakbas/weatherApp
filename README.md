# HAVA DURUMU UYGULAMASI

## Nasıl kurulur?
Uygulama `Google Chrome` odaklı geliştirilmiştir. En iyi uyumluluk için Chrome kullanınız.

Projeyi bilgisayarınıza indiriniz ve zip dosyasından çıkartınız.

Proje klasörünü ``Visual Studio Code`` veya kendi kod editörünüzle çalıştırınız.

VSCode kullanıyorsanız bir ``Live Preview`` eklentisine ihtiyacınız var. Bu eklentiyi kurunuz.

Sonrasında ``index.html`` üzerine sağ tıklayıp ``Open With Live Server`` seçeneğine tıklayınız. Artık proje varsayılan tarayıcınızda açılmış olacak.

Uygulamanın hava durumu sunucusuna istek gönderebilmesi için bir ``API`` anahtarına ihtiyacınız var.

``Open Weather`` üzerinde ücretsiz bir hesap oluşturun: https://openweathermap.org/

Daha sonra ``https://home.openweathermap.org/api_keys`` adresi üzerinden size verilen ``Deafult API`` anahtarını kullanabilir ya da yeni bir API anahtarı oluşturabilirsiniz.

API anahtarınızı aldıktan sonra proje klasöründeki ``script.js`` dosyasına girin ve 1. satırdaki tırnak içerisine ``API_KEY = 'YOUR_API_KEY'``kendi kodunuzu yazın. ``Örnek: API_KEY = '0000000'``

## Ekran Görüntüleri 
Uygulama Ana Ekranı:

<img src="https://github.com/emirakbas/weatherApp/blob/main/Readme%20Files/img1.png">

API anahtarınızı girmemeniz durumunda ya da yanlış şehir adı girmeniz durumunda alacağınız hata:

<img src="https://github.com/emirakbas/weatherApp/blob/main/Readme%20Files/img2.png">
