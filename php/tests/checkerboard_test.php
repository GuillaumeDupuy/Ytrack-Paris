<?php

$tests = [];

$reflection = new ReflectionFunction('createCheckerboard');

$tests[] = static fn ($eq): bool => $eq($reflection->getNumberOfParameters(), 1);
$tests[] = static fn ($eq): bool => $eq($reflection->getNumberOfRequiredParameters(), 1);
$tests[] = static fn ($eq): bool => $reflection->hasReturnType();

$tests[] = static fn ($eq): bool => $eq(
    createCheckerboard(2),
    [
        "0", "X",
        "X", "0"
    ]
);

$tests[] = static fn ($eq): bool => $eq(
    createCheckerboard(5),
    [
        "0", "X", "0", "X", "0",
        "X", "0", "X", "0", "X",
        "0", "X", "0", "X", "0",
        "X", "0", "X", "0", "X",
        "0", "X", "0", "X", "0"
    ]
);