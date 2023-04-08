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
    popupContent.innerHTML = ` <iframe allowfullscreen="true" class="w-full transition-all h-[90%] absolute mt-5" src="https://ilham12359.github.io/emajalah/"></iframe>`;
    popupContent.appendChild(tombol);
});
tombol.addEventListener('click', function () {
    popup.style.display = "none";
})

var html = document.documentElement;



let i
window.addEventListener('load', function () {
    
    document.body.classList.add('overflow-hidden')
    let book = this.document.getElementById('flipbook')
    let preloader = document.getElementById('loader')
    let konten = document.getElementById('konten')
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
    }, 1000)
    
});

