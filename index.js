const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 5500;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Send attack
apiRouter.get('/attack', (_req, res) => {
  choice = updateAttack();
  res.send(choice);
});

apiRouter.post('/friends', (req, res) => {
  friends = friendList(req.body);
  res.send(friends);
});

function updateAttack() {

    //When we have a db, get the opponent's equipped items instead of the generic
    //Also this will eventually become an api that only sends your response to the opponent and when it's received it updates. This is just a vague simulation for the moment.
    const choice = Math.floor(Math.random() * 3); // this will be 0, 1, or 2, to simulate the opponent picking a weapon
    let opponentItem = "Mighty Bow";
    switch(choice) {
        case 0:
            opponentItem = "Mighty Bow";
            break;
        case 1:
            opponentItem = "Mighty Sword";
            break;
        case 2:
            opponentItem = "Mighty Spear";
            break;
        default:
            opponentItem = "Mighty Bow";
            break;
    }

    return opponentItem;
}

let friends = [];
function friendList(username) {
  //Eventually get this from the database

  friends.push("Mr Knight");
  friends.push("Mrs Knight");
  friends.push("NoLifr96");
  
  return friends;
}