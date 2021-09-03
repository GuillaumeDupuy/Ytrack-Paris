<?php

$tests = [];

$board = [
    ['a', 'b', 'c', 'd'],
    ['d', 'k', 'l', 'm'],
    ['m', 'f', 'b', 's']
];

$tests[] = static fn ($eq): bool => searchWord($board, 'abcd');
$tests[] = static fn ($eq): bool => searchWord($board, 'abcl');
$tests[] = static fn ($eq): bool => searchWord($board, 'admfbl');
$tests[] = static fn ($eq): bool => searchWord($board, 'admfkb');

$tests[] = static fn ($eq): bool => !searchWord($board, 'abcc');
$tests[] = static fn ($eq): bool => !searchWord($board, 'abcdc');
$tests[] = static fn ($eq): bool => !searchWord($board, 'dklml');