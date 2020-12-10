function Smooth(destination, delaytime) {
  var destination = document.querySelector(destination);
  var result = destination.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var travel = result - startPosition;
  var startTime = null;

  function animation(CurrentTime) {
    if (startTime === null) startTime = CurrentTime;
    var elapsedTime = CurrentTime - startTime;
    var runanimation = ease(elapsedTime, startPosition, travel, delaytime);
    // console.log(runanimation);
    window.scrollTo(0, runanimation);
    if (elapsedTime < delaytime) requestAnimationFrame(animation);
  }
  function ease(t, b, c, d) {
    t /= d;
    t--;
    return c * Math.sqrt(1 - t * t) + b;
  }

  requestAnimationFrame(animation);
}

var finalPro = document.querySelector(".Main-one");

finalPro.addEventListener("click", function () {
  Smooth(".Main-two", 1000);
});

function Appearence() {
  var introText = document.querySelector(".Creden");
  var introfinal = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1;

  if (introfinal < screenPosition) {
    introText.classList.add("Creden-appear");
  }
}
window.addEventListener("scroll", Appearence);

const slider = document.querySelector(".cursol-slides");
const sliderText = document.querySelectorAll(".cursol-slides img");
const nextButton = document.querySelector(".nextButton");
const prevButton = document.querySelector(".prevButtn");

var counter = 0;

var size = sliderText[0].clientWidth;

let result = -size * counter;

slider.style.transform = `translateX(${result}px)`;

nextButton.addEventListener("click", () => {
  // if (counter >= sliderText.length - 1) {
  //   return;
  // }
  slider.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slider.style.transform = `translateX(${-size * counter}px)`;
});

prevButton.addEventListener("click", () => {
  slider.style.transition = "transform 0.9s ease-in-out";
  counter--;
  slider.style.transform = `translateX(${-size * counter}px)`;
});

slider.addEventListener("transitionend", () => {
  counter++;
  if (sliderText[counter].id === "jpgto") {
    counter = sliderText.length - 2;
    slider.style.transform = `translateX(${-size * counter}px)`;
  }
  if (sliderText[counter].id === "jpg") {
    slider.style.transition = "none";

    counter = sliderText.length - 2;

    slider.style.transform = `translateX(${-size * counter}px)`;
    console.log(counter);
    console.log(-size * counter);
    console.log(`sucess id is been found${sliderText[counter].id} `);
  }
});
