const cards = document.querySelectorAll(".card");
console.log(cards);

//variables
var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener("click", flip));

//flip
function flip() {
  console.log("card fliped");
  console.log(this);
  this.classList.add("flip");

  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);
    checkIt();
  }
}

//checking
function checkIt() {
  console.log(firstCard.dataset);
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
  console.log("checking....");
}
//success
function success() {
  console.log("Success both are matching");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);

  setTimeout(() => {
    firstCard.style.visibility = "hidden";
    secondCard.style.visibility = "hidden";
    resett();
  }, 500);
}
//fail
function fail() {
  //console.log("Failed flip again");

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resett();
  }, 1000);
  timeout();
  visible();
}
//reset
function resett() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}
//shuffle
function shuffle() {
  console.log("====================================");
  console.log("shuffling");
  console.log("====================================");
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
}

shuffle();

//winning message displaying
//auto refreshing
// let refresh = window.setTimeout(function () {
//   window.location.reload();
// }, 2200);

//countdown
var timeLeft = 5;
var elem = document.getElementById("timer");

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timerId);
    doSomething();
  } else {
    elem.innerHTML = timeLeft + "";
    timeLeft--;
  }
}

const timeout = () => {
  setTimeout(() => {
    const visible = document.classList.add("visible");
  }, 6000);
};
