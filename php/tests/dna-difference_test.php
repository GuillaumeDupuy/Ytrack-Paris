<?php

$tests = [];

$function = new ReflectionFunction('dnaDiff');
$functionContent = getFunctionContent($function);

$tests[] = static fn ($eq): bool => $eq($function->getNumberOfParameters(), 2);
$tests[] = static fn ($eq): bool => $eq($function->getNumberOfRequiredParameters(), 2);
$tests[] = static fn ($eq): bool => $eq($function->hasReturnType(), true);

$tests[] = static fn ($eq): bool => $eq(str_contains($functionContent, 'array_diff('), false);
$tests[] = static fn ($eq): bool => $eq(str_contains($functionContent, 'array_diff_assoc('), false);

$tests[] = static fn ($eq): bool => $eq(dnaDiff('GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT'), 7);
$tests[] = static fn ($eq): bool => $eq(dnaDiff('GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCTAZA'), false);
$tests[] = static fn ($eq): bool => $eq(dnaDiff('AAGCCTATTAACAGGAT', 'GAGCCTACTAACGGGAT'), 3);
