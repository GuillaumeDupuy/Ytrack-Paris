<?php

$tests = [];

$fileContent = getFileContent('for-numbers');

$tests[] = static fn ($eq, $exerciseName): bool => count(executeFile($exerciseName)) > 0;
$tests[] = static fn ($eq, $exerciseName): bool => countLinesInFile($exerciseName) <= 12;

$tests[] = static fn ($eq): bool => str_contains($fileContent, 'for(') || str_contains($fileContent, 'for ('); // Use for loop
$tests[] = static fn ($eq): bool => !str_contains($fileContent, 'range('); // Unauthorized function

$tests[] = static fn ($eq, $exerciseName): bool => $eq(
    executeFile($exerciseName, false),
    "2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97"
);