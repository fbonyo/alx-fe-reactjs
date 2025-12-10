const { exec } = require('child_process');
const fs = require('fs');

exec('npm test -- --json --testNamePattern="."', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  
  try {
    const testResults = JSON.parse(stdout);
    const passed = testResults.numPassedTests;
    const total = testResults.numTotalTests;
    
    console.log(`Tests passed: ${passed}/${total}`);
    
    if (passed === total && total > 0) {
      console.log('✅ All tests passed!');
      process.exit(0);
    } else {
      console.log('❌ Some tests failed or no tests found');
      process.exit(1);
    }
  } catch (parseError) {
    console.error('Failed to parse test results:', parseError);
    process.exit(1);
  }
});
