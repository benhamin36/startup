# startup
260 Class Repo

# Specification

## Elevator Pitch

It's fun to play games with friends. The competitive nature of them makes them a fun way to keep up with people and settle scores. This site will offer a competitive turn-based RPG hub where a player tries to outplay their opponent by choosing winning options and leveling up. They will be able to gather valuable weapons and experience using them to decimate their opponents in battle.

## Layout

Put image here.

## Technologies

I am going to use the required technologies in the following ways:

-**HTML:** Structure of page. One page is for login, and one for battle.

-**CSS:** Adds styling to the page so that it has good use of whitespace and colors.

-**JavaScript:** Makes login, chooses attacks, displays the results of a turn, and makes backend calls.

-**Service:** Backend has endpoints for:
 -login
 -sending attacks
 -retrieving opponent attacks

-**DB/Login:** Store users, bow, spear, sword, and armor inventories, experience. Register and login users, with credentials.

-**WebSocket:** As players make their moves, the turn results are sent to their opponents.

-**React:** Application ported to use the React web framework.