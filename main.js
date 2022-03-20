//change navbar styles on scroll

window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0);

})


//show/hide faq answer

const faqs= document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icons = faq.querySelector('.faq__icons i');
          if(icons.className === 'uil uil-plus') {
           icons.className = "uil uil-minus"
         } else {
             icons.className = "uil uil-plus"
        }
         })
}) 

//show/hide navbar on click

const menu=document.querySelector(".nav__menu");
const menuBtn=document.querySelector("#open-menu-btn");
const closeBtn=document.querySelector("#close-menu-btn");


menuBtn.addEventListener ('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


//close navbar on click

const closeNav=() => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)