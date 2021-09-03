<?php

$tests = [];

$function = new ReflectionFunction('checkCircuits');

$tests[] = static fn ($eq): bool => $eq($function->getNumberOfParameters(), 1);
$tests[] = static fn ($eq): bool => $function->hasReturnType();

$tests[] = static fn ($eq): bool => $eq(checkCircuits(9), ['Right arm']);
$tests[] = static fn ($eq): bool => $eq(checkCircuits(12), ['Left arm', 'Right arm']);
$tests[] = static fn ($eq): bool => $eq(checkCircuits(312), ['Left arm', 'Right arm', 'Motor']);
$tests[] = static fn ($eq): bool => $eq(checkCircuits(825), ['Right arm', 'Motherboard', 'Zip Defluxer']);
