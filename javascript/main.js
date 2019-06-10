

function shuffle(a) {
    var m = a.length,
        t, i;
    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = a[m];
        a[m] = a[i];
        a[i] = t;
    }

    return a;
}
var buttonList = document.getElementsByTagName("button");
buttonList[0].addEventListener("click", rewinder);
buttonList[1].addEventListener("click", rewinder);
function rewinder() {
    window.location.reload();
}
//create cards from the array and append

function createCard() {

    
    var cardArray = ['1', '2', '3', '4', '5', '6', '1', '2', '3', '4', '5', '6'];
    cardArray = shuffle(cardArray);
    var cardlist = document.createElement('div');
    cardlist.className = "cardlist";
//append   
    for (var i = 0; i < cardArray.length; i++) {
        var cardElement = document.createElement('div');
        cardlist.appendChild(cardElement);
        cardElement.className = "card nomatch";
        //and give background from the index
        cardElement.setAttribute("data-img", "./images/" + cardArray[i] + ".jpg");
        cardElement.addEventListener("click", cardClicked);
    }
    document.body.appendChild(cardlist);
}
 

function cardClicked(e) {
    var clickCard = e.target;
    clickCard.style.backgroundImage = "url('" + clickCard.getAttribute("data-img") + "')";
    var firstCard = document.getElementById("first-card");
    if (firstCard == null) {
        clickCard.id = "first-card";
    } else {
        firstCard.id = "";
        if (firstCard.getAttribute("data-img") == clickCard.getAttribute("data-img")) {
            firstCard.className = "card";
            clickCard.className = "card";
            if (document.getElementsByClassName("nomatch").length === 0) {
                document.getElementsByClassName("reset")[0].style.display = "inline-block";
            }
        } else {
            setTimeout(function () {
                clickCard.style.backgroundImage = "";
                firstCard.style.backgroundImage = "";
            }, 100)
        }
    }

}
window.onload = createCard();