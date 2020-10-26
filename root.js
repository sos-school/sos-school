window.onload = async function addLanguages() {
    var languageNavigation = document.getElementsByTagName("nav");

    // fetch data
    let response = await fetch('https://api.sos-school.org/languages');
    let languages = await response.json();

    // inject data into language navigation
    for (var i = 0; i < languages.length; i++) {
        var language = document.createElement("a");
        language.href = `https://${languages[i].abbreviation}.sos-school.org`;
            var languageButton = document.createElement("button");
            languageButton.innerHTML = languages[i].flag, languages[i].language;
            language.appendChild(languageButton);
        languageNavigation.appendChild(language);
    }
}