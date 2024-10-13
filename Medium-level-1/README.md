
# Question-Answer Matching System

This project implements a simple question-answer system where a user's input is compared against predefined question-answer pairs to find the best match. The match is determined based on word overlap between the input and the questions in the system.

## Functionality Overview

The project consists of two main functions:
- **`normalize(str)`**: A helper function to normalize strings by converting them to lowercase, removing special characters, and trimming whitespace.
- **`findBestMatch(input, pairs)`**: A function that finds the question from predefined pairs that has the most word matches with the user's input and returns the corresponding answer.

### 1. **Data Structure**
An array of question-answer pairs is defined as the knowledge base:
```javascript
const questionAnswerPairs = [
    { question: "What is your name?", answer: "My name is Chatbot." },
    { question: "How can I help you?", answer: "I can assist you with your queries." },
    { question: "What is the weather today?", answer: "The weather is sunny." }
];
