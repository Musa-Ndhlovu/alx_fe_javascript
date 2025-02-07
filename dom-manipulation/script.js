// Assesssment 0
//JS Implementation
document.addEventListener("DOMImplementaion", function(){

});

const submitButton = document.getElementById("submitButton") 

let  showRandomQuote = ["winter", "summer", "spring", "autum"]

const quotes = [
    {text: "Winter is the best weather", category: "Cold"}
    {text: "Summer can be a bit too hot", category: "Heat" }
    {text: "Spring can be very pretty", category: "Leaves"}
    {text: "what happenes in autum?", category: "Weather"}
];

// random quote
function showRandomQuote() {
    if (quotes.length === 0) {
      document.getElementById("quote-box").innerText="No quotes available";
      return;
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex]; 
    document.getElementById("quote-box").innerText= `"{quote.text}" - [${quote.category}]`;

    quoteBox.innerText = `"${quote.text}" - [${quote.category}]`;
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

function addQuoteToDOM(quote) {
    const quoteList = document.getElementById("quote-list");
    const li = document.createElement("li");
    li.textContent = `"${quote.text}" - [${quote.category}]`;
    quoteList.appendChild(li);
}
// Initialize form handling
createAddQuoteForm();

function InitializeQuoteList() {
    quotes.forEach(addQuoteToDOM)
}
InitializeQuoteList();