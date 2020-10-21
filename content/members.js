members = [
    {
        "firstName": "Mathis",
        "lastName": "Oberlé"
    },
    {
        "firstName": "Arthur",
        "lastName": "Van der Torre"
    },
    {
        "firstName": "Nico",
        "lastName": "Bachner"
    },
    {
        "firstName": "Noé",
        "lastName": "Oberlé"
    },
    {
        "firstName": "Shani",
        "lastName": "Terblanche"
    },
    {
        "firstName": "Aiona",
        "lastName": "Gambucci"
    },
    {
        "firstName": "Rowan",
        "lastName": "Pereira"
    },
    {
        "firstName": "Nicolas",
        "lastName": "Gerbaud"
    },
    {
        "firstName": "Anna Rita",
        "lastName": "Cefalì"
    }
]

function addMembers() {
    var membersSection = document.getElementById("members-content");
    for (var i = 0; i < members.length; i++) {
        var member = document.createElement("p");
        member.innerHTML = members[i].firstName + ' ' + members[i].lastName;
        membersSection.appendChild(member);
    }
}