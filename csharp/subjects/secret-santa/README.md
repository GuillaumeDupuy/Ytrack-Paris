# Instructions

🎅🏼  Oh, oh oh, Christmas is coming ! ❄️

On that occasion, you are planning to do a Secret Santa,
your job is simple: for every people in the list, you have to randomly assign a person to whom they give a lil' gift 🎁

Write a function `SecretSanta` that takes a HashSet of names and returns a Dictionary who tell who is supposed to offer a gift to whom.
Make sure nobody is offering a gift to himself 😬

Be careful ! your function is supposed to choose randomly, calling your function twice needs to give you 2 differents answers

# Expected Functions

```C#
namespace CSharpDiscovery.Quest02
{
    public class SecretSanta_Exercice
    {
        public static Dictionary<string,string> SecretSantaDraw(HashSet<string> people)
        {
            // Your code
        }
    }
}
```

# Usage

Here is a possible Program.cs file to test your function :

```C#
using System;
using System.Collections.Generic;
using CSharpDiscovery.Quest02;

namespace TestCSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            var people = new HashSet<string> { "Arnaud", "Marie", "Alexandre", "Audrey", "Adrien", "Mathilde", "Théophile", "Hanako" };
            var draw = SecretSanta_Exercice.SecretSantaDraw(people);

            foreach (KeyValuePair<string, string> pair in draw) {
                Console.WriteLine("{0} is offering to {1}", pair.Key, pair.Value);
            }
        }
    }
}
```

And its possible output :

```
$ dotnet run
Alexandre is offering to Mathilde
Mathilde is offering to Arnaud
Adrien is offering to Hanako
Marie is offering to Arnaud

$ dotnet run
Audrey is offering to Alexandre
Alexandre is offering to Mathilde
Théophile is offering to Arnaud
Mathilde is offering to Hanako
```

# Notions

- [HashSet](https://docs.microsoft.com/fr-fr/dotnet/api/system.collections.generic.hashset-1)
- [Dictionary](https://docs.microsoft.com/fr-fr/dotnet/api/system.collections.generic.dictionary-2)
