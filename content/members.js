async function addMembers() {
    var membersSection = document.getElementById("members-content");

    let response = await fetch('https://api.sos-school.org/members');
    let members = await response.json();
    console.log(members);
    
    for (var i = 0; i < members.length; i++) {
        var member = document.createElement("p");
        member.innerHTML = members[i].firstName + ' ' + members[i].lastName;
        membersSection.appendChild(member);
    }
}