### Lift v1

### Instructions

We consider an elevator with the following operation:

- The elevator goes in priority to the requested floor.
- If called, the elevator goes to the nearest called floor.
- The elevator stops at the floors requested or called.

Create a function called `getFloor` which will take care of getting the floor to which the elevator should go.

`getFloor` with the following available parameters:

- The current floor of the elevator: `int`
- The requested floor: `int|null`
- The list of buttons called: `array`

Create a `getDirection` function to give the direction in which the elevator should move. The function should return an integer = 0 if no movement is needed, -1 to go down and +1 to go up.

`getDirection` with the following available parameters:

- The current floor of the elevator: `int`
- The requested floor: `int | null`
- The list of buttons called: `array`

### Notions

- [php.net/manual/en/functions.arguments.php](https://www.php.net/manual/en/functions.arguments.php)
