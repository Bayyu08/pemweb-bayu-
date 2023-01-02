let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
   loop:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   grabCursor:true,
   loop:true,
   autoHeight:true,
   spaceBetween: 20,
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});

let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.packages .box-container .box')];
   for (var i = currentItem; i < currentItem + 3; i++){
      boxes[i].style.display = 'inline-block';
   };
   currentItem += 3;
   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}

function submitpesanan() {
   var name = document.getElementById("name").value;
   var email = document.getElementById("email").value;
   var phone = document.getElementById("phone").value;
   var address = document.getElementById("address").value;
   var destination = document.getElementById("destination").value;
   var guests = document.getElementById("guests").value;
   var arrivals = document.getElementById("arrivals").value;
   var leaving = document.getElementById("leaving").value;
   if(validation()) {
      document.getElementById("form_id").submit(); //form submission
      alert("Nama : " + name + "\nEmail : " + email +  "\nNomor Telepon : " + phone + 
      "\nAlamat : " + address + "\nDestinasi : " + destination + "\nJumlah Orang : " + guests + "\nKedatangan : " + arrivals + "\nKepergian : " + leaving
      + "\n\nPemesanan Berhasil");
   }
   
   }

function validation() {
   var name = document.getElementById("name").value;
   var email = document.getElementById("email").value;
   var phone = document.getElementById("phone").value;
   var address = document.getElementById("address").value;
   var destination = document.getElementById("destination").value;
   var guests = document.getElementById("guests").value;
   var arrivals = document.getElementById("arrivals").value;
   var leaving = document.getElementById("leaving").value;
   if (name ==='' || email ==='' || phone ==='' || address ==='' || destination ==='' || guests ==='' || arrivals ==='' || leaving ==='') {
      alert("Mohon isi semua kolom");
      return false;
   }
   else {
      return true;
   }
}