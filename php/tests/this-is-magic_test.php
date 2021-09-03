<?php

$reflectionMagic = new ReflectionClass('Magic');

$tests = [];

$tests[] = static fn ($eq): bool => $reflectionMagic->hasProperty('card');
$tests[] = static fn ($eq): bool => $reflectionMagic->hasMethod('__construct');
$tests[] = static fn ($eq): bool => $reflectionMagic->hasMethod('__destruct');
$tests[] = static fn ($eq): bool => $reflectionMagic->hasMethod('__get');
$tests[] = static fn ($eq): bool => $reflectionMagic->hasMethod('__set');
$tests[] = static fn ($eq): bool => $reflectionMagic->hasMethod('__isset');
$tests[] = static fn ($eq): bool => $reflectionMagic->hasMethod('__toString');