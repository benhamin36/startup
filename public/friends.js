// Function to generate HTML table from titles
async function generateTable() {
    let username = localStorage.getItem("userName");
    let request = `{\"req\":\"${username}\"}`

    const response = await fetch('/api/friends', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(request),
    });
    const friendList = await response.json();

    const friends = json.stringify(friendList);

    var tableHtml = '<table><tr>';
    friends.forEach(function(friend) {
        tableHtml += '<th>' + friend + '</th>';
    });
    tableHtml += '</tr><tr>';
    friends.forEach(function(friend) {
        tableHtml += '<td><p id="' + friend.replace(/\s+/g, '') + '">' + friend + '</p></td>';
    });
    tableHtml += '</tr></table>';
    return tableHtml;
}

// Get the container element
var tableContainer = document.getElementById('tableContainer');

// Generate and insert the table HTML into the container
tableContainer.innerHTML = generateTable(titles);

function battle(opponent) {
    localStorage.setItem("Opponent", );
}