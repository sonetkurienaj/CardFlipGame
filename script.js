const cards = document.querySelectorAll(".card");
console.log(cards);

//variables
var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener("click", flip));

//flip
function flip() {
  console.log({
    isFlipped,
    firstCard,
    secondCard,
  });
  if (isFlipped && firstCard && secondCard) return;
  console.log("card fliped");

  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
    this.classList.add("flip");
  } else {
    if (this.id === firstCard.id) return;
    this.classList.add("flip");
    secondCard = this;
    checkIt();
  }
}

//checking
function checkIt() {
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
    card.id = index;
  });
}

shuffle();

//winning message displaying
//auto refreshing
// let refresh = window.setTimeout(function () {
//   window.location.reload();
// }, 2200);
