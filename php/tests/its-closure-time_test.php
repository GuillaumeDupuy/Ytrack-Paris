<?php

$tests = [];

$function = new ReflectionFunction('f');

$tests[] = static fn ($eq): bool => $eq($function->getNumberOfParameters(), 0);

$tests[] = static fn ($eq): bool => $eq(f()['+'](5, 5), 10);
$tests[] = static fn ($eq): bool => $eq(f()['-'](7, 5), 2);
$tests[] = static fn ($eq): bool => $eq(f()['*'](7, 7), 49);