/*eslint-env browser*/
/*eslint no-redeclare: */
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
    splitLetters(words[i]);
}

function changeWord() {
    var cw = wordArray[currentWord];
    var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
    for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
    }

    for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
    }

    currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
    setTimeout(function () {
        cw[i].className = 'letter out';
    }, i * 80);
}

function animateLetterIn(nw, i) {
    setTimeout(function () {
        nw[i].className = 'letter in';
    }, 340 + (i * 80));
}

function splitLetters(word) {
    var content = word.innerHTML;
    word.innerHTML = '';
    var letters = [];
    for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        if (content.charAt(i) === " ") {
            letter.innerHTML = '&nbsp;';
        }
        if (content.charAt(i) === "&") {
            letter.innerHTML = '&amp;';
        }
        word.appendChild(letter);
        letters.push(letter);

    }

    wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);


//Stciky Navigation Bar

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction();
    scrollFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var trigerOffset = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > trigerOffset) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}


// Floating button
// When the user scrolls down 20px from the top of the document, show the button

var servicesPosition = document.getElementById("servicesSection");

function scrollFunction() {
    if (document.body.scrollTop >= servicesPosition.offsetTop || document.documentElement.scrollTop >= servicesPosition.offsetTop) {
        document.getElementById("myBtn").style.display = "block";
        document.getElementById("myBtn").value = "Why Us?";
        document.getElementById("myBtn").onclick = "scrollToWhyUs()";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function scrollToWhyUs() {
    var whyUsOffSetTop = document.getElementById("servicesSection").offsetTop;
    window.scroll(0, whyUsOffSetTop);
}

function modifyPrice(amount, checkState, elementId) {
    var priceElement = document.getElementById(elementId);
    var currentTotalStr = priceElement.innerHTML;
    var currentTotalNum = parseInt(currentTotalStr.replace(/[^0-9\.]/g, ''), 10);
    var modifiedTotalNum = checkState.checked ? currentTotalNum + amount : currentTotalNum - amount;
    var modifiedTotalStr = "Total Cost : ₹ ".concat(modifiedTotalNum, "\\-");
    priceElement.innerHTML = modifiedTotalStr;
}
