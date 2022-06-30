#!/usr/bin/bash

set -e

cd /app/solutions

if ! test -f "${EXERCISE}_test.sh"; then
	echo "No test file found for the exercise : $EXERCISE"
	exit 1
fi

bash "${EXERCISE}_test.sh"
