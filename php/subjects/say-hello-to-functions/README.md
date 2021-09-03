### Say hello to functions

### Explanations

Now that the basics of `variables` and` loops` are in place, we will finally be able to see how to build our own `functions` 👀.

Let's see an example and explain it!

```php
function getScore(int $score): string
{
    return "Votre score : " . $score ;
}
```

To create a function, we use the `function` instruction followed by the name we want to give to this function (` getScore` here), followed by 2 parentheses. Inside its parentheses we find the various parameters (optional or not).

Since _php 5.2_ you can specify the return type of the function by putting a colon, and the type (`: string` here).

The instructions to be executed when this function is called will be placed between two braces.

### Indications 😉

**_For all the exercises requiring the creation of a function, please specify the return type of the function with the_**
`: TheReturnType`

**_If several types of return possible then:_** `: TheFirstReturnType|TheSecond|...`

### Instructions

Create a `sayHello` function that returns "Hello".

Create a `sayHelloTo` function that returns "Hello $name".

`sayHelloTo` with the following available parameters:

- The Name : `string`

### Notions

- [How to create php function](https://www.w3schools.com/php/php_functions.asp)
