<?php

$tests = [];

$function = new ReflectionFunction('manageMovements');

$tests[] = static fn ($eq): bool => $eq($function->getNumberOfParameters(), 1);
$tests[] = static fn ($eq): bool => $eq($function->getNumberOfRequiredParameters(), 1);
$tests[] = static fn ($eq): bool => $function->hasReturnType();

$tests[] = static fn ($eq): bool => $eq(manageMovements('RLB'), ['RIGHT', 'LEFT', 'BACKWARDS']);
$tests[] = static fn ($eq): bool => $eq(manageMovements('FLBR'), ['FRONT', 'LEFT', 'BACKWARDS', 'RIGHT']);
$tests[] = static fn ($eq): bool => $eq(manageMovements('RRLF'), ['RIGHT', 'RIGHT AGAIN', 'LEFT', 'FRONT']);
$tests[] = static fn ($eq): bool => $eq(manageMovements('RRLFFB'), ['RIGHT', 'RIGHT AGAIN', 'LEFT', 'FRONT', 'FRONT AGAIN', 'BACKWARDS']);