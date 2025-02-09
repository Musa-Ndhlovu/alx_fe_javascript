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

//FIXING THE FAILS
document.getElementById["Export Quotes"].addEventListener("click", exportToJsonFile);

function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
  }

  document.getElementById("importQuotes").addEventListener("change", importFromJsonFile);
document.getElementById("importQuotesBtn").addEventListener("click", () => {
    document.getElementById("importQuotes").click();
});

function importFromJsonFile(event) {
    const file = event.target.files[0];
    if (!file) {
        alert("No file selected.");
        return;
    }

    const fileReader = new FileReader();

    fileReader.onload = function(event) {
        try {
            const importedQuotes = JSON.parse(event.target.result);
            
            if (!Array.isArray(importedQuotes) || !importedQuotes.every(q => q.text && q.category)) {
                alert("Invalid file format! Ensure the JSON file contains an array of {text, category} objects.");
                return;
            }

            // Merge new quotes with existing ones
            quotes.push(...importedQuotes);
            saveQuotesToLocalStorage();
            
            // Refresh displayed quotes
            document.getElementById("quoteList").innerHTML = "";
            initializeQuoteList();
            
            alert("Quotes imported successfully!");
        } catch (error) {
            alert("Error importing quotes. Please check the JSON file format.");
        }
    };

    fileReader.readAsText(file);
}

document.getElementById("importQuotes").addEventListener("change", importFromJsonFile);

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
            
            // Clear the current list and refresh with the imported quotes
            document.getElementById("quoteList").innerHTML = "";
            initializeQuoteList();
            
            alert("Quotes imported successfully!");
        } catch (error) {
            alert("Error importing quotes. Please check the JSON file format.");
        }
    };

    fileReader.readAsText(event.target.files[0]);
}

// Ensure you have an event listener to trigger the import
document.getElementById("importQuotes").addEventListener("change", importFromJsonFile);

// Corrected addQuoteToDOM function
function addQuoteToDOM(quote) {
    const quoteList = document.getElementById("quoteList");
    const li = document.createElement("li");
    li.textContent = `${quote.text} - [${quote.category}]`;  
    quoteList.appendChild(li);
}

// Initialize the quote list
function initializeQuoteList() {
    quotes.forEach(addQuoteToDOM);
}

// Populate the initial list of quotes from Local Storage
initializeQuoteList();

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

  //Turning failing checks to pass
  // Function to export quotes as a JSON file
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


//Assessment 2
//step 2

// Function to update Local Storage when a new quote is added
function saveQuotesToLocalStorage() {
    localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Function to extract unique categories and populate the dropdown
function populateCategories() {
    const categoryDropdown = document.getElementById("categoryFilter");

    // Get unique categories from the quotes array
    const categories = [...new Set(quotes.map(q => q.category))];

    // Clear existing options (except "All Categories")
    categoryDropdown.innerHTML = `<option value="all">All Categories</option>`;

    // Populate dropdown with unique categories
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryDropdown.appendChild(option);
    });
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
    populateCategories(); 

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

// Function to filter quotes by selected category
function filterQuotesByCategory() {
    const selectedCategory = document.getElementById("categoryFilter").value;
    const quoteList = document.getElementById("quoteList");

    quoteList.innerHTML = "";

    quotes.forEach(quote => {
        if (selectedCategory === "all" || quote.category === selectedCategory) {
            addQuoteToDOM(quote);
        }
    });
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
            populateCategories(); 
            
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
populateCategories();


// Function to filter and display quotes based on selected category
function filterQuotes() {
    const selectedCategory = document.getElementById("categoryFilter").value;
    const quoteList = document.getElementById("quoteList");

    // Clear existing list
    quoteList.innerHTML = "";

    // Filter quotes and display only those that match the selected category
    quotes.forEach(quote => {
        if (selectedCategory === "all" || quote.category === selectedCategory) {
            addQuoteToDOM(quote);
        }
    });
}

function populateCategories() {
    const categoryDropdown = document.getElementById("categoryFilter");

    // Get unique categories
    const categories = [...new Set(quotes.map(q => q.category))];

    // Clear dropdown (except "All Categories")
    categoryDropdown.innerHTML = `<option value="all">All Categories</option>`;

    // Populate dropdown with unique categories
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryDropdown.appendChild(option);
    });

    // Reapply filtering when categories are updated
    filterQuotes();
}


function filterQuotes() {
    const selectedCategory = document.getElementById("categoryFilter").value;

    // Save the selected category to localStorage
    localStorage.setItem("selectedCategory", selectedCategory);

    const quoteList = document.getElementById("quoteList");
    quoteList.innerHTML = "";  // Clear the current list

    // Filter quotes based on the selected category
    quotes.forEach(quote => {
        if (selectedCategory === "all" || quote.category === selectedCategory) {
            addQuoteToDOM(quote);
        }
    });
}

function populateCategories() {
    const categoryDropdown = document.getElementById("categoryFilter");

    // Get unique categories from the quotes
    const categories = [...new Set(quotes.map(q => q.category))];

    // Clear the dropdown (except "All Categories")
    categoryDropdown.innerHTML = `<option value="all">All Categories</option>`;

    // Populate the dropdown with unique categories
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryDropdown.appendChild(option);
    });

    // Retrieve the last selected category from localStorage
    const savedCategory = localStorage.getItem("selectedCategory");

    if (savedCategory) {
        // Set the dropdown to the saved category
        categoryDropdown.value = savedCategory;
    } else {
        // Default to "All Categories" if no category is saved
        categoryDropdown.value = "all";
    }

    // Apply the filter based on the selected category
    filterQuotes();
}


