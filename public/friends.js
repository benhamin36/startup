// Function to generate HTML table from titles
let friends = [];
async function generateTable() {
    let username = localStorage.getItem("userName");
    let request = `{"req":"${username}"}`
    console.log(JSON.stringify(request));
    const response = await fetch('/api/friends', {
        method: 'POST',
        headers: {'content-type': 'application.json'},
        body: JSON.stringify(request),
    });
    const friendList = await response.json();

    friends = friendList;

    var tableHtml = '<table class="table border-top">';
    for (var i in friends)
        tableHtml += `<tr scope="row"><td><img class="rounded" src="Spartan Icon.jpg" width="50px" height="50px"></td><td>${friends[i]}</td><td><form method="get" action="battle.html"><button class="btn btn-secondary" type="submit" onclick="battle(${i})">Battle!</button></form></td><td class="text-success">Active</td></tr>`;

    tableHtml += '</table>';
    return tableHtml;
}

document.addEventListener('DOMContentLoaded', async () => {

    // Get the container element
    var tableContainer = document.getElementById('tableContainer');

    // Generate and insert the table HTML into the container
    tableContainer.innerHTML = await generateTable(friends);
});


function battle(opponent) {
    localStorage.setItem("Opponent", friends[opponent]);
}