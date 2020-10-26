// make api calls DRY
async function getData(type) {
    let response = await fetch(`https://api.sos-school.org/${type}`);
    let type = response.json();
}

async function addMembers() {
    var membersSection = document.getElementById("members-content");

    // fetch data
    await getData(members)

    // populate members section with fetched data
    for (var i = 0; i < members.length; i++) {
        var member = document.createElement("p");
        member.innerHTML = members[i].firstName + ' ' + members[i].lastName;
        membersSection.appendChild(member);
    }
}

window.onload = addMembers();