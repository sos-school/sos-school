export default async function addLanguages(lang) {
    var languageNavigation = document.getElementById("select-language");

    // fetch data
    let response = await fetch(`../content/languages.json`);
    let languages = await response.json();

    // inject data into language navigation
    for (var i = 0; i < languages.length; i++) {
        // exclude current page
        if (lang != languages[i].abbreviation) {
            // create link element
            var languageLink = document.createElement("a");
            languageLink.href = `https://www.sos-school.org/${languages[i].abbreviation}`;
            languageLink.innerHTML = languages[i].flag + " " + languages[i].language;
            
            // fade-in animation
            var fadeInDelay = i / 3;
            languageLink.style.animationName = "fadein";
            languageLink.style.animationDuration = `1s`;
            languageLink.style.animationDelay = `${fadeInDelay}s`;
            languageLink.style.animationFillMode = "both";

            languageNavigation.appendChild(languageLink);
        }
    }
}