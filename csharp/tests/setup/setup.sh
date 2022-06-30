#!/bin/sh

set -e

dotnet add package Microsoft.NET.Test.Sdk --version 17.1.0 --package-directory /dotnetpkg
dotnet add package MSTest.TestAdapter --version 2.2.8 --package-directory /dotnetpkg
dotnet add package MSTest.TestFramework --version 2.2.8 --package-directory /dotnetpkg
dotnet add package coverlet.collector --version 3.1.2 --package-directory /dotnetpkg