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

    document.getElementById("quoteDisplay").innerHTML = `"${quote.text}" - [${quote.category}]`;
}

// Function to add a new quote
function addQuote() {
    const text = document.getElementById("newQuoteText").value.trim();
    const category = document.getElementById("newQuoteCategory").value.trim();

    if (text === "" || category === "") {
        alert("Please enter both a quote and a category.");
        return;
    }

   // creating a form and adding new quotes
function createAddQuoteForm() {
    document.getElementById("quote-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const text = document.getElementById("quote-text").value.trim();
        const category = document.getElementById("quote-category").value.trim();

        if (text && category) {
            const newQuote = {text, category};
            quotesuote.push(newQuote);

addQuoteToDOM(newQuote);

document.getElementById("quote-form").reset();
}  else {
     alert ("Please enter both a quote and a category.");
}

});

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

// Function to update Local Storage when a new quote is added
function saveQuotesToLocalStorage() {
    localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Function to display a random quote & store it in Session Storage
function showRandomQuote() {
    if (quotes.length === 0) {
        document.getElementById("quoteDisplay").textContent = "No quotes available.";
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    // Display the quote
    document.getElementById("quoteDisplay").textContent = `"${quote.text}" - [${quote.category}]`;

    // Store last viewed quote in Session Storage
    sessionStorage.setItem("lastViewedQuote", JSON.stringify(quote));
}

// Function to restore last viewed quote from Session Storage
function restoreLastViewedQuote() {
    const lastQuote = JSON.parse(sessionStorage.getItem("lastViewedQuote"));
    if (lastQuote) {
        document.getElementById("quoteDisplay").textContent = `"${lastQuote.text}" - [${lastQuote.category}]`;
    }
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

    // Save updated quotes to Local Storage
    saveQuotesToLocalStorage();

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

// Initialize event listener for "Show New Quote" button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// Populate the initial list of quotes from Local Storage
function initializeQuoteList() {
    quotes.forEach(addQuoteToDOM);
}

// Run initialization functions
initializeQuoteList();
restoreLastViewedQuote();


//Step 2

// Load existing quotes from Local Storage or use default quotes
let quotes = JSON.parse(localStorage.getItem("quotes")) || [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Life" },
    { text: "Do what you can, with what you have, where you are.", category: "Inspiration" }
];

// Function to update Local Storage when a new quote is added
function saveQuotesToLocalStorage() {
    localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Function to display a random quote
function showRandomQuote() {
    if (quotes.length === 0) {
        document.getElementById("quoteDisplay").textContent = "No quotes available.";
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    document.getElementById("quoteDisplay").textContent = `"${quote.text}" - [${quote.category}]`;

    sessionStorage.setItem("lastViewedQuote", JSON.stringify(quote));
}

// Function to restore last viewed quote from Session Storage
function restoreLastViewedQuote() {
    const lastQuote = JSON.parse(sessionStorage.getItem("lastViewedQuote"));
    if (lastQuote) {
        document.getElementById("quoteDisplay").textContent = `"${lastQuote.text}" - [${lastQuote.category}]`;
    }
}

// Function to add a new quote
function addQuote() {
    const text = document.getElementById("newQuoteText").value.trim();
    const category = document.getElementById("newQuoteCategory").value.trim();

    if (text === "" || category === "") {
        alert("Please enter both a quote and a category.");
        return;
    }

    const newQuote = { text, category };
    quotes.push(newQuote);

    saveQuotesToLocalStorage();
    addQuoteToDOM(newQuote);

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

// JSON Export Function
function exportToJsonFile() {
    const dataStr = JSON.stringify(quotes, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "quotes.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// JSON Import Function
function importFromJsonFile(event) {
    const fileReader = new FileReader();

    fileReader.onload = function(event) {
        try {
            const importedQuotes = JSON.parse(event.target.result);
            
            if (!Array.isArray(importedQuotes) || !importedQuotes.every(q => q.text && q.category)) {
                alert("Invalid file format! Ensure the JSON file contains an array of {text, category} objects.");
                return;
            }

            quotes.push(...importedQuotes);
            saveQuotesToLocalStorage();
            
            document.getElementById("quoteList").innerHTML = "";
            initializeQuoteList();
            
            alert("Quotes imported successfully!");
        } catch (error) {
            alert("Error importing quotes. Please check the JSON file format.");
        }
    };

    fileReader.readAsText(event.target.files[0]);
}

// Initialize the quote list in the UI
function initializeQuoteList() {
    quotes.forEach(addQuoteToDOM);
}

// Event listener for "Show New Quote" button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// Initialize the application
initializeQuoteList();
restoreLastViewedQuote();

//Step 3
[
    {
      "text": "The only limit to our realization of tomorrow is our doubts of today.",
      "category": "Motivation"
    },
    {
      "text": "Life is 10% what happens to us and 90% how we react to it.",
      "category": "Life"
    }
  ]
  