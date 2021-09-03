<?php

declare(strict_types=1);

class Tester
{
    private const STUDENT_SOLUTION_BASE_PATH = "/jail/student/";
    private const SOLUTION_BASE_PATH = "../app/";

    private const PROHIBITED_EXERCISE_NAMES = ['test', 'utils', 'Tester'];

    private ?string $exerciseName = null;

    public function run(): void
    {
        $this->retrieveExerciseName();
        $this->checkFiles();

        ob_start(); // Turn on output buffering

        require_once "utils.php";
        require_once self::STUDENT_SOLUTION_BASE_PATH . $this->exerciseName  . '.php'; // Student Solution
        require_once self::SOLUTION_BASE_PATH . $this->exerciseName  . '_test.php'; // Solution

        $eq = fn ($a, $b): bool => $a === $b;

        foreach ($tests as $i => $t) {
            try {
                if (!$t($eq, $this->exerciseName)) {
                    throw new Error('Test failed', 1);
                }
            } catch (Error $e) {
                $this->fatal("Test #" . $i + 1 . " failed \n \nError: " . $e->getMessage());
            }
        }

        ob_get_clean(); // Clean the current buffer because we just want the next echo displayed

        echo "Exercise " . $this->exerciseName . ' passed (' . count($tests) . ' tests)';
    }

    private function retrieveExerciseName(): void
    {
        $exerciseName = getopt('t:', ['required:'])['t'] ?? null;
        if (null === $exerciseName) {
            $this->fatal("Missing exercise, usage: \nphp test.php -texercise-name");
        }

        $exerciseName = strtolower(trim($exerciseName));
        if (in_array($exerciseName, self::PROHIBITED_EXERCISE_NAMES, true)) {
            $this->fatal("Can't execute test for this filename.");
        }

        $this->exerciseName = $exerciseName;
    }

    private function checkFiles(): void
    {
        if (!file_exists(self::STUDENT_SOLUTION_BASE_PATH . $this->exerciseName . '.php')) {
            $this->fatal("Unable to find student solution.");
        }

        if (!file_exists(self::SOLUTION_BASE_PATH . $this->exerciseName  . '_test.php')) {
            $this->fatal("Unable to find solution.");
        }

        // Prevents smart kids from skipping the exercise ;)
        $studentSolutionContent = file_get_contents(self::STUDENT_SOLUTION_BASE_PATH . $this->exerciseName  . '.php');
        if (str_contains($studentSolutionContent, 'exit') || str_contains($studentSolutionContent, 'exit(')) {
            $this->fatal("It's forbidden to use the exit function ! \nIt's not good to want to cheat... :(");
        }
    }

    private function fatal(string $message): void
    {
        echo $message;
        exit(1);
    }
}