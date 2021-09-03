<?php

$tests = [];

$fileContent = getFileContent('its-ricard-time');

$tests[] = static fn ($eq, $exerciseName): bool => countLinesInFile($exerciseName) > 0;
$tests[] = static fn ($eq, $exerciseName): bool => count(executeFile($exerciseName)) > 0;

$tests[] = static fn ($eq): bool => str_contains($fileContent, '$nbrRicard');
$tests[] = static fn ($eq): bool => str_contains($fileContent, 'do') && str_contains($fileContent, 'while'); // Use do while loop

$result = executeFile('its-ricard-time');

$tests[] = static fn ($eq): bool =>
$result[0] === "Come on ricard number 1" && $result[1] === "Come on ricard number 2" && $result[2] === "Come on ricard number 3" &&
    $result[3] === "I'll have to stop soon!" && $result[4] === "Come on ricard number 4" && $result[5] === "Come on ricard number 5" &&
    $result[6] === "I am no longer very fresh ..." || $result[6] === "I am no longer very fresh …" && $result[7] === "Come on ricard number 6" && $result[8] === "Come on ricard number 7";
