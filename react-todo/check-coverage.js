const fs = require('fs');
const path = require('path');

try {
  const coverageSummary = path.join(__dirname, 'coverage', 'coverage-summary.json');
  if (fs.existsSync(coverageSummary)) {
    const data = JSON.parse(fs.readFileSync(coverageSummary, 'utf8'));
    const total = data.total;
    
    console.log('Coverage Summary:');
    console.log(`Lines: ${total.lines.pct}%`);
    console.log(`Statements: ${total.statements.pct}%`);
    console.log(`Functions: ${total.functions.pct}%`);
    console.log(`Branches: ${total.branches.pct}%`);
    
    if (total.lines.pct >= 80) {
      console.log('✅ Coverage meets requirements');
      process.exit(0);
    } else {
      console.log('❌ Coverage below 80%');
      process.exit(1);
    }
  } else {
    console.log('No coverage report found');
    process.exit(1);
  }
} catch (error) {
  console.error('Error checking coverage:', error);
  process.exit(1);
}
