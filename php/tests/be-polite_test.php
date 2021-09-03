<?php

$tests = [];

$fileContent = getFileContent('be-polite');

$tests[] = static fn ($eq, $exerciseName): bool => countLinesInFile($exerciseName) > 0;

$tests[] = static fn ($eq): bool => str_contains($fileContent, '$hour');
$tests[] = static fn ($eq): bool => str_contains($fileContent, 'if') && str_contains($fileContent, 'elseif') && str_contains($fileContent, 'else'); // Use if elseif else loop

$result = executeFile('be-polite', false);
$hour = date("H");

if ($hour >= 6 && $hour <= 12) {
    $tests[] = static fn ($eq): bool => $eq($result, "Hello! Have a nice day :)");
} elseif ($hour > 12 && $hour <= 18) {
    $tests[] = static fn ($eq): bool => $eq($result, "Have a good afternoon!");
} elseif ($hour > 18 && $hour <= 21) {
    $tests[] = static fn ($eq): bool => $eq($result, "Good evening! Hope you had a good day!");
} else {
    $tests[] = static fn ($eq): bool => $eq($result, "Good night! See you tomorrow :)");
}
