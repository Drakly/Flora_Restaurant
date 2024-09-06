function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Get the modal
var modal = document.getElementById("lightboxModal");

// Get the image and the modal content
var modalImg = document.getElementById("lightboxImage");
var captionText = document.getElementById("caption");

// Get all images in the menu
var images = document.getElementsByClassName("menu-img");

// Loop through all images and add click event to open the modal
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// The same lightbox functionality we used for the menu applies here as well
var modal = document.getElementById("lightboxModal");
var modalImg = document.getElementById("lightboxImage");
var captionText = document.getElementById("caption");
var images = document.getElementsByClassName("gallery-img");

for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
 // Get the modal
var modal = document.getElementById("lightboxModal");

// Get the image and the modal content
var modalImg = document.getElementById("lightboxImage");
var captionText = document.getElementById("caption");

// Get all images in the gallery
var images = document.getElementsByClassName("gallery-img");

// Initialize the current slide index
var currentSlide = 0;

// Open the modal when an image is clicked
for (var i = 0; i < images.length; i++) {
    (function(index) {
        images[index].onclick = function() {
            modal.style.display = "block";
            currentSlide = index;
            showSlide(currentSlide);
        }
    })(i);
}

// Close the modal when the close button is clicked
var closeModal = document.getElementsByClassName("close")[0];
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Function to show the current slide
function showSlide(index) {
    modalImg.src = images[index].src;
    captionText.innerHTML = images[index].alt;
}

// Function to change slides
function changeSlide(direction) {
    currentSlide += direction;

    // If we're at the end, loop back to the first slide
    if (currentSlide >= images.length) {
        currentSlide = 0;
    }

    // If we're at the beginning, loop back to the last slide
    if (currentSlide < 0) {
        currentSlide = images.length - 1;
    }

    showSlide(currentSlide);
}

// Get the modal
var modal = document.getElementById("lightboxModal");

// Get the image and the modal content
var modalImg = document.getElementById("lightboxImage");
var captionText = document.getElementById("caption");

// Get all images in both the menu and gallery
var menuImages = document.getElementsByClassName("menu-img");
var galleryImages = document.getElementsByClassName("gallery-img");

var currentSlide = 0;
var images = [];

// Combine menu and gallery images into a single array for simplicity
images = Array.from(menuImages).concat(Array.from(galleryImages));

// Open the modal when an image is clicked
for (let i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        currentSlide = i;
        showSlide(currentSlide);
    };
}

// Close the modal when the close button is clicked
var closeModal = document.getElementsByClassName("close")[0];
closeModal.onclick = function() {
    modal.style.display = "none";
};

// Function to show the current slide
function showSlide(index) {
    modalImg.src = images[index].src;
    captionText.innerHTML = images[index].alt;
}

// Function to change slides
function changeSlide(direction) {
    currentSlide += direction;

    // Loop back to the first image if we go past the last one
    if (currentSlide >= images.length) {
        currentSlide = 0;
    }

    // Loop back to the last image if we go before the first one
    if (currentSlide < 0) {
        currentSlide = images.length - 1;
    }

    showSlide(currentSlide);
}

// scripts.js
function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle('active');
}




