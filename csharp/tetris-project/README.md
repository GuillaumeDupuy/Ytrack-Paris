# Tetris Project

     ████████╗███████╗████████╗██████╗ ██╗███████╗    ██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗
     ╚══██╔══╝██╔════╝╚══██╔══╝██╔══██╗██║██╔════╝    ██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝
        ██║   █████╗     ██║   ██████╔╝██║███████╗    ██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║
        ██║   ██╔══╝     ██║   ██╔══██╗██║╚════██║    ██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║
        ██║   ███████╗   ██║   ██║  ██║██║███████║    ██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║
        ╚═╝   ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝

**Début du projet**: Lundi 10 janvier

**Fin du projet**: Dimanche 6 février - 23h59

## Rendu

    Le projet se fera en équipe de 2 ou 3 personnes maximum.

Le rendu se fera via un repo git ou il y aura votre dossier **TETRIS** ainsi qu'un **README**.

Le **README** devra contenir toutes les informations nécessaires pour tester votre application lors d'un clone. (et tout ce qui vous semble pertinent de rajouter)

🔗 Le lien de votre repo devra nous être transmis par **_Mail_** ou **_Discord_**

Bon courage et bonne lecture ! 😊

## Notions

- [C# Documentation : Class](https://docs.microsoft.com/fr-fr/dotnet/csharp/fundamentals/types/classes)
- [C# Documentation :
  Inheritance](https://docs.microsoft.com/fr-fr/dotnet/csharp/fundamentals/object-oriented/inheritance)
- [C# Documentation : Timers](https://docs.microsoft.com/fr-fr/dotnet/api/system.timers.timer?view=net-5.0)
- [C# Documentaion : Bitmap](https://docs.microsoft.com/fr-fr/dotnet/api/system.drawing.bitmap?view=net-5.0)
- [C# Documentation : Graphics](https://docs.microsoft.com/fr-fr/dotnet/api/system.drawing.graphics?view=net-5.0)
- [Visual Studio Documentation : Winform](https://docs.microsoft.com/fr-fr/visualstudio/ide/create-csharp-winform-visual-studio?view=vs-2019)

### Optional notion

- [C++ Documentation : patern state](https://r0d.developpez.com/articles/dp-state-fr/) (its c++ documentation but its more a way to code, popular in video-games)

## Instructions

You had to use Visual Studio (not visual studio code) to make your program

Make your own Tetris game ! Create a menu with "Play", "Options" and "Quit" buttons and make them work.

- Button Play must launch the game
- Button Option must contain some configurable options
- Button Quit must obviously quit the game

## Part 1-- Game

Here, is where users will scoring at your game  
Where to begin ?

### Drawing--

First, you had to make a grid in your interface, its here where users will play. you had to use elements in winform to make it. This grid will allow you to :

- Manage colisions
- Make your shapes move by updating your grid in time
- [here](https://i.imgur.com/DX0hjuH.png) you can look how it should work

You can define your shape with the way you want but we recommend to make a class for this  
Your shape have to :

- Have a size
- Have a color
- Have a shape --'
- Be able to rotate except beside a wall or an other shape

You had to have an area where users can see :

- Their score
- The next shape to come

### Timer--

Every game (almost) have a timer, it will allow you to update your state game.  
With the timer you must :

- Update animations
- Increase the game speed according to the game score

### Gameplay--

This is the way to play the game with elements that you put in your game. You can reinvent the way to play Tetris if you want but you had to make the base of the real game work.  
Heres the elements you had to put in your game :

- Uses key to move your shape right to left
- Make a random shape spawn at the top of the grid
- Make the shape fall
- Make the shape fall faster when user press key down
- Make line disappear if it is complete
- Increase the score when a line is completed
- Game over if shape fall at the top of the grid
- You can add elements of gameplay if you want

## Bonus part

Its an optional part  
here is a list of possibilities you can add to your game :

- Add a Menu where users will be able to navigate between "Play", "Options" and "Quit" buttons.
- Save your current game and load it
- Make an animation for the menu with a tetris playing alone randomly
- Make a clean of the grid when user reach an X score
- Add malus
- Add gamemode
- Make an AI that learn alone to play, make an incredible score and take the control of humanity (forget about that one ^^')

## Allowed packages

You can use all system package provided with C# in Visual Studio

## Exemple

[![Alt text](https://i.imgur.com/Z2t5n0H.png)](https://www.youtube.com/watch?v=Q4v8EhDJf3k&ab_channel=jordangrl)
