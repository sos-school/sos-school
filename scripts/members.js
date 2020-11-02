export default async function addMembers() {
    var membersSection = document.getElementById("members-content");

    // fetch data
    const members = require('../content/members.json')

    // populate members section with fetched data
    for (var i = 0; i < members.length; i++) {
        var member = document.createElement("li");
        member.innerHTML = members[i].firstName + ' ' + members[i].lastName;
        membersSection.appendChild(member);
    }
}