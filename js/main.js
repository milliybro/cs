$('.owl-carousel').owlCarousel({
  center: true,
  items:3,
  loop:false,
  margin:10,
  nav: true,
  responsive:{
     0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      900: {
        items: 3,
      },
      1200: {
        items: 4,
      },
  }
});
// alert("Assalomu Aleykum \n'MilliyBro' ning tayyorlagan saytiga \nXush kelibsiz! ")

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
   'use strict'
 
   // Fetch all the forms we want to apply custom Bootstrap validation styles to
   const forms = document.querySelectorAll('.needs-validation')
 
   // Loop over them and prevent submission
   Array.from(forms).forEach(form => {
     form.addEventListener('submit', event => {
       if (!form.checkValidity()) {
         event.preventDefault()
         event.stopPropagation()
       }
 
       form.classList.add('was-validated')
     }, false)
   })
 })()

 AOS.init({
  duration: 2000,
});
