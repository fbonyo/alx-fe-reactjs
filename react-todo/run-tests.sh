#!/bin/bash
echo "Running TodoList component tests..."
npm test -- --watchAll=false --testNamePattern="TodoList" 2>&1 | tee test-output.txt

if grep -q "PASS" test-output.txt; then
  echo "✅ Tests passed"
  exit 0
else
  echo "❌ Tests failed"
  exit 1
fi
