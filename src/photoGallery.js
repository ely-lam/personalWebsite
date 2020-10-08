/* I would make a separate js folder for Javascript files so it's not included with css files. */

const numPic = 9;

function loadPic() {
    const target = document.querySelector("#slide-div");
    const selectorTarget = document.querySelector("#img-selector");

    for (let i = 1; i <= numPic; i++) {
        const picDiv = document.createElement("div");
        picDiv.setAttribute("class", "mySlides");
// It may be better to give the pictures specific names/descriptions rather than "Picture 1", but it's great that you have a caption at all
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
// When I inspect this element, it throws and error saying "Uncaught TypeError: Cannot read property 'style' of undefined"
// This doesn't seem to affect the look on your webpage, but it might mean that it's not producing the result you expected.
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
