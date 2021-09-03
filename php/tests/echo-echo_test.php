<?php

$tests = [];

$fileContent = executeFile('echo-echo');

$tests[] = static fn ($eq): bool => count($fileContent) > 0;
$tests[] = static fn ($eq, $exerciseName): bool => $eq(countLinesInFile($exerciseName), 3);

$tests[] = static fn ($eq): bool => $eq($myVariable, 12);
$tests[] = static fn ($eq): bool => $eq($fileContent[0], 'This is my first echo !');
$tests[] = static fn ($eq): bool => $eq($fileContent[1], 'My variable : 12');