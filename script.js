// Define the image directory path
const imageDir = './img';

// Function to generate a random collage of images
function generateCollage() {
  const images = [
    `${imageDir}/rosco.jpeg`,
    `${imageDir}/stella.jpg`,
    `${imageDir}/reef.jpg`,
    `${imageDir}/mak.jpeg`,
    `${imageDir}/makreef.jpeg`,
    `${imageDir}/lady.jpeg`,
    `${imageDir}/lola.jpg`,
    `${imageDir}/ziggy.jpg`
  ];

  const collageContainer = document.querySelector('.collage-container');

  // Randomly shuffle the images and select 4 images
  const shuffledImages = images.sort(() => 0.5 - Math.random()).slice(0, 4); // Select up to 4 images

  // Create image elements and append to the collage container
  shuffledImages.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.alt = "Dog image";
    imgElement.classList.add('collage-image'); // Add class for styling
    collageContainer.appendChild(imgElement);
  });
}

// Email function
function email() {
  window.location.href = "mailto:aidan@aidanlenahan.com";
}

// Navigation functions
function fb() {
  window.open("https://facebook.com/lenahanaidan", "_blank");
}

// Generate the collage on page load
window.onload = generateCollage;
