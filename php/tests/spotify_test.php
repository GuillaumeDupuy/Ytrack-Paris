<?php

$tests = [];

$reflecPlaylist = new ReflectionClass('Playlist');

$tests[] = static fn ($eq): bool => $eq($reflecPlaylist->getConstructor(), NULL);
$tests[] = static fn ($eq): bool => $eq(count($reflecPlaylist->getProperties()), 2);
$tests[] = static fn ($eq): bool => $reflecPlaylist->hasMethod('addMedia');
$tests[] = static fn ($eq): bool => $reflecPlaylist->hasMethod('__toString');

$reflecSong = new ReflectionClass('Song');

$tests[] = static fn ($eq): bool => !$eq($reflecSong->getConstructor(), NULL);
$tests[] = static fn ($eq): bool => $eq(count($reflecSong->getProperties()), 3);

$reflecApp = new ReflectionClass('App');

$tests[] = static fn ($eq): bool => !$eq($reflecApp->getConstructor(), NULL);
$tests[] = static fn ($eq): bool => $eq(count($reflecApp->getProperties()), 1);
$tests[] = static fn ($eq): bool => $reflecApp->hasMethod('start');
$tests[] = static fn ($eq): bool => $reflecApp->hasMethod('readLine');
$tests[] = static fn ($eq): bool => $reflecApp->hasMethod('write');

$run = run(["ABBA;Mamma Mia;3:35\n", "Nasko Mentata;Shopskata salata;4:123\n", "Nasko Mentata;Shopskata salata;4:12"]);

$tests[] = static fn ($eq): bool => $eq(trim($run[0]), "Songs added: 3");
$tests[] = static fn ($eq): bool => $eq(trim($run[1]), "Playlist length: 0h 10m 45s");

$run2 = run(["ABBA;Mamma Mia;3:50\n", "Nasko Mentata;Shopskata salata;4:52\n", "Nasko Mentata;Shopskata salata;4:12\n", "Nasko Mentata;Shopskata salata;9:12"]);

$tests[] = static fn ($eq): bool => $eq(trim($run2[0]), "Songs added: 4");
$tests[] = static fn ($eq): bool => $eq(trim($run2[1]), "Playlist length: 0h 15m 20s");

/**
 * Get the output of the buffer and return the result as an array
 */
function run(array $content): array
{
    ob_start();
    $app2 = new App();
    $app2->setContent($content);
    $app2->start();

    $data = ob_get_contents();
    ob_clean();

    return explode("\n", $data, 2);
}