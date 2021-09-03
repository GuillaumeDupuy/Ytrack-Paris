<?php

$tests = [];

$class = new ReflectionClass('PoolTemps');

$tests[] = static fn ($eq): bool => !$eq($class->getConstructor(), NULL);
$tests[] = static fn ($eq): bool => $class->hasMethod('activateHeater');
$tests[] = static fn ($eq): bool => $eq($class->getInterfaceNames()[0], 'PoolTempsInterface');

$interface = new ReflectionClass('PoolTempsInterface');

$tests[] = static fn ($eq): bool => $interface->isInterface();
$tests[] = static fn ($eq): bool => $interface->hasMethod('getActualTemp');
$tests[] = static fn ($eq): bool => $interface->hasMethod('getLastDaysTemps');
$tests[] = static fn ($eq): bool => $interface->hasMethod('setHeater');

$poolTemps = new PoolTemps(25, [19, 20, 21, 16, 19, 23, 20]);
$poolTemps->activateHeater();

$tests[] = static fn ($eq): bool => !$poolTemps->isActive;

$poolTemps2 = new PoolTemps(26, [24, 26, 27, 25, 27, 23, 20]);
$poolTemps2->activateHeater();

$tests[] = static fn ($eq): bool => $poolTemps2->isActive;