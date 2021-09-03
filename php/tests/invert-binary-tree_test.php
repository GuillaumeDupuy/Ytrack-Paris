<?php

class BinaryNode
{
    public ?int $value = null; // Node value
    public ?BinaryNode $left = null; // Left child
    public ?BinaryNode $right = null; // Right child

    public function __construct(int $value)
    {
        $this->value = $value;
    }
}

function setupBinaryMode(): BinaryNode
{
    $root = new BinaryNode(1);
    $rootLeftChild = new BinaryNode(2);
    $rootRightChild = new BinaryNode(3);
    $rootLeftChildLeftChild = new BinaryNode(4);
    $rootLeftChildRightNode = new BinaryNode(5);
    $rootRightChildLeftChild = new BinaryNode(6);
    $rootRightChildRightNode = new BinaryNode(7);

    $rootLeftChild->left = $rootLeftChildLeftChild;
    $rootLeftChild->right = $rootLeftChildRightNode;

    $rootRightChild->left = $rootRightChildLeftChild;
    $rootRightChild->right = $rootRightChildRightNode;

    $root->left = $rootLeftChild;
    $root->right = $rootRightChild;

    return $root;
}

$tests = [];

$reflecBinary = new ReflectionClass('BinaryNode');

$tests[] = static fn ($eq): bool => !$eq($reflecBinary->getConstructor(), NULL);
$tests[] = static fn ($eq): bool => $eq(count($reflecBinary->getProperties()), 3);

$reflecInvertTree = new ReflectionFunction('invertTree');

$tests[] = static fn ($eq): bool => $eq($reflecInvertTree->getNumberOfRequiredParameters(), 1);
$tests[] = static fn ($eq): bool => $eq($reflecInvertTree->getNumberOfParameters(), 1);

$invertedTree = invertTree(setupBinaryMode());

$tests[] = static fn ($eq): bool => $eq($invertedTree->value, 1);
$tests[] = static fn ($eq): bool => $eq($invertedTree->left->value, 3);
$tests[] = static fn ($eq): bool => $eq($invertedTree->right->value, 2);
$tests[] = static fn ($eq): bool => $eq($invertedTree->left->left->value, 7);
$tests[] = static fn ($eq): bool => $eq($invertedTree->left->right->value, 6);
$tests[] = static fn ($eq): bool => $eq($invertedTree->right->left->value, 5);
$tests[] = static fn ($eq): bool => $eq($invertedTree->right->right->value, 4);