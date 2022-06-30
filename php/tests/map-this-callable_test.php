<?php

$tests = [];

$reflection = new ReflectionFunction('myArrayMap');
$functionContent = getFunctionContent($reflection);

$tests[] = static fn ($eq): bool => $eq($reflection->getNumberOfParameters(), 3);
$tests[] = static fn ($eq): bool => $eq($reflection->getNumberOfRequiredParameters(), 2);
$tests[] = static fn ($eq): bool => $eq(str_contains($functionContent, "array_map"), false);
$tests[] = static fn ($eq): bool => $eq(str_contains($functionContent, "array_map_recursive"), false);

$tests[] = static fn ($eq): bool => $eq(
    myArrayMap(static fn ($n) => $n * $n * $n, [1, 2, 3 ,4 ,5]),
    [1, 8, 27, 64, 125]
);

$tests[] = static fn ($eq): bool => $eq(
    myArrayMap(static fn ($n) => $n * 2, range(1, 5)),
    [2, 4, 6, 8, 10]
);

$tests[] = static fn ($eq): bool => $eq(myArrayMap(null, [1, 3, 7]), [1, 3, 7]);
$tests[] = static fn ($eq): bool => $eq(
    myArrayMap(null, [1, 2, 3], ['one', 'two', 'three'], ['uno', 'dos', 'tres']),
    [
        [1, 'one', 'uno'],
        [2, 'two', 'dos'],
        [3, 'three', 'tres']
    ]
);

$tests[] = static fn ($eq): bool => $eq(
    myArrayMap(static fn ($n) => $n['value'], ['value1' => 1, 'value2' => 2, 'value3' => 3]),
    [1, 2 ,3]
);
