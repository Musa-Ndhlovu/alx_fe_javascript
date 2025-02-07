// Assesssment 0
//JS Implementation
document.addEventListener("DOMImplementaion", function(){

});

const submitButton = document.getElementById("submitButton") 

// Array of quotes with text and category
const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Life" },
    { text: "Do what you can, with what you have, where you are.", category: "Inspiration" }
];

// Function to display a random quote
function showRandomQuote() {
    if (quotes.length === 0) {
        document.getElementById("quoteDisplay").textContent = "No quotes available.";
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    document.getElementById("quoteDisplay").textContent = `"${quote.text}" - [${quote.category}]`;
}

// Function to add a new quote
function addQuote() {
    const text = document.getElementById("newQuoteText").value.trim();
    const category = document.getElementById("newQuoteCategory").value.trim();

    if (text === "" || category === "") {
        alert("Please enter both a quote and a category.");
        return;
    }

    // Create a new quote object and add it to the array
    const newQuote = { text, category };
    quotes.push(newQuote);

    // Update the DOM immediately
    addQuoteToDOM(newQuote);

    // Clear input fields
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
}

// Function to add a new quote to the displayed list
function addQuoteToDOM(quote) {
    const quoteList = document.getElementById("quoteList");
    const li = document.createElement("li");
    li.textContent = `"${quote.text}" - [${quote.category}]`;
    quoteList.appendChild(li);
}

// Attach event listener to the button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// Populate the initial list of quotes
function initializeQuoteList() {
    quotes.forEach(addQuoteToDOM);
}
initializeQuoteList();



//Assessment 1
//Step 1 
