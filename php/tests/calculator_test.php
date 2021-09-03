<?php

$tests = [];

$reflection = new ReflectionFunction('calc');

$tests[] = static fn ($eq): bool => $eq($reflection->getNumberOfParameters(), 1);
$tests[] = static fn ($eq): bool => $reflection->hasReturnType();

$tests[] = static fn ($eq): bool => $eq(calc('1 + 1'), 2);
$tests[] = static fn ($eq): bool => $eq(calc('9-5 + 2'), 6);
$tests[] = static fn ($eq): bool => $eq(calc('9-5 + 2'), 6);
$tests[] = static fn ($eq): bool => $eq(calc('((5+3+(1+2)-9)+1) + (9+1)'), 13);
