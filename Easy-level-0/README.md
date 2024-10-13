# normalizeString Function

This JavaScript function `normalizeString` takes an input string, cleans and normalizes it, and converts it to a camel-case-like format. It removes special characters, trims spaces, and formats the words properly.

## Function Breakdown

### Purpose
The `normalizeString` function processes a given string by:
1. **Trimming**: Removing extra spaces at the beginning and end.
2. **Cleaning**: Removing special characters, leaving only alphanumeric characters and spaces.
3. **Replacing multiple spaces**: Reducing any consecutive spaces to a single space.
4. **Converting to Camel Case**: Capitalizing the first letter of each word while making the rest of the letters lowercase.

### Code Explanation

```javascript
function normalizeString(input) {
    
    // Step 1: Remove extra spaces at the start and end of the string
    let trimmed = input.trim();

    // Step 2: Remove all non-alphanumeric characters except spaces
    let cleaned = trimmed.replace(/[^a-zA-Z0-9\s]/g, '');

    // Step 3: Replace multiple spaces with a single space
    let singleSpaced = cleaned.replace(/\s+/g, ' ');

    // Step 4: Convert to Camel Case (capitalize first letter of each word)
    let camelCase = singleSpaced.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

    return camelCase;
}

// Example usage:
let input = " Hello! World@ This is a Test!. ";
console.log(normalizeString(input)); 
// Output: "Hello World This Is A Test"