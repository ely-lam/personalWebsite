const numPic = 9;

function loadPic() {
    const target = document.querySelector("#slide-div");
    const selectorTarget = document.querySelector("#img-selector");

    for (let i = 1; i <= numPic; i++) {
        const picDiv = document.createElement("div");
        picDiv.setAttribute("class", "mySlides");
        picDiv.innerHTML = "<div class='number-text'>" + i.toString() + "</div>" +
            "<img src='./image/" + i.toString() + ".jpeg' style='width:100%' alt='picture " + i.toString() + "'/>" +
            "<div class='text'>Picture " + i.toString() + "</div>";
        target.appendChild(picDiv);

        const selector = document.createElement("span");
        selector.setAttribute("class", "dot");
        selector.setAttribute("onclick", "currentSlide(" + i.toString() + ")");
        selectorTarget.appendChild(selector);
    }


}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}