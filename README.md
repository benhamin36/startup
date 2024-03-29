# Specification

## Elevator Pitch

It's fun to play games with friends. The competitive nature of them makes them a fun way to keep up with people and settle scores. This site will offer a competitive turn-based RPG hub where a player tries to outplay their opponent by choosing winning options and leveling up. They will be able to gather valuable weapons and experience using them to decimate their opponents in battle.

## Layout

![Screenshot of the mockup for the site](rpgsitemockup.png)

## Key features

- Secure login over HTTPS
- Ability to choose and equip new armor and weapons
- Display of friends
- Ability to challenge friends to battles
- Toggle between friends to battle
- Choose moves and follow the events in a battle
- Win experience and new weapons

## Technologies

I am going to use the required technologies in the following ways:

- **HTML:** Structure of page. One page is for login, and one for battle.

- **CSS:** Adds styling to the page so that it has good use of whitespace and colors.

- **JavaScript:** Makes login, chooses attacks, displays the results of a turn, and makes backend calls.

- **Service:** Backend has endpoints for:
 -login
 -sending attacks
 -retrieving opponent attacks

- **DB/Login:** Store users, bow, spear, sword, and armor inventories, experience. Register and login users, with credentials.

- **WebSocket:** As players make their moves, the turn results are sent to their opponents.

- **React:** Application ported to use the React web framework.

## HTML Deliverable

For this deliverable I built out the structure of my application using HTML.

- **HTML pages:** Four HTML pages, one able to log the user in, one the page where battles will take place, one for friend list, and another for the player to manage their inventory.

- **Links:** Each page has a navbar at the top of the page for all of the other pages. The login page links to the battle page. The friend list also has a link to the battle page on each friend.

- **Text:** The battle page has a representation of text a user might see while battling, and a text representation of an HP bar. The friend page includes a checker to see how recently certain friends were active. The inventory page has a list of each armor, bow, sword, and spear the user has so that they can equip them as desired.

- **Images:** The battle page has easy icons to show the user their attack options. The friend page has an icon for each friend. The inventory page has an icon for the player.

- **DB/Login:** Input box and submit button for login. There is a temporary html page detailing the inventory and friend connections in the database, as well as where we store login information.

- **WebSocket:** There is a temporary html page detailing the sorts of information involved in each data transfer. We will update data when a user picks an attack to advance the battle, when they send a friend request, and when they accept or deny a friend request.


## CSS Deliverable

- [x] - done - Prerequisite: Simon CSS deployed to your production environment
- [x] - done - Prerequisite: A link to your GitHub startup repository prominently displayed on your application's home page
- [x] - done - Prerequisite: Notes in your startup Git repository README.md file
- [x] - done - 30% Header, footer, and main content body. Used flex to layout sections.
- [x] - done - 20% Navigation elements. Links highlight on hover.
- [x] - done - 10% Responsive to window resizing.
- [x] - done - 20% Application elements. Buttons and tables are using bootstrap.
- [x] - done - 10% Application text content. Text is displayed in several colors.
- [x] - done - 10% Application images. I added curved edges around friend profile pictures.

## JavaScript Deliverable

- [x] - done - Prerequisite: Simon JavaScript deployed to your production environment
- [x] - done - Prerequisite: A link to your GitHub startup repository prominently displayed on your application's home page
- [x] - done - Prerequisite: Notes in your startup Git repository README.md file documenting what you modified and added with this deliverable.
- [x] - done - 20% JavaScript support for future login. Login keeps track of input username for now.
- [x] - done - 20% JavaScript support for future database data. Inventory is stored in local storage for now, but will be in database later.
- [x] - done - 20% JavaScript support for future WebSocket. Uses setInterval function to simulate recieving battle responses from opponents.
- [x] - done - 40% JavaScript support for your application's interaction logic. Able to choose a weapon and keep track of the user and opponent's HP as they battle. Will display appropriate weapon names based on what is equipped and handles a battle, displaying the weapons chosen and damage done. Picking a new friend to battle will update the battle page appropriately.

## Service Deliverable

- [x] - done - Prerequisite: Simon Service deployed to your production environment
- [x] - done - Prerequisite: A link to your GitHub startup repository prominently displayed on your application's home page
- [x] - done - Prerequisite: Notes in your startup Git repository README.md file documenting what you modified and added with this deliverable.
- [x] - done - 40% - Create an HTTP service using Node.js and Express
- [x] - done - 10% - Frontend served up using Express static middleware
- [x] - done - 10% - Your frontend calls third party service endpoints - Calls the quotes endpoint on login page.
- [x] - done - 20% - Your backend provides service endpoints - There is an API call to simulate picking a weapon. (Added on resubmission ->) There is another api call to provide a list of friends, given a username.
- [x] - done - 20% - Your frontend calls your service endpoints - The Battle page calls the attack endpoint to move the battles forward. (Added on resubmission ->) The friends page populates itself based on the friends api call.