<?php

$tests = [];

$tests[] = static fn ($eq): bool => $eq(capsMe("hello guys"), 'HELLO GUYS');
$tests[] = static fn ($eq): bool => $eq(capsMe("cappppps"), 'CAPPPPPS');

$tests[] = static fn ($eq): bool => $eq(lowerMe("I'M CLINT"), "i'm clint");
$tests[] = static fn ($eq): bool => $eq(lowerMe("I don't speak SPANish"), "i don't speak spanish");

$tests[] = static fn ($eq): bool => $eq(upperCaseFirst("hello My Name is Quentin"), "Hello My Name Is Quentin");
$tests[] = static fn ($eq): bool => $eq(upperCaseFirst("okkkkey let's go"), "Okkkkey Let's Go");

$tests[] = static fn ($eq): bool => $eq(lowerCaseFirst("YeaH BaBe"), "yeaH baBe");
$tests[] = static fn ($eq): bool => $eq(lowerCaseFirst("i'm So tied"), "i'm so tied");

$tests[] = static fn ($eq): bool => $eq(removeBlankSpace("Are you okey ??    "), "Are you okey ??");
$tests[] = static fn ($eq): bool => $eq(removeBlankSpace("   me ? yeah ! "), "me ? yeah !");
