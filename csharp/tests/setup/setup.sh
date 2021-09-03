#!/bin/sh

set -e

dotnet add package Microsoft.NET.Test.Sdk --version 16.9.4 --package-directory /dotnetpkg
dotnet add package MSTest.TestAdapter --version 2.2.3 --package-directory /dotnetpkg
dotnet add package MSTest.TestFramework --version 2.2.3 --package-directory /dotnetpkg
dotnet add package coverlet.collector --version 3.0.2 --package-directory /dotnetpkg