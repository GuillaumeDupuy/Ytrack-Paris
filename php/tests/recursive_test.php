<?php

function newFactorial(int $number): float
{
    if ($number <= 1) {
        return 1;
    }
    return $number * newFactorial($number - 1);
}
echo newFactorial(45);

$tests = [];

$reflection = new ReflectionFunction('factorial');
$content = getFunctionContent($reflection);

$tests[] = static fn ($eq): bool => $eq($reflection->getNumberOfParameters(), 1);
$tests[] = static fn ($eq): bool => $reflection->hasReturnType();
$tests[] = static fn ($eq): bool => str_contains($content, 'factorial'); // Check recursively

$tests[] = static fn ($eq): bool => $eq(factorial(1), 1);
$tests[] = static fn ($eq): bool => $eq(factorial(2), 2);
$tests[] = static fn ($eq): bool => $eq(factorial(3), 6);
$tests[] = static fn ($eq): bool => $eq(factorial(4), 24);
$tests[] = static fn ($eq): bool => $eq(factorial(5), 120);
$tests[] = static fn ($eq): bool => $eq(factorial(6), 720);
$tests[] = static fn ($eq): bool => $eq(factorial(45), newFactorial(45));
$tests[] = static fn ($eq): bool => $eq(factorial(1000), INF);
