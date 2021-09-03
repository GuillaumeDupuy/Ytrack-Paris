<?php

$tests = [];

$reflection = new ReflectionFunction('myArrayFilter');
$functionContent = getFunctionContent($reflection);

$tests[] = static fn ($eq): bool => $eq($reflection->getNumberOfParameters(), 2);
$tests[] = static fn ($eq): bool => $eq($reflection->getNumberOfRequiredParameters(), 1);
$tests[] = static fn ($eq): bool => $eq(str_contains($functionContent, "array_filter"), false);

$tests[] = static fn ($eq): bool => $eq(
    myArrayFilter(['a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5], static fn ($n) => $n & 1),
    ['a' => 1, 'c' => 3, 'e' => 5]
);

$tests[] = static fn ($eq): bool => $eq(
    myArrayFilter([6, 7, 8, 9, 10, 11, 12], static fn ($n) => !($n & 1)),
    [0 => 6, 2 => 8, 4 => 10, 6 => 12]
);

$tests[] = static fn ($eq): bool => $eq(
    myArrayFilter([0 => 'foo', 1 => false, 2 => -1, 3 => null, 4 => '', 5 => '0', 6 => 0,]),
    [0 => 'foo', 2 => -1]
);