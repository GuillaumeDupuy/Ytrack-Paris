<?php

$tests = [];

$abstractClass = new ReflectionClass('AbstractGeometry');

$tests[] = static fn ($eq): bool => $abstractClass->isAbstract();
$tests[] = static fn ($eq): bool => $abstractClass->hasMethod('area');
$tests[] = static fn ($eq): bool => $abstractClass->hasMethod('perimeter');

$reflectionRectangle = new ReflectionClass('Rectangle');

$tests[] = static fn ($eq): bool => !$eq($reflectionRectangle->getConstructor(), NULL);
$tests[] = static fn ($eq): bool => $eq(get_parent_class('Rectangle'), 'AbstractGeometry');
$tests[] = static fn ($eq): bool => $eq(count($reflectionRectangle->getProperties()), 2);

$rectangle = new Rectangle(6, 3);

$tests[] = static fn ($eq): bool => $eq($rectangle->area(),  18);
$tests[] = static fn ($eq): bool => $eq($rectangle->perimeter(), 18);

$reflectionSquare = new ReflectionClass('Square');

$tests[] = static fn ($eq): bool => !$eq($reflectionSquare->getConstructor(), NULL);
$tests[] = static fn ($eq): bool => $eq(get_parent_class('Square'), 'AbstractGeometry');
$tests[] = static fn ($eq): bool => $eq(count($reflectionSquare->getProperties()), 1);

$square = new Square(9);

$tests[] = static fn ($eq): bool => $eq($square->area(), 81);
$tests[] = static fn ($eq): bool => $eq($square->perimeter(), 36);

$reflectionTriangle = new ReflectionClass('Triangle');

$tests[] = static fn ($eq): bool => !$eq($reflectionTriangle->getConstructor(), NULL);
$tests[] = static fn ($eq): bool => $eq(get_parent_class('Triangle'), 'AbstractGeometry');
$tests[] = static fn ($eq): bool => $eq(count($reflectionTriangle->getProperties()), 3);

$triangle = new Triangle(6, 6, 6);

$tests[] = static fn ($eq): bool => $eq($triangle->area(), $triangle->area());
$tests[] = static fn ($eq): bool => $eq($triangle->perimeter(), 18);