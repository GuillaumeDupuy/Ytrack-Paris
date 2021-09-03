<?php

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

$tests = [];

$reflecToday = new ReflectionFunction($today);

$tests[] = static fn ($eq, $exerciseName): bool => $reflecToday->isClosure();
$tests[] = static fn ($eq, $exerciseName): bool => $eq($today(), "It is $month " . date('d') . ", " . date('Y'));

$reflecLeap = new ReflectionFunction($isLeapYear);

$tests[] = static fn ($eq, $exerciseName): bool => $reflecLeap->isClosure();
$tests[] = static fn ($eq, $exerciseName): bool => !$isLeapYear(2017);
$tests[] = static fn ($eq, $exerciseName): bool => !$isLeapYear(2018);
$tests[] = static fn ($eq, $exerciseName): bool => $isLeapYear(2020);
$tests[] = static fn ($eq, $exerciseName): bool => $isLeapYear(1956);
