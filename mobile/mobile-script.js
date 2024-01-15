//will generate random number 1-5
let currentIndex = Math.floor(Math.random() * 7);
const slides = document.querySelectorAll('.slide');
const carouselMessage = document.getElementById('carousel-message');

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  slides[index].style.display = 'block';
  updateCarouselMessage(index);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function email() {
  window.location.href = "mailto:aidan@aidanlenahan.com";
}

function homep() {
  window.open("https://aidanlenahan.com", "_blank");
}

function dogpage() {
  window.open("https://aidanlenahan.com/dog-walking-for-the-new-jersey-peninsula", "_blank");
}

function fb() {
  window.open("https://facebook.com/lenahanaidan", "_blank");
}

function clock() {
  window.open("https://aidanlenahan.github.io/clock", "_blank");
}

function dvd() {
  window.open("https://aidanlenahan.github.io/dvd", "_blank");
}

function github() {
  window.open("https://github.com/aidanlenahan", "_blank");
}
function back() {
  window.location.href = "../index.html";
}
function updateCarouselMessage(index) {
  switch (index) {
    case 0:
      carouselMessage.innerHTML = "This is <em>Rosco!</em> The picture was taken when we was only a couple weeks old.";
      break;
    case 1:
      carouselMessage.innerHTML = "This is <em>Stella!</em> Very adventurous pup!";
      break;
    case 2:
      carouselMessage.innerHTML = "This is <em>Reef!</em> Reef loves running around and is a very happy dog!";
      break;
    case 3:
      carouselMessage.innerHTML = "<em>Mak!</em> Loves to dig, as you can see here. He goes through a lot of frisbees!";
      break;
    case 4:
      carouselMessage.innerHTML = "Double trouble. <em>Mak</em> and <em>Reef!</em>";
      break;
    case 5:
      carouselMessage.innerHTML = "This is <em>Lady,</em> which was the first dog I ever walked. Very sweet girl!";
      break;
    case 6:
      carouselMessage.innerHTML = "This is my dog, <em>Lola.</em> She gets very jealous when she smells dogs on me!";
      break;
    case 7:
      carouselMessage.innerHTML = "This <em>Ziggy!</em> We tend to go for late night walks.";
      break;
    default:
      carouselMessage.innerHTML = "<b>No dog displayed! Try reloading the page.<b/>";
  }
}


// Initial setup 
showSlide(currentIndex);

