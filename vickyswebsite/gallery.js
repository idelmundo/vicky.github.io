const images = document.querySelectorAll(".gallery__item img");
let imgIndex;
let imgSrc;

// get images src onclick
images.forEach((img, i) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        //run modal function
        imgModal(imgSrc);
        //index of the next image
        imgIndex = i;
    });
});

//creating the modal
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");

    // Add CSS styles to make the modal fullscreen
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = "9999";

    //add modal to the parent element 
    document.body.appendChild(modal);

    //adding image to modal
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    newImage.style.maxWidth = "90%";
    newImage.style.maxHeight = "90%";
    newImage.style.objectFit = "contain";
    newImage.style.cursor = "pointer";
    newImage.style.userSelect = "none";

    //creating the close button
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "10px";
    closeBtn.style.right = "10px";
    closeBtn.style.color = "#fff";
    closeBtn.style.fontSize = "24px";
    closeBtn.style.cursor = "pointer";

    //close function
    closeBtn.onclick = () => {
        modal.remove();
    };

    //next and previous buttons
    const nextBtn = document.createElement("i");
    nextBtn.setAttribute("class", "fas fa-angle-right nextBtn");
    nextBtn.style.position = "absolute";
    nextBtn.style.top = "50%";
    nextBtn.style.right = "10px";
    nextBtn.style.transform = "translateY(-50%)";
    nextBtn.style.color = "#fff";
    nextBtn.style.fontSize = "24px";
    nextBtn.style.cursor = "pointer";

    // change the src of current image to the src of next image
    nextBtn.onclick = () => {
        newImage.setAttribute("src", nextImg());
    };

    const prevBtn = document.createElement("i");
    prevBtn.setAttribute("class", "fas fa-angle-left prevBtn");
    prevBtn.style.position = "absolute";
    prevBtn.style.top = "50%";
    prevBtn.style.left = "10px";
    prevBtn.style.transform = "translateY(-50%)";
    prevBtn.style.color = "#fff";
    prevBtn.style.fontSize = "24px";
    prevBtn.style.cursor = "pointer";

    // change the src of current image to the src of pevious image
    prevBtn.onclick = () => {
        newImage.setAttribute("src", prevImg());
    };

    modal.appendChild(newImage);
    modal.appendChild(closeBtn);
    modal.appendChild(nextBtn);
    modal.appendChild(prevBtn);
};

//next image function
let nextImg = () => {
    imgIndex++;
    //check if it is the the last image
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    //return src of the new image
    return images[imgIndex].src;
};

//previous image function
let prevImg = () => {
    imgIndex--;
    console.log(imgIndex);
    //check if it is the first image
    if (imgIndex < 0) {
        imgIndex = images.length - 1;
    }
    //return src of previous image
    return images[imgIndex].src;
};



const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
