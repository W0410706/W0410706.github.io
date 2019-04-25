"use strict";

function initialize() {
    //declare variables for all links & link icons
    let homeLink = document.getElementById("homeLink");
    let homeIcon = document.getElementById("homeIcon");
    let eyeLink = document.getElementById("eyeLink");
    let eyeIcon = document.getElementById("eyeIcon");
    let personLink = document.getElementById("personLink");
    let personIcon = document.getElementById("personIcon");
    let letterLink = document.getElementById("letterLink");
    let letterIcon = document.getElementById("letterIcon");

    //call appropriate functions for when mouse hovers over (& off) an icon
    homeLink.addEventListener("mouseover", highlightHomeIcon);
    homeLink.addEventListener("mouseout", unHighlightHomeIcon);

    eyeLink.addEventListener("mouseover", highlightEyeIcon);
    eyeLink.addEventListener("mouseout", unHighlightEyeIcon);

    personLink.addEventListener("mouseover", highlightPersonIcon);
    personLink.addEventListener("mouseout", unHighlightPersonIcon);

    letterLink.addEventListener("mouseover", highlightLetterIcon);
    letterLink.addEventListener("mouseout", unHighlightLetterIcon);

    function highlightHomeIcon() {
        homeIcon.src = "images/homeIconPink.png";
    }
    function unHighlightHomeIcon() {
        homeIcon.src = "images/homeIconWhite.png";
    }

    function highlightEyeIcon() {
        eyeIcon.src = "images/eyeIconPink.png";
    }
    function unHighlightEyeIcon() {
        eyeIcon.src = "images/eyeIconWhite.png";
    }

    function highlightPersonIcon() {
        personIcon.src = "images/personIconPink.png";
    }
    function unHighlightPersonIcon() {
        personIcon.src = "images/personIconWhite.png";
    }

    function highlightLetterIcon() {
        letterIcon.src = "images/letterIconPink.png";
    }
    function unHighlightLetterIcon() {
        letterIcon.src = "images/letterIconWhite.png";
    }
}

// Call function after page has loaded
window.addEventListener('load', initialize);