<?php

$reflecGeo = new ReflectionClass('Geolocation');
$reflecGeoMethod = new ReflectionMethod(Geolocation::class, 'fromGeoPoints');

$tests = [];

$tests[] = static fn ($eq): bool => $eq($reflecGeo->getConstructor(), NULL); // No need constructor
$tests[] = static fn ($eq): bool => $reflecGeo->hasMethod('fromGeoPoints'); // has good method

$tests[] = static fn ($eq): bool => $eq($reflecGeoMethod->getNumberOfParameters(), 4);
$tests[] = static fn ($eq): bool => $eq($reflecGeoMethod->getNumberOfRequiredParameters(), 4);
$tests[] = static fn ($eq): bool => $reflecGeoMethod->isStatic(); // Static method !

$tests[] = static fn ($eq): bool => $eq(Geolocation::fromGeoPoints(40.76, -73.984, 38.89, -77.032), 333.1);
$tests[] = static fn ($eq): bool => $eq(Geolocation::fromGeoPoints(44.859852, -0.555031, 44.854005, -0.566319), 1.1);