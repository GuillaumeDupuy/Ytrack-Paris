### Spotify 🎶

### Instructions

Create a database of your favorite music! It will have to keep information about all the added songs.

On the first line, you will get the number of songs you are going to try to add.

On the following lines you will get the songs to add in format :

`<artist name>; <song name>; <minutes:seconds>`

To be valid, each song must have an artist name, song name, and duration.

To do this you will have to create the following classes :

---

-   `Song` :
    -   string artist
    -   string title
    -   string duration

A constructor is expected.

Do what is necessary to be able to recover + modify all these properties.

---

-   `Playlist`
    -   array[Song] songs
    -   int totalMedias

No manufacturer is expected.

Expected methods:

-   addMedia(Song) : will update the list of sounds + the total number of sounds.
-   \_\_toString(): this method will return the following text

If we add 3 sounds :

```
Songs added: 3
Playlist length: 0h 10m 45s
```

---

Finally you will have to create a class named `App` which will be the central point to make our new Spotify work!

This class must have a property named `content` which will be of type string. This corresponds to the different music to add to our playlists.

Example of content:

```php
["ABBA;Mamma Mia;3:35\n", "Nasko Mentata;Shopskata salata;4:123\n", "Nasko Mentata;Shopskata salata;4:12"];
```

Do what is necessary to be able to recover + modify this property.

No manufacturer is expected.

This class should have the following methods :

-   start() : start the program
-   setContent(string) : sets the content to what is passed as parameter
-   readLine(bool): read the contents of the output buffer
-   write(string): write a new line with in the output buffer

Using the following code:

```php
private function readLine(bool $asArray = false): array|bool|string
{
    ob_start();

    echo implode("", $this->getContent());

    $data = ob_get_contents();
    if ($asArray) {
        $data = explode("\n", ob_get_contents());
    }

    ob_clean();

    return $data;
}
```

Expected result :

```php
$app = new App();
$app->setContent(["ABBA;Mamma Mia;3:35\n", "Nasko Mentata;Shopskata salata;4:123\n", "Nasko Mentata;Shopskata salata;4:12"]);
$app->start();

Output :
Songs added: 3
Playlist length: 0h 10m 45s

$app2 = new App();
$app2->setContent(["JUL;Alors la zone;3:25\n", "Naps;La kiffance;2:59\n", "2TH;Si seulement;4:09\n", "Vayn;24H chrono;3:48"]);
$app2->start();

Output :

Songs added: 4
Playlist length: 0h 13m 40s
```

> Checking out the tester on Github will help you a lot !

### Notions

-   [Tampon de sortie](https://tutowebdesign.com/flux-sortie-php.php)
