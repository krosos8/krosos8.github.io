// ==UserScript==
// @name         Improve Facepunch
// @namespace    krosos8.github.io
// @version      0.413
// @description  Improve Facepunch!
// @author       Slashed Out/krosos8
// @match        https://facepunch.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

        // Hasselhoff is master race,
        // weeb shit is a disgrace!
        console.log("Facepunch Improved by krosos8/Slashed Out. Heil Hasselhoff!");
        var fpLogo = document.getElementById("logo");
        var headerText = document.getElementById("breadcrumb");
        fpLogo.childNodes[0].href = "https://www.youtube.com/watch?v=CdKVX45wYeQ";
        fpLogo.childNodes[0].childNodes[0].src = "https://i.imgur.com/LoUOXIr.png";
        fpLogo.childNodes[0].childNodes[0].alt = "Hoffpunch";
        fpLogo.childNodes[0].childNodes[0].title = "Hoffpunch";
})();