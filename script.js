'use strict';


console.log('This is a strict mode program');
// document.querySelectorAll('.dropdown-item').forEach(item => {
//   item.addEventListener('click', event => {
//     event.preventDefault();
//     const option = event.target.textContent;
//     console.log('Option selected:', option);

//   });
// });

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// // mobile menu variables
// const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
// const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
// const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
// const overlay = document.querySelector('[data-overlay]');

// for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

//   // mobile menu function
//   const mobileMenuCloseFunc = function () {
//     mobileMenu[i].classList.remove('active');
//     overlay.classList.remove('active');
//   }

//   mobileMenuOpenBtn[i].addEventListener('click', function () {
//     mobileMenu[i].classList.add('active');
//     overlay.classList.add('active');
//   });

//   mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
//   overlay.addEventListener('click', mobileMenuCloseFunc);

// }






const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}

//added
for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener('click', function () {
    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {
        accordion[i].classList.remove('active');
        accordionBtn[i].setAttribute('aria-expanded', 'false');
      }
    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');
    this.setAttribute('aria-expanded', !clickedBtn);
  });

  // Add role and aria-expanded attributes
  accordionBtn[i].setAttribute('role', 'button');
  accordionBtn[i].setAttribute('aria-expanded', 'false');
}













const images_opportunities = document.querySelectorAll('.img-responsive');
const icons = document.querySelectorAll("#icon-like");

images_opportunities.forEach((image) => {
  image.addEventListener("mouseover", function (e) {
    icons.forEach((item) => {
      item.classList.add("active");
    });
  });
});

images_opportunities.forEach((image) => {
  image.addEventListener("mouseout", function (e) {
    icons.forEach((item) => {
      item.classList.remove("active");
    });
  });
});




 // Kategorileri seçmek için radio button'larını seç
// const categoryRadios = document.querySelectorAll('input[name="category"]');

// Tüm ürünleri göstermek için ilk radio butonu seç
// categoryRadios[0].checked = true;

 // Tüm ürünleri göstermek için ilk kategoriye ait ürünleri gösterme butonunu seç
// document.querySelector('#show-all-btn').addEventListener('click', () => {
   // Tüm ürünleri gösterme radio butonunu seç
//   categoryRadios[0].checked = true;

  // Diğer kategorilerdeki ürünleri gizle
//   categoryRadios.forEach((radio, index) => {
//     if (index !== 0) {
//       document.querySelector(`#products-${index}`).style.display = 'none';
//     }
//   });
// });

// Her bir kategorideki ürünleri göstermek için butonu seç
// const categoryBtns = document.querySelectorAll('.category-btn');

// categoryBtns.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
    // Diğer kategorilerdeki ürünleri gizle
//     categoryRadios.forEach((radio, i) => {
//       if (i !== index) {
//         document.querySelector(`#products-${i}`).style.display = 'none';
//       }
//     });

     // Seçili kategorideki ürünleri göster
//     document.querySelector(`#products-${index}`).style.display = 'block';

   // Seçili kategorinin radio butonunu seç
//     categoryRadios[index].checked = true;
//   });
// });

// Noktaları ve popovers'ları seçin
const dots = document.querySelectorAll('.popover-dot');
const popovers = document.querySelectorAll('.popover-content');

// Her bir nokta için event listener ekle
dots.forEach((dot, index) => {
  dot.addEventListener('mouseenter', () => {
    // Popover'ı göster
    popovers[index].style.display = 'block';
  });

  dot.addEventListener('mouseleave', () => {
    // Popover'ı gizle
    popovers[index].style.display = 'none';
  });
});


const slides = document.querySelectorAll(".slide");
const slidesContainer = document.querySelector(".slides");
let currentSlideIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `scale(${i === index ? 1 : 1})`;
    slide.style.opacity = i === index ? 1 : 0.8;
  });
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  console.log(currentSlideIndex);
  showSlide(currentSlideIndex);
  slidesContainer.style.transform = `translateX(-${currentSlideIndex * 60}%)`;
}

function prevSlide() {
  console.log("merve")
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  console.log(currentSlideIndex);
  showSlide(currentSlideIndex);
  slidesContainer.style.transform = `translateX(-${currentSlideIndex * 60}%)`;
}


// Call this at the end or wrap in DOMContentLoaded event listener
showSlide(currentSlideIndex); // Call this at the end or wrap in DOMContentLoaded event listener

$(document).ready(function () {
  // Sayfa yüklendiğinde uyarı penceresi göster
  alert("Sayfa yüklendi!");
});

// Yükleme ekranını göster
$(document).ready(function () {
  // Yükleme ekranını göster
  $("#loading").show();

  // Sayfa yüklemesi tamamlandığında yükleme ekranını gizle
  $(window).on("load", function () {
    $("#loading").hide();
  });
});

// Sayfa içindeki bağlantıların açılmasını yeni bir sekmede aç
$(document).ready(function () {
  $("a[target='_blank']").attr("rel", "noopener noreferrer");
});


document.querySelectorAll('.add-btn').forEach(function (button) {
  button.addEventListener('click', function () {
    var currentCount = parseInt(document.getElementById('count-bag').innerText);
    document.getElementById('count-bag').innerText = currentCount + 1;
  });
});

// document.querySelectorAll('#icon-like').forEach(function (like) {
//   like.addEventListener('click', function () {
//     var currentCountheart = parseInt(document.getElementById('heart-bag').innerText);
//     document.getElementById('count-bag').innerText = currentCount + 1;
//   });
// });


document.querySelectorAll('.story-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('change')
    btn.nextElementSibling.classList.toggle('change')
  })
})
