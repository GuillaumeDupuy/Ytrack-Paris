<?php

$tests = [];

$reflection = new ReflectionFunction('explodeWords');
$functionContent = getFunctionContent($reflection);

$tests[] = static fn ($eq): bool => $eq($reflection->getNumberOfParameters(), 3);
$tests[] = static fn ($eq): bool => $eq($reflection->getNumberOfRequiredParameters(), 1);
$tests[] = static fn ($eq): bool => $reflection->hasReturnType();
$tests[] = static fn ($eq): bool => !str_contains($functionContent, "explode");

$tests[] = static fn ($eq): bool => $eq(gettype(explodeWords("Hello there")), 'array');
$tests[] = static fn ($eq): bool => $eq(gettype(explodeWords("Hello-there", "-")), 'array');
$tests[] = static fn ($eq): bool => $eq(gettype(explodeWords("Hello-there", "-", -1)), 'array');

$tests[] = static fn ($eq): bool => $eq(explodeWords('La fonction explode'), ['La', 'fonction', 'explode']);
$tests[] = static fn ($eq): bool => $eq(explodeWords('La-fonction-explode', "-"), ['La', 'fonction', 'explode']);
$tests[] = static fn ($eq): bool => $eq(explodeWords('La-fonction/explode', "-"), ['La', 'fonction/explode']);
$tests[] = static fn ($eq): bool => $eq(count(explodeWords('La-fonction/explode', "-")), 2);
$tests[] = static fn ($eq): bool => !$eq(explodeWords('La-fonction/explode', "-"), ['La', 'fonction', 'explode']);

$tests[] = static fn ($eq): bool => $eq(explodeWords('La-fonction/explode/est/trop-bien', "/", 2), ['La-fonction', 'explode/est/trop-bien']);
$tests[] = static fn ($eq): bool => $eq(explodeWords('La-fonction/explode/est/trop-bien', "/", -1), ['La-fonction', 'explode', 'est']);
$tests[] = static fn ($eq): bool => $eq(count(explodeWords('La-fonction/explode/est/trop-bien', "/", -1)), 3);