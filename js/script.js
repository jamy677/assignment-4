// Retrieve elements from the DOM
let quote = document.getElementById("quote"); // Get the element with id "quote"
let author = document.getElementById("author"); // Get the element with id "author"
let btn = document.getElementById("btn"); // Get the button element with id "btn"
let studentInfoDisplay = document.getElementById("student-info-display"); // Get the element with id "student-info-display"

// Define student information
let studentInfo = "200530613  Aryan Jamwal"; // A string containing student information

// Get the button element to display student information
let displayStudentInfoBtn = document.getElementById("display-student-info");

// Define the URL for fetching random quotes from an API
const url = "https://api.quotable.io/random";

// Function to fetch a random quote from the API and update the HTML content
let getQuote = () => {
  fetch(url) // Fetch data from the API
    .then((data) => data.json()) // Convert the response to JSON format
    .then((item) => { // Process the JSON data
      // Update the quote and author elements with the fetched data
      quote.innerText = item.content; // Update the quote text
      author.innerText = item.author; // Update the author text
    });
};

// Function to execute when the window loads
window.addEventListener("load", () => {
  getQuote(); // Call the getQuote function to fetch and display a random quote when the page loads
});

// Add event listener to the button to fetch a new quote when clicked
btn.addEventListener("click", getQuote);

// Function to display student information below the button
let displayStudentInfo = () => {
  studentInfoDisplay.textContent = studentInfo; // Update the text content of the student info display element
};

// Add event listener to the button to display student information when clicked
displayStudentInfoBtn.addEventListener("click", displayStudentInfo);