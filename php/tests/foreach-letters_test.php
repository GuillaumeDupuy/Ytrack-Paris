<?php

$tests = [];

$fileContent = getFileContent('foreach-letters');

$tests[] = static fn ($eq, $exerciseName): bool => count(executeFile($exerciseName)) > 0;
$tests[] = static fn ($eq, $exerciseName): bool => countLinesInFile($exerciseName) <= 5;

$tests[] = static fn ($eq): bool => str_contains($fileContent, 'foreach(') || str_contains($fileContent, 'foreach ('); // Use foreach loop

$tests[] = static fn ($eq, $exerciseName): bool => $eq(
    executeFile($exerciseName, false),
    "A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z"
);
