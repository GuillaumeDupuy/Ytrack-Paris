<?php

$tests = [];

$reflectionReverse = new ReflectionFunction('reverse');

$tests[] = static fn ($eq): bool => $eq($reflectionReverse->getNumberOfRequiredParameters(), 1);
$tests[] = static fn ($eq): bool => $reflectionReverse->hasReturnType();

$tests[] = static fn ($eq): bool => $eq(reverse('Coucou'), 'uocuoC');
$tests[] = static fn ($eq): bool => $eq(reverse('radar'), 'radar');
$tests[] = static fn ($eq): bool => $eq(reverse('Je suis la'), 'al sius eJ');
$tests[] = static fn ($eq): bool => !$eq(reverse('Je suis la'), 'al sius Je');
$tests[] = static fn ($eq): bool => !$eq(reverse('Viens par ici'), 'ici rap viens');
$tests[] = static fn ($eq): bool => !$eq(reverse('Ah ok'), 'ko ah');

$reflectionIsPalindrome = new ReflectionFunction('isPalindrome');

$tests[] = static fn ($eq): bool => $eq($reflectionIsPalindrome->getNumberOfRequiredParameters(), 1);
$tests[] = static fn ($eq): bool => $reflectionIsPalindrome->hasReturnType();

$tests[] = static fn ($eq): bool => isPalindrome('colloc');
$tests[] = static fn ($eq): bool => isPalindrome('axa');
$tests[] = static fn ($eq): bool => isPalindrome('kayak');
$tests[] = static fn ($eq): bool => !isPalindrome('oui');
$tests[] = static fn ($eq): bool => !isPalindrome('manger');
$tests[] = static fn ($eq): bool => !isPalindrome('coder');
