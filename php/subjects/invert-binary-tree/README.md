### Invert binary tree

### Instructions

Create an `invertTree (BinaryNode): BinaryNode` function which will invert a binary tree.

Using the following code :

```php
// Data tree
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
```

Examples of uses :

```php
/**
 * Exemple d'inversion :
 *
 *      1
 *    /   \
 *   2     3
 *  / \   / \
 * 4   5 6   7
 *
 * Vers :
 *
 *      1
 *    /   \
 *   3     2
 *  / \   / \
 * 7   6 5   4
 */

 // Basic use
 $root = new BinaryNode(1);
 $rootLeftChild = new BinaryNode(2);
 $rootRightChild = new BinaryNode(3);

 $root->left = $rootLeftChild;
 $root->right = $rootRightChild;

 echo $root->value; // 1
 echo $root->left->value; // 2
 echo $root->right->value; // 3

 $invertedTree = invertTree($root);

 echo $invertedTree->value; // 1
 echo $invertedTree->left->value; // 3
 echo $invertedTree->right->value; // 2
```

> Warning ! Your final code must not contain the `BinaryNode` class, it is purely for testing.

### Notions

-   [Binary tree](https://en.wikipedia.org/?title=Binary_tree)
