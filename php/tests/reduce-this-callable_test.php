<?php

$tests = [];

$reflection = new ReflectionFunction('myArrayReduce');
$functionContent = getFunctionContent($reflection);

$tests[] = static fn ($eq): bool => $eq($reflection->getNumberOfParameters(), 3);
$tests[] = static fn ($eq): bool => $eq($reflection->getNumberOfRequiredParameters(), 2);
$tests[] = static fn ($eq): bool => $eq(str_contains($functionContent, "array_reduce"), false);

$tests[] = static fn ($eq): bool => $eq(
    myArrayReduce([1, 2, 3, 5], static function ($carry, $item) {
        $carry *= $item;
        return $carry;
}, 10), 300);

$tests[] = static fn ($eq): bool => $eq(myArrayReduce([1, 2, 3], static fn ($a, $b) => $a + $b), 6);

$tests[] = static fn ($eq): bool => $eq(myArrayReduce([], static fn ($a, $b) => $a + $b, "No data to reduce"), "No data to reduce");

$tests[] = static fn ($eq): bool => $eq(myArrayReduce(["Hello", "i'm", "Flo"], static fn ($a, $b) => $a . "-" .  $b), "-Hello-i'm-Flo");
