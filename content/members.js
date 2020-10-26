function addMembers() {
    fetch('https://api.sos-school.org/members')
        .then(response => {
            return response.json();
        })
        .then(members => {
            console.log(members);
        })
    var membersSection = document.getElementById("members-content");
    for (var i = 0; i < members.length; i++) {
        var member = document.createElement("p");
        member.innerHTML = members[i].firstName + ' ' + members[i].lastName;
        membersSection.appendChild(member);
    }
}