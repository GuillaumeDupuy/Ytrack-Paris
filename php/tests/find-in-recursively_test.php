<?php

$tests = [];

$tab = [
    "name" => "forIn",
    "type" => "function",
    "arguments" => [
        "firstParam" => [
            "paramType" => "string",
            "description" => "the value key to find"
        ],
        "secondParam" => "array"
    ],
    "return" => "string or bool",
];

$reflection = new ReflectionFunction('findIn');
$content = getFunctionContent($reflection);

$tests[] = static fn ($eq): bool => $eq($reflection->getNumberOfParameters(), 2);
$tests[] = static fn ($eq): bool => $reflection->hasReturnType();
$tests[] = static fn ($eq): bool => str_contains($content, 'findIn'); // Check recursively

$tests[] = static fn ($eq): bool => $eq(findIn('name', $tab), "forIn");
$tests[] = static fn ($eq): bool => $eq(findIn('description', $tab), "the value key to find");
$tests[] = static fn ($eq): bool => $eq(findIn('secondParam', $tab), "array");
$tests[] = static fn ($eq): bool => $eq(findIn('yeah', $tab), false);