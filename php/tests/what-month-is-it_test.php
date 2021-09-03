<?php

$tests = [];

$fileContent = getFileContent('what-month-is-it');

$tests[] = static fn ($eq, $exerciseName): bool => countLinesInFile($exerciseName) > 0;
$tests[] = static fn ($eq, $exerciseName): bool => count(executeFile($exerciseName)) > 0;

$tests[] = static fn ($eq): bool => str_contains($fileContent, '$month');
$tests[] = static fn ($eq): bool => str_contains($fileContent, 'switch') && str_contains($fileContent, 'case'); // Use switch loop

const LETTERS_MONTH = [
    1 => 'January',
    2 => 'February',
    3 => 'March',
    4 => 'April',
    5 => 'May',
    6 => 'June',
    7 => 'July',
    8 => 'August',
    9 => 'September',
    10 => 'October',
    11 => 'November',
    12 => 'December',
];

$month = LETTERS_MONTH[intval(date("m"))];

$tests[] = static fn ($eq, $exerciseName): bool => $eq(executeFile($exerciseName, false), "We are in the month of $month");
