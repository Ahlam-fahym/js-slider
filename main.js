// get slider item arry.from
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));
// get namber of slides
var slidesCount = sliderImages.length;
// // set current slide
var currentSlide = 1;
// slide number element
var slideNamberElement = document.getElementById("slide-namber");

var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;
// create  the main ul Element
var pagenitionElement = document.createElement("ul")
pagenitionElement.setAttribute ('id','pagenition-ul')

for( var i = 1; i<=slidesCount; i++){

    var pagenitionItem = document.createElement("li")
    pagenitionItem.setAttribute("data-index", i)
    pagenitionItem.appendChild(document.createTextNode(i))
    pagenitionElement.appendChild(pagenitionItem)
    
}
document.getElementById('indicators').appendChild(pagenitionElement)
// get the new ul
var bagenitionCreatedUl = document.getElementById('pagenition-ul')

var pagenitionsBullets = Array.from(document.querySelectorAll("#pagenition-ul li"));


theChecker();

function nextSlide () {
   if(nextButton.classList.contains('disabled')) {

   }else{
    currentSlide++;
    theChecker();
   }

}

function prevSlide () {
    if(prevButton.classList.contains('disabled')) {

    }else{
     currentSlide--;
     theChecker();
    }
}

function theChecker() {
    slideNamberElement.textContent = 'slide #' + (currentSlide) +' of ' + (slidesCount)

    removeAllActive();
// set active class on 
sliderImages[currentSlide-1].classList.add('active')
// set active class on current pagentionitem
bagenitionCreatedUl.children[currentSlide-1].classList.add('active')
// cheek if current slide is the first
if (currentSlide == 1) {
    // add disabled
prevButton.classList.add('disabled')
}
else{
     prevButton.classList.remove('disabled')
}

if (currentSlide == slidesCount) {

nextButton.classList.add('disabled')
}
else{
nextButton.classList.remove('disabled')
}
}

function removeAllActive(){
    sliderImages.forEach(function (img){
        img.classList.remove('active')  
      })
      pagenitionsBullets.forEach(function(bullet){
        bullet.classList.remove('active')
      })
}