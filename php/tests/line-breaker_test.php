<?php

$tests = [];

$reflection = new ReflectionFunction('breakLines');

$tests[] = static fn ($eq): bool => $eq($reflection->getNumberOfParameters(), 2);
$tests[] = static fn ($eq): bool => $eq($reflection->hasReturnType(), true);

$tests[] = static fn ($eq): bool => $eq(breakLines("Line with words", 15), "Line with words");
$tests[] = static fn ($eq): bool => $eq(breakLines("Line with words should break", 15), "Line with words\nshould break");
$tests[] = static fn ($eq): bool => $eq(breakLines("Line with words should break at this spot", 15), "Line with words\nshould break at\nthis spot");
$tests[] = static fn ($eq): bool => $eq(breakLines("Title is long\nLine with words break", 12), "Title is\nlong\nLine with\nwords break");
