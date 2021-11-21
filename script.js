$('.slider-contents').slick({
    autoplay: true,
  autoplaySpeed: 3000,
  prevArrow:' <button class="btn prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow:'<button class="btn next"><i class="fas fa-chevron-right"></i></button>'
});

const backToTop = document.querySelector('.back-to-top')

window.addEventListener("scroll", () =>{
    const scrollheight = window.pageYOffset;
    if (scrollheight > 500) {
        backToTop.classList.add('show')
    }else{
        backToTop.classList.remove('show')
    }
})