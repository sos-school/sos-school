async function addMembers() {
    var membersSection = document.getElementById("members-content");

    // fetch data
    let response = await fetch('https://api.sos-school.org/members');
    let members = await response.json();

    // populate members section with fetched data
    for (var i = 0; i < members.length; i++) {
        var member = document.createElement("li");
        member.innerHTML = members[i].firstName + ' ' + members[i].lastName;
        membersSection.appendChild(member);
    }
}

window.onload = function addContent() {
    addLanguages();
    addMembers();
}