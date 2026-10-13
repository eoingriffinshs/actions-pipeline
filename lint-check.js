const fs = require('fs');
const path = require('path');

// List the files we want to check
const filesToCheck = ['index.js', 'test.js'];

let hasErrors = false;

// Loop through each file and run checks
filesToCheck.forEach((file) => {
  const filePath = path.join(__dirname, file);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    console.error(`Missing file: ${file}`);
    hasErrors = true;
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Warn about console.log statements
  if (content.includes('console.log')) {
    console.warn(`Warning: ${file} contains console.log statements`);
  }

  // Check that the file isn't empty
  if (content.length === 0) {
    console.error(`Error: ${file} is empty`);
    hasErrors = true;
  } else {
    console.log(`OK: ${file} passed checks`);
  }
});

// Exit with error code if any checks failed
if (hasErrors) {
  process.exit(1);
} else {
  console.log('All files passed lint checks!');
  process.exit(0);
}