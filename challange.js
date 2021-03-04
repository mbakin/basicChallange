/**
 * Demos loops Sayi Tahmin Oyunu
 * 
 * 1-10 arasi rastgele sayi ureten bir sayiyi 
 * asagi yukari ifadeleri ile buldurmaya calisin
 * 
 * puanlama yapin
 * kullanici kac kerede bilecegini belirtebilsin
 */

var hak ,can;
var tahmin;
var sayac = 0;
can = Number(prompt('Kac kerede bileceksiniz ? '))
hak = can;

var sayi = Math.floor((Math.random()*10)+1);


console.log(sayi);


while (hak > 0){
  hak--;
  sayac++;
  tahmin = Number(prompt('Bir sayi giriniz'));

  if(sayi == tahmin){
    console.log(`Tebrikler ${sayac}. defada bildiniz`);
  
    console.log(`Puan : ${100 - (100/can)*(sayac-1)}`);

    break;
  }
  else if(sayi>tahmin){
    console.log("Yukari");
  }else{
    console.log("Asagi");
  }

  if(hak==0){
    console.log('Hakkiniz bitti. Sayi : ' + sayi);
  }
}