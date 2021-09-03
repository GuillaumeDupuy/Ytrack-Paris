<?php

$tests = [];

$fileContent = getFileContent('multiplication-table');

$tests[] = static fn ($eq, $exerciseName): bool => count(executeFile($exerciseName)) > 0;
$tests[] = static fn ($eq, $exerciseName): bool => countLinesInFile($exerciseName) <= 6;

$tests[] = static fn ($eq): bool => str_contains($fileContent, 'while(') || str_contains($fileContent, 'while ('); // Use while loop
$tests[] = static fn ($eq): bool => !str_contains($fileContent, 'range('); // Unauthorized function

$result = executeFile('multiplication-table');

$tests[] = static fn ($eq): bool =>
    $result[0] === "1 * 9 = 9" && $result[1] === "2 * 9 = 18" && $result[2] === "3 * 9 = 27" && $result[3] === "4 * 9 = 36" &&
    $result[4] === "5 * 9 = 45" && $result[5] === "6 * 9 = 54" && $result[6] === "7 * 9 = 63" && $result[7] === "8 * 9 = 72" &&
    $result[8] === "9 * 9 = 81" && $result[9] === "10 * 9 = 90";
