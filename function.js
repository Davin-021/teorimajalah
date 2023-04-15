var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: "auto",
  keyboard: true,
  cssMode: false,
  initialSlide: 1,
  speed: 1500,
  longSwipesMs: 5000,
  spaceBetween: 0,
  breakpoints: {

      800: {
          spaceBetween: 200
      },
  },

  coverflowEffect: {
      rotate: 120,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: false,
      lazyPreloadPrevNext: 100,

  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: ".swiper-pagination",
  },
});


const popupBtn = document.getElementById("buka");
const popup = document.createElement("div");
const popupContent = document.createElement("div");
const tombol = document.createElement("div")
tombol.classList.add('tombol')
popup.classList.add("popup");
popupContent.classList.add("popup-content");

document.body.appendChild(popup);
popup.appendChild(popupContent);

popupBtn.addEventListener("click", function () {

    popup.style.display = "block";
    popupContent.innerHTML = ` <iframe allowfullscreen="true" class="w-full transition-all h-[100%] absolute " src="https://ilham12359.github.io/emajalah/"></iframe>`;
    popupContent.appendChild(tombol);
});
tombol.innerHTML='X'
tombol.addEventListener('click', function () {
    popup.style.display = "none";
})
let book = this.document.getElementById('flipbook')
var html = document.documentElement;
let i
let konten = document.getElementById('konten')
window.addEventListener('load', function () {
    
    document.body.classList.add('overflow-hidden')
    let book = this.document.getElementById('flipbook')
    let preloader = document.getElementById('loader')
    
    let konten1 = this.document.getElementsByClassName('tt')
    for (var i = 0; i < konten1.length; i++) {
        konten1[i].classList.add('freeze')
   
    }
    i=0
    let c = setTimeout(function () {
        preloader.classList.add('hidden')
        for (var i = 0; i < konten1.length; i++) {
            konten1[i].classList.remove('freeze')
            book.classList.remove('hidden')
        }
        html.classList.add('scroll-smooth')
        document.body.classList.remove('overflow-hidden')
        AOS.init()
        lert('Website dalam tahap pengembangan')
    }, 500)
    
});



let glass = document.getElementById('glass')
let showDev = document.getElementById('showDev')
let hideDev = document.getElementById('hideDev')
const inputGambar = document.getElementById('input-gambar');
const ubahGambar = document.getElementById('ubah-gambar');
const bgImage = document.getElementById('konten');
dev=document.getElementById('devMode')
// inputGambar.addEventListener('change', function() {
//   if (inputGambar.files && inputGambar.files[0]) {
//     const reader = new FileReader();
//     reader.onload = function(e) {
//       bgImage.style.backgroundImage = "url('" + e.target.result + "')";

//     }
//     reader.readAsDataURL(inputGambar.files[0]);
//   }
//   else{
//     alert('gambar kosong')
//   }
// });

function blur2(){
  let atur = prompt('Penulisan= bg-(colcor) / (tingkatan blur [10-100] ); contoh: bg-black/40')
  glass.classList.remove('bg-white/30')
  glass.classList.add(atur)
}

function showDev1(){
dev.classList.remove('hidden')
showDev.classList.add('hidden')
hideDev.classList.remove('hidden')
}

function hideDev1(){
  dev.classList.add('hidden')
  hideDev.classList.add('hidden')
  showDev.classList.remove('hidden')
}

function sec(){
  document.getElementById('sec').scrollIntoView({ behavior: 'smooth' });
}

$(document).ready(function(){
$('#contact').click(function(){
   $('#contentContact').toggleClass('hidden')
})
$('#closeContact').click(function(){
    $('#contentContact').addClass('hidden')
})
})




  


