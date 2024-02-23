// =============Toggle Icon Navbar Start Time: 51:44 ============= 
let manuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

manuIcon.onclick = () =>{
    // this two (bx-x and active class has been add dynamically by toggle method) 
    manuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// =============Toggle Icon Navbar End Time: 58:08 ============= 


// =================BREAKPOINT START Time: 46:42 =====================
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll('header nav a');
// array Details : https://www.youtube.com/watch?v=1mItbWuvrMw
// About Window Scroll : https://www.youtube.com/watch?v=LUrwLrE10To 
                        //  https://tr.javascript.info/size-and-scroll  
window.onscroll = () => {
    // all about window Scrolling : https://tr.javascript.info/size-and-scroll 
    sections.forEach(section =>{
        let window_scrollY = window.scrollY;
        // Learn 
        // https://chat.openai.com/c/360a3940-f241-4479-9e87-e05582344405 
        let offset_top = section.offsetTop - 150;
         // https://chat.openai.com/c/82e69f9c-7eda-459b-8b15-11b6576d8162 
        let offset_Height = section.offsetHeight;
        let id = section.getAttribute('id');
        // https://chat.openai.com/c/65095552-302a-40dd-94d1-778154bef6ab 
        if ( window_scrollY >= offset_top && window_scrollY < offset_top + offset_Height ){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        }; 
    });
    // =============Sticky Navbar Start Time: 50:00 ============= 
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
    
    // ====================Remove Toggle Icone and navbar when click navbar link (scroll)======
    manuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};
// =================BREAKPOINT End Time: 50:00 =====================

// ==============Scroll revel  Start Time: 1:00:20=============
// link : https://scrollrevealjs.org/ 


ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    display: 200
 });
 ScrollReveal().reveal('.home_contend, .heading', {orgin: 'top' });
 ScrollReveal().reveal('.home-image, .service-container,portfolio-box,contact form', {orgin: 'bottom' });

 ScrollReveal().reveal('.home_contend h1, .about-image', {orgin: 'left' });
 ScrollReveal().reveal('.home_contend p, .about-content', {orgin: 'right' });

 // ==============Type js=============
 const typed = new Typed('multiple-text', {
    strings: ['Frontend Developer','YouTuber','Blogger'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
 });
// ==============Scroll revel  Start Time: =============
