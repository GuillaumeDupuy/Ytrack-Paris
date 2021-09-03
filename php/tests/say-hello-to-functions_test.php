<?php

$tests = [];

$sayHelloReflection = new ReflectionFunction('sayHello');
$sayHelloToReflection = new ReflectionFunction('sayHelloTo');

$tests[] = static fn ($eq): bool => $eq($sayHelloReflection->getNumberOfParameters(), 0);
$tests[] = static fn ($eq): bool => $eq(gettype(sayHello()), 'string');
$tests[] = static fn ($eq): bool => !$eq(gettype(sayHello()), 'NULL');
$tests[] = static fn ($eq): bool => $eq(sayHello(), 'Hello');

$tests[] = static fn ($eq): bool => $eq($sayHelloToReflection->getNumberOfParameters(), 1);
$tests[] = static fn ($eq): bool => $eq($sayHelloToReflection->getNumberOfRequiredParameters(), 1);
$tests[] = static fn ($eq): bool => $eq($sayHelloToReflection->hasReturnType(), true);

$tests[] = static fn ($eq): bool => $eq(sayHelloTo('John'), 'Hello John');

