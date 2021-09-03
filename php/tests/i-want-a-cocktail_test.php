<?php

$tests = [];

$reflecMojito = new ReflectionClass('Mojito');
$mojito = new Mojito();

$tests[] = static fn ($eq): bool => !$eq($reflecMojito->getConstructor(), NULL);
$tests[] = static fn ($eq): bool => $eq(count($reflecMojito->getProperties()), 3);

$tests[] = static fn ($eq): bool => $eq($mojito->price, 8);
$tests[] = static fn ($eq): bool => $eq($mojito->alcoholRate, 0.15);
$tests[] = static fn ($eq): bool => $eq($mojito->ingredients, ['rum', 'lime', 'sparkling water', 'mint', 'sugar']);
