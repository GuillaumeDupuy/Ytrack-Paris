<?php

$tests = [];

$tests[] = static fn ($eq): bool => $eq($firstSum, 135);
$tests[] = static fn ($eq): bool => $eq($firstSub, 65);
$tests[] = static fn ($eq): bool => $eq($firstMult, 3500);
$tests[] = static fn ($eq): bool => $eq($firstDivision, $firstNbr / $secondNbr);
$tests[] = static fn ($eq): bool => $eq($firstModulus, 30);
