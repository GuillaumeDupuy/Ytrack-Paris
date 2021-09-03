# Setup

Install the .NET 5.0 framework here:
https://dotnet.microsoft.com/download

Create a repository named `((ROOT))`

Once created, clone this repo, then get in the folder and run this command:

```sh
dotnet new console
```

This will create two files, including a file named `Program.cs`. This file will be used to let you test your functions.
Once this is done, rename `((ROOT))` to `CSharpDiscovery.csproj` and make sure that line 6 of the file equals to `<RootNamespace>CSharpDiscovery</RootNamespace>`.

If you want to test your code, use :

```sh
dotnet run
```

to get an output of your function in your console.

You can use any IDE, though Virtual Studio Code and the C# extension is recommended (you will be prompted to install it).

# Instructions

Write a function `HelloWorld` that return the string 'Hello World !'.

# Expected Functions

```C#
namespace CSharpDiscovery.Quest01
{
    public class HelloWorld_Exercice
    {
        public static string HelloWorld()
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
using CSharpDiscovery.Quest01;

namespace TestCSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(HelloWorld_Exercice.HelloWorld());
        }
    }
}
```

And its output :

```
$ dotnet run
Hello World !
$
```
