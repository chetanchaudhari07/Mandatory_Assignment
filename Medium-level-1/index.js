
const questionAnswerPairs = [
    { question: "What is your name?", answer: "My name is Chatbot." },
    { question: "How can I help you?", answer: "I can assist you with your queries." },
    { question: "What is the weather today?", answer: "The weather is sunny." }
];

function normalize(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').trim();
}

function findBestMatch(input, pairs) {
    let bestMatch = null;
    let maxMatches = 0;


    let inputWords = normalize(input).split(' ');


    pairs.forEach(pair => {

        let questionWords = normalize(pair.question).split(' ');


        let matches = questionWords.filter(word => inputWords.includes(word)).length;


        if (matches > maxMatches) {
            maxMatches = matches;
            bestMatch = pair;
        }
    });


    return bestMatch ? bestMatch.answer : "Sorry, I don't understand the question.";
}


let userInput = "What's the weather like today?";
console.log(findBestMatch(userInput, questionAnswerPairs)); 
