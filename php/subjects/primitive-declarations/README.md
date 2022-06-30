### Primitive declarations

### Welcome !

Welcome to the PHP 8 pool! The idea of this pool is to introduce you to `PHP`.
In this course we will see the basics of the language, (variables, conditions, ...) up to the fundamentals of POO (Object Oriented Programming).

### Setup

To start programming in PHP :
- Windows : Download and install the PHP binaries [here](https://windows.php.net/download/). Download the "Zip" x64 version.
Use `php.exe` to run your php file.*
- Linux : Depending on your distro, you may just have to use your packet manager, and the binaries will be added automatically to your path. Use `php "file.php"` to run your program.

*If you want to simply use the `php` command on Windows, add PHP to the environment variables of your Windows install. See [here](https://www.php.net/manual/en/faq.installation.php#faq.installation.addtopath).

Once this is done, install the [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) extension for Visual Studio Code. Restart VS Code, and voilà ! Use the play button at the top right to run your program.

### Explanations

#### The syntax of PHP

The syntax and semantics of PHP are similar to those of most other programming languages, with the additional fact that all PHP code is enclosed in some sort of label called **_tag_**.

All PHP code must be placed inside the following :

```php
<?php // We tell our file / browser that we’re gonna write/execute PHP code


...PHP Code....

?> This tag is only useful if you put PHP directly into an HTML page.
```

_Note : For all the exercises of this course it will not be necessary to put the tag `?>` at the end of your files 😉._

---

#### The Semicolon

In PHP, as in many other languages, it is necessary to mark the end of an instruction.
The semicolon means the end of it. It is essential for the proper functioning of the script.

If we wanted to display "Hello!" many times we would need to put a semicolon at the end of each statement like in this
example :

```php
<?php

echo "Hello !";
echo "Hello !";
echo "Hello !";
```

Display :

Hello !Hello !Hello !

---

#### Let's go ? 🙌

Now that we have seen the syntax basics of language, we can begin to get to the heart of the matter.

**_Development !_**

---

#### Variables

The whole **first thing** to learn in any language is _"How do I declare a variable?"_

Let’s see an example of this step :

```php
$myVariable = "Easy no?";
```

> You can notice that we used [camelCase](https://en.wikipedia.org/wiki/Camel_case) (best of all 🔥) for the variable name.

Any variable must be declared using the dollar sign `$` followed by letters (upper or lower case) or an underscore (underscore \_).

Variables can represent any type of value, and they can be reassigned to different types.

```php
$maVariable = 5 ;
$myVariable = "Now I am assigned a string! Fabulous.";
```

Below is a summary table of incorrect variable declaration syntaxes.

```php
$var 1 = "toto" ; // No space
$var-1 = "toto" ; // No dash
$-var = "toto" ; // No dash
$20var = "toto" ; // Cannot start with a number
var = "toto" ; // Necessarily a $ in front of the name
```

> **_Note_** : PHP is one of the few programming languages ​​that accepts accented characters in variable names. However, their use is strongly discouraged for reasons of maintenance and portability.

### Instructions

Create the following variables :

- `firstStr` which is a string of words
- `firstEscapeStr` which is a string of words containing a new line break character.
- `firstBool` is a boolean.
- `firstInteger` is an integer.
- `firstFloat` is a float.
- `firstNull` is NULL.
- `firstArray` is an array containing a property for each primitive type :
  - Ordered values : `2, null, 'Hi', 5.5, false`

### Notions

- Variables
- Primitive types
- [php.net/manual/en/language.variables.basics.php](https://php.net/manual/en/language.variables.basics.php)