//Assessment 3
//Step 1 

async function fetchQuotes() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        return data.slice(0, 10); 
    } catch (error) {
        console.error("Error fetching quotes:", error);
        return [];
    }
}
//updates
function fetchQuotesFromServer(interval = 5000) {
    setInterval(async () => {
        let quotes = await fetchQuotes();
        console.log("Updated Quotes:", quotes);
        
    }, interval);
}

// Start fetching every 5 seconds
startFetchingQuotes();

//local Storage
async function fetchAndStoreQuotes() {
    let quotes = await fetchQuotes();
    localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Fetch and store quotes on page load
fetchAndStoreQuotes();



//step 2
async function syncQuotes() {
    try {
        let serverQuotes = await fetchQuotes();
        let localQuotes = JSON.parse(localStorage.getItem("quotes")) || [];

        // Check for differences
        let isDifferent = JSON.stringify(serverQuotes) !== JSON.stringify(localQuotes);
        
        if (isDifferent) {
            console.log("New quotes detected! Updating local storage...");
            localStorage.setItem("quotes", JSON.stringify(serverQuotes));
            updateUI(serverQuotes); 
        }
    } catch (error) {
        console.error("Error syncing quotes:", error);
    }
}

function startQuoteSync(interval = 10000) { 
    setInterval(syncQuotes, interval);
}

// Start syncing
startQuoteSync();

async function syncQuotes() {
    try {
        let serverQuotes = await fetchQuotes();
        let localQuotes = JSON.parse(localStorage.getItem("quotes")) || [];

        // Conflict Resolution: Check if server has new/updated quotes
        if (!arraysAreEqual(serverQuotes, localQuotes)) {
            console.log("Conflict detected! Updating local storage with server data...");
            localStorage.setItem("quotes", JSON.stringify(serverQuotes));
            updateUI(serverQuotes);
        }
    } catch (error) {
        console.error("Error syncing quotes:", error);
    }
}

// Helper function to compare arrays
function arraysAreEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

function updateUI(quotes) {
    const quoteContainer = document.getElementById("quote-list");
    quoteContainer.innerHTML = "";
    
    quotes.forEach((quote) => {
        let quoteItem = document.createElement("div");
        quoteItem.className = "quote";
        quoteItem.className = "quote";
        quoteContainer.appendChild(quoteItem);
    });
}

fetch("method", "POST", "headers", "Content-Type")

//Step 3
async function syncQuotes() {
    try {
        let serverQuotes = await fetchQuotes();
        let localQuotes = JSON.parse(localStorage.getItem("quotes")) || [];

        if (!arraysAreEqual(serverQuotes, localQuotes)) {
            console.log("Conflict detected! Notifying user...");
            showConflictNotification(serverQuotes, localQuotes);
        }
    } catch (error) {
        console.error("Error syncing quotes:", error);
    }
}

// Helper function to compare arrays
function arraysAreEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

function showConflictNotification(serverQuotes, localQuotes) {
    const notification = document.createElement("div");
    notification.id = "conflict-notification";
    notification.innerHTML = `
        <p>New quotes are available. Would you like to update?</p>
        <button onclick="resolveConflict('server', ${JSON.stringify(serverQuotes)})">Use Server Data</button>
        <button onclick="resolveConflict('local', ${JSON.stringify(localQuotes)})">Keep Local Data</button>
    `;
    document.body.appendChild(notification);
}

function resolveConflict(choice, data) {
    if (choice === "server") {
        console.log("User selected server data.");
        localStorage.setItem("quotes", JSON.stringify(data));
    } else {
        console.log("User kept local data.");
    }
    
    // Remove notification after resolving
    document.getElementById("conflict-notification").remove();
    
    // Refresh UI
    updateUI(JSON.parse(localStorage.getItem("quotes")));
}

let quotes = JSON.parse(localStorage.getItem("quotes"));
quotes[0].title = "Manually edited quote!";
localStorage.setItem("quotes", JSON.stringify(quotes));

//step 4
//step 4

test("fetchQuotes() should return an array of quotes", async () => {
    const quotes = await fetchQuotes();
    expect(Array.isArray(quotes)).toBe(true);
    expect(quotes.length).toBeGreaterThan(0);
});
const { syncQuotes } = require("../syncModule");

test("syncQuotes() should detect differences between local and server data", async () => {
    let mockServerQuotes = [{ id: 1, title: "Server Quote" }];
    let mockLocalQuotes = [{ id: 1, title: "Local Edited Quote" }];
    
    localStorage.setItem("quotes", JSON.stringify(mockLocalQuotes));

    let conflictDetected = syncQuotes(mockServerQuotes);
    expect(conflictDetected).toBe(true);
});

const { resolveConflict } = require("../syncModule");

test("resolveConflict() should correctly update localStorage with server data", () => {
    let serverData = [{ id: 1, title: "Updated Server Quote" }];
    
    resolveConflict("server", serverData);
    let storedData = JSON.parse(localStorage.getItem("quotes"));

    expect(storedData).toEqual(serverData);
});


async function sendData(data) {
    try {
      const response = await fetch(mockApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        showNotification("Quotes synced with server!", "success");
      } else {
        showNotification("Failed to sync quotes.", "error");
      }
    } catch (error) {
      showNotification("Error syncing quotes!", "error");
      console.error("Error:", error);
    }
  }