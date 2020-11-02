export default async function addLanguages() {
    var languageNavigation = document.getElementById("select-language");

    // fetch data
    const languages = require('../content/languages.json')

    // inject data into language navigation
    for (var i = 0; i < languages.length; i++) {
        var languageLink = document.createElement("a");
        languageLink.href = `https://www.sos-school.org/${languages[i].abbreviation}`;

        languageLink.style.animationName = "fadein";
        languageLink.style.animationDuration = `1s`;
        fadeInDelay = i / 4;
        languageLink.style.animationDelay = `${fadeInDelay}s`;
        languageLink.style.animationFillMode = "both";

        var languageButton = document.createElement("button");
        languageButton.innerHTML = languages[i].flag + " " + languages[i].language;

        languageLink.appendChild(languageButton);
        languageNavigation.appendChild(languageLink);
    }
}