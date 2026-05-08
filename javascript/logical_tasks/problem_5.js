// 5. Longest Word in Sentence
// Problem Statement
// Write a function that finds the longest word in a sentence.

// input
const sentence = "JavaScript is powerful for backend and frontend development";

//function call and print output
console.log(get_longest_word(sentence));

function get_longest_word(sentence) {
    return sentence.split(" ").reduce((longest, value) => {
        if (value.length > longest.length) {
            return value;
        } else {
            return longest
        }
    });
}

