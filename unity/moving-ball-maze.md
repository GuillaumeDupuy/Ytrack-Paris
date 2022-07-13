# 🎱Moving Ball Maze

# 📜 Informations

**Duration:** ~4hours

**Difficulty:** Beginner

**Type:** Project

[Required Courses](https://calvin-ynov.notion.site/468d9947f417492e843a73d294b48dbc?v=ae07a339d437402aa16135e8ed177d85)

# 🎮Game

We want to make a ball moving around a maze passing through each checkpoint to reach the final goal. They will be different obstacles and the ball is moving thanks to the platform. 

The platform will move only in rotation in front/back or left/right, this will cause the ball to move with the gravity.

When you create the maze, the ball does have always a way to pass through, if the ball is destroy, it must respawn.

The different obstacles:

- Walls
- Traps (kill instantly the ball)

# 3C

# 📹Camera

The camera doesn’t need to move, it has to be fix on the platform as long as it can see the ball.

# ⌨️Controls

The player can rotate the platform on the left/right, front/back

- Z front
- S back
- Q left
- D right

# 👾Character

The character correspond to the ball, it can move as long as it is not blocked with walls. 

The ball will interact with traps by destroying the ball and if it reach the goal the player wins.

# 📝Functionalities

Platform can rotate with controls each walls, traps have to rotate at the same time.

The ball is destroyed when it hit the traps.

If the ball is destroyed, it must respawn the ball at the beginning.

The player win if the ball reach the goal, it should restart the game.

Be careful, the platform can only have one ball at the same time.

The platform, walls, traps, ball must be a prefab

# 🔥Bonus

If the ball get out of the platform, it must be destroy.

Make checkpoints for the ball.

Display a timer as a score, and display when the player win.

Make a HUD when the game start, a pause menu, an end menu.