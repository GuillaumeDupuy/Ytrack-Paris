<?php

$tests = [];

$reflection = new ReflectionMethod('sortZeros');

$tests[] = static fn ($eq): bool => $eq($reflection->getNumberOfParameters(), 1);
$tests[] = static fn ($eq): bool => $reflection->hasReturnType();
$tests[] = static fn ($eq): bool => $eq(gettype(sortZeros([0, 0,'0'])), 'array');

$tests[] = static fn ($eq): bool => $eq(sortZeros([5, 0, 6, 1, 0, 8]), [5, 6, 1, 8, 0, 0]);
$tests[] = static fn ($eq): bool => $eq(sortZeros([0, 0,'0']), [0, 0, '0']);
$tests[] = static fn ($eq): bool => $eq(sortZeros([5, 6, '0', 1, 0, '0' ,8 ,'0']), [5, 6, 1, 8, '0', 0, '0', '0']);