async function addLanguages() {
    var languageNavigation = document.getElementById("select-language");

    // fetch data
    let response = await fetch('https://api.sos-school.org/languages');
    let languages = await response.json();

    // inject data into language navigation
    for (var i = 0; i < languages.length; i++) {
        var language = document.createElement("a");
        language.className = "language-link";
        language.href = `https://${languages[i].abbreviation}.sos-school.org`;

        language.style.animationName = "fadein";
        language.style.animationDuration = `1s`;
        fadeInDelay = i / 2;
        language.style.animationDelay = `${fadeInDelay}s`;
        language.style.animationFillMode = "both";

        var languageButton = document.createElement("button");
        languageButton.innerHTML = languages[i].flag + " " + languages[i].language;

        languageLink.appendChild(languageButton);
        languageNavigation.appendChild(language);
    }
}

async function addMembers() {
    var membersSection = document.getElementById("members-content");

    // fetch data
    let response = await fetch('https://api.sos-school.org/members');
    let members = await response.json();

    // populate members section with fetched data
    for (var i = 0; i < members.length; i++) {
        var member = document.createElement("p");
        member.innerHTML = members[i].firstName + ' ' + members[i].lastName;
        membersSection.appendChild(member);
    }
}

window.onload = function addContent() {
    addLanguages();
    addMembers();
}