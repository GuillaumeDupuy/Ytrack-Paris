<?php

$tests = [];

$tests[] = static fn ($eq): bool => $eq(reverse(['One', 'Two', 'Three']), ['Three', 'Two', 'One']);
$tests[] = static fn ($eq): bool => $eq(reverse(['Js', 'Php', 'Go', 'Html', 'Css']), ['Css', 'Html', 'Go', 'Php', 'Js']);

$tab = [];
push($tab, 'first', 'second', 'five');

$tests[] = static fn ($eq): bool => $eq($tab, $tab);

$tests[] = static fn ($eq): bool => $eq(sum([9, 10, 20]), 39);
$tests[] = static fn ($eq): bool => $eq(sum([0, -1]), -1);

$tabContains = ['Ok', 5, 5.4];

$tests[] = static fn ($eq): bool => arrayContains($tabContains, 5.4);
$tests[] = static fn ($eq): bool => arrayContains($tabContains, 'Ok');
$tests[] = static fn ($eq): bool => !arrayContains($tabContains, 'Nothing');

$firstTab = ['firstTab'];
$secondTab = ['secondTab', 'secondTabb'];
$thirdTab = ['thirdTab'];

$mergedTab = merge($firstTab, $secondTab, $thirdTab);

$tests[] = static fn ($eq): bool => $eq($mergedTab, ['firstTab', 'secondTab', 'secondTabb', 'thirdTab']);
