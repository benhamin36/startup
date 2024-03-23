// Function to generate HTML table from titles
let friends = [];

// Get the friends list from our endpoint, then use it to populate the html table.
async function generateTable() {

    //Get the username
    let username = localStorage.getItem("userName");

    // Make the json for the post request
    let request = `{"req":"${username}"}`

    // Send the request
    const response = await fetch('/api/friends', {
        method: 'POST',
        headers: {'content-type': 'application.json'},
        body: JSON.stringify(request),
    });
    const friendList = await response.json();

    //Set the friends array to what we got from the API
    friends = friendList;

    //Set the html to match what we got. Currently all use the same profile pic, but we might find a way to store that in the db and get it from the API.
    var tableHtml = '<table class="table border-top">';
    for (var i in friends)
        tableHtml += `<tr scope="row"><td><img class="rounded" src="Spartan Icon.jpg" width="50px" height="50px"></td><td>${friends[i]}</td><td><form method="get" action="battle.html"><button class="btn btn-secondary" type="submit" onclick="battle(${i})">Battle!</button></form></td><td class="text-success">Active</td></tr>`;

    tableHtml += '</table>';

    //Return the html
    return tableHtml;
}

//To load the html we need to do an await, which needs to be run in async, so this event listener can take care of that
document.addEventListener('DOMContentLoaded', async () => {

    // Get the container element
    var tableContainer = document.getElementById('tableContainer');

    // Generate and insert the table HTML into the container
    tableContainer.innerHTML = await generateTable(friends);
});

//When they click battle, send them to a battle with the friend that they clicked it for.
function battle(opponent) {
    localStorage.setItem("Opponent", friends[opponent]);
}