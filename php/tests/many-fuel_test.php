<?php

$reflectionCar = new ReflectionClass('Car');

$tests = [];

$tests[] = static fn ($eq): bool => $reflectionCar->hasProperty('tank');
$tests[] = static fn ($eq): bool => $reflectionCar->hasMethod('setTank');
$tests[] = static fn ($eq): bool => $reflectionCar->hasMethod('ride');

$tests[] = static fn ($eq): bool => $eq(
    (new Car())->setTank(50)
        ->ride(10)
        ->getTank(),
    49.5
);

$tests[] = static fn ($eq): bool => $eq(
    (new Car())->setTank(40)
        ->ride(4)
        ->getTank(),
    39.8
);

$tests[] = static fn ($eq): bool => $eq(
    (new Car())->setTank(25)
        ->ride(6)
        ->getTank(),
    24.7
);