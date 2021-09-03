<?php

$tests = [];

$tests[] = static fn ($eq): bool => $eq(gettype($firstStr), 'string');
$tests[] = static fn ($eq): bool => str_contains($firstEscapeStr, "\n");
$tests[] = static fn ($eq): bool => $eq(gettype($firstBool), 'boolean');
$tests[] = static fn ($eq): bool => $eq(gettype($firstInteger), 'integer');
$tests[] = static fn ($eq): bool => $eq(gettype($firstFloat), 'double');
$tests[] = static fn ($eq): bool => $eq(gettype($firstArray), 'array');
$tests[] = static fn ($eq): bool => $eq(gettype($firstNull), 'NULL');

$tests[] = static fn ($eq): bool => $eq(count($firstArray), 5);
$tests[] = static fn ($eq): bool => $eq($firstArray[0], 2);
$tests[] = static fn ($eq): bool => $eq($firstArray[1], null);
$tests[] = static fn ($eq): bool => $eq($firstArray[2], 'Hi');
$tests[] = static fn ($eq): bool => $eq($firstArray[3], 5.5);
$tests[] = static fn ($eq): bool => $eq($firstArray[4], false);