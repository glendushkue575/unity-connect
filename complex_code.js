// filename: complex_code.js

/**
 * This code demonstrates a complex implementation of a quote generator.
 * It fetches quotes from an external API and displays them on a web page.
 * The user can also search for quotes based on specific criteria.
 */

// Constants
const API_URL = "https://quote-generator-api.com/api/v1/quotes";
const MAX_QUOTES = 500;
const DEFAULT_QUOTES_PER_PAGE = 10;

// Variables
let quotes = [];
let currentPage = 1;
let quotesPerPage = DEFAULT_QUOTES_PER_PAGE;

// Fetch quotes from API
async function fetchQuotes() {
  try {
    const response = await fetch(`${API_URL}?limit=${MAX_QUOTES}`);
    const data = await response.json();
    quotes = data.quotes;
    console.log(`Fetched ${quotes.length} quotes from API.`);
  } catch (error) {
    console.error("Error fetching quotes:", error);
  }
}

// Display quotes on web page
function displayQuotes() {
  const startIndex = (currentPage - 1) * quotesPerPage;
  const endIndex = startIndex + quotesPerPage;
  const currentQuotes = quotes.slice(startIndex, endIndex);

  const quotesContainer = document.getElementById("quotes-container");
  quotesContainer.innerHTML = "";

  currentQuotes.forEach((quote) => {
    const quoteElement = document.createElement("div");
    quoteElement.classList.add("quote");
    quoteElement.innerHTML = `<p>${quote.text}</p><span>- ${quote.author}</span>`;
    quotesContainer.appendChild(quoteElement);
  });

  // Update pagination
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";
  const numPages = Math.ceil(quotes.length / quotesPerPage);
  for (let i = 1; i <= numPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.innerText = i;
    pageButton.addEventListener("click", () => {
      currentPage = i;
      displayQuotes();
    });
    pagination.appendChild(pageButton);
  }
}

// Search quotes based on criteria
function searchQuotes(criteria) {
  const filteredQuotes = quotes.filter((quote) => {
    return (
      quote.text.toLowerCase().includes(criteria.toLowerCase()) ||
      quote.author.toLowerCase().includes(criteria.toLowerCase())
    );
  });

  displayQuotes(filteredQuotes);
}

// Event listeners
document.getElementById("search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const searchInput = document.getElementById("search-input");
  const criteria = searchInput.value.trim();
  searchQuotes(criteria);
});

// Load quotes and display on page load
window.addEventListener("load", async () => {
  await fetchQuotes();
  displayQuotes();
});