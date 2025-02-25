Modify settings file for text of file review.

Text based JSON fragment:

{
  "github.copilot.chat.reviewSelection.enabled": true,
  "github.copilot.chat.reviewSelection.instructions": [
    {
      "text": "Use underscore for field names."
    },
    {
      "text": "Ensure all functions have JSDoc comments."
    },
    {
      "text": "Check for proper error handling in all functions."
    },
    {
      "text": "Verify that all variables are declared with 'let' or 'const'."
    },
    {
      "text": "Ensure consistent use of single quotes for strings."
    },
    {
      "text": "Check for any potential performance issues."
    },
    {
      "text": "Ensure all promises are properly awaited."
    },
    {
      "text": "Verify that all imported modules are used."
    }
  ]
}

File-based :

{
  "github.copilot.chat.reviewSelection.enabled": true,
  "github.copilot.chat.reviewSelection.instructionsFile": "./copilot-config/copilot-review-instructions.json"
}
