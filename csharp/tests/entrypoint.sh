#!/bin/sh

set -e

cd /jail

dotnet nuget disable source nuget.org
dotnet nuget add source /dotnetpkg

cp -rf ./student ./repo

mkdir tests && cd tests
cp -rf "/app/${EXERCISE}Tests" /app/tests.csproj /app/Utils.cs .

dotnet restore --packages /dotnetpkg
dotnet test --filter $EXERCISE --no-restore
