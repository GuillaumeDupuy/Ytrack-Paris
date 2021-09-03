<?php

$tests = [];

$reflection = new ReflectionFunction('isPangram');

$tests[] = static fn ($eq): bool => $eq($reflection->getNumberOfRequiredParameters(), 1);
$tests[] = static fn ($eq): bool => $reflection->hasReturnType();

$tests[] = static fn ($eq): bool => isPangram('the quick brown fox jumps over the lazy dog');
$tests[] = static fn ($eq): bool => isPangram('the_quick_brown_fox_jumps_over_the_lazy_dog');
$tests[] = static fn ($eq): bool => isPangram('the 1 quick brown fox jumps over the 2 lazy dogs');
$tests[] = static fn ($eq): bool => isPangram('\Five quacking Zephyrs jolt my wax bed.\\');
$tests[] = static fn ($eq): bool => isPangram('Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich.');

$tests[] = static fn ($eq): bool => !isPangram('');
$tests[] = static fn ($eq): bool => !isPangram('a quick movement of the enemy will jeopardize five gunboats');
$tests[] = static fn ($eq): bool => !isPangram('7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog');
$tests[] = static fn ($eq): bool => !isPangram('the quick brown fish jumps over the lazy dog');
