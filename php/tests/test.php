<?php

spl_autoload_register(static fn ($className) => include $className . '.php');

(new Tester())->run();
