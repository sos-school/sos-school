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

async function addLanguages() {
    var languageNavigation = document.getElementById("change-language");

    // fetch data
    let response = await fetch('https://api.sos-school.org/languages');
    let languages = await response.json();

    // inject data into language navigation
    for (var i = 0; i < languages.length; i++) {
        var language = document.createElement("a");
        language.id = "language-link";
        language.href = `https://${languages[i].abbreviation}.sos-school.org`;
        language.innerHTML = languages[i].flag;
        languageNavigation.appendChild(language);
    }
}

window.onload = function addContent() {
    addLanguages();
    addMembers();
}