<?php

$tests = [];

$reflection = new ReflectionFunction('findMaximumSubarray');
$content = getFunctionContent($reflection);

$tests[] = static fn ($eq): bool => $eq($reflection->getNumberOfRequiredParameters(), 1);
$tests[] = static fn ($eq): bool => $reflection->hasReturnType();
$tests[] = static fn ($eq): bool => $eq(str_contains($content, 'array_sum'), false);

$tests[] = static fn ($eq): bool => $eq(findMaximumSubarray([1, -1, 4, 6, 3]), 13);
$tests[] = static fn ($eq): bool => $eq(findMaximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
$tests[] = static fn ($eq): bool => $eq(findMaximumSubarray([5, 4, -1, 7, 8]), 23);
$tests[] = static fn ($eq): bool => $eq(findMaximumSubarray([1]), 1);
$tests[] = static fn ($eq): bool => $eq(findMaximumSubarray([]), 0);