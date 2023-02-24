window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})

//============================ CONTACT BUTTON ============================
const textbuttons= document.querySelectorAll('.contact-btn');
textbuttons.forEach(textbutton =>{
    let text=textbutton.querySelector('p');
    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('')
})

//============================ SWIPER JS ============================
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints:{
        599:{
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1023:{
            slidesPerView: 3,
            spaceBetween: 60,
        }
    }
  });

//============================ RESPONSIVE NAVBAR ============================
const nav = document.querySelector('.nav-links')  
const openbtn = document.querySelector('#nav-toggle-open')  
const closebtn = document.querySelector('#nav-toggle-close')  

const openNav = () =>{
    nav.style.display = 'flex';
    openbtn.style.display = 'none';
    closebtn.style.display = 'inline-block';
}
openbtn.addEventListener('click', openNav)

const closeNav = () =>{
    nav.style.display = 'none';
    openbtn.style.display = 'inline-block';
    closebtn.style.display = 'none';
}
closebtn.addEventListener('click', closeNav)

if(document.body.clientWidth < 1284){
    nav.querySelectorAll('li a').forEach(navLink =>{
        navLink.addEventListener('click', closeNav);
    })
}