document.addEventListener("DOMContentLoaded", () => {
    // Retrieve elements from the DOM
    let quote = document.getElementById("quote");
    let author = document.getElementById("author");
    let btn = document.getElementById("btn");
    let studentInfoDisplay = document.getElementById("student-info-display");
  
    // Define student information
    let studentInfo = "200530613  Aryan Jamwal";
  
    // Get the button element to display student information
    let displayStudentInfoBtn = document.getElementById("display-student-info");
  
    // Define the URL for fetching random quotes from an API
    const url = "https://api.quotable.io/random";
  
    // Function to fetch a random quote from the API and update the HTML content
    let getQuote = () => {
      fetch(url)
        .then((data) => data.json())
        .then((item) => {
          quote.innerText = item.content;
          author.innerText = item.author;
        });
    };
  
    // Function to execute when the window loads
    window.addEventListener("load", () => {
      getQuote();
    });
  
    // Add event listener to the button to fetch a new quote when clicked
    btn.addEventListener("click", getQuote);
  
    // Function to display student information below the button
    let displayStudentInfo = () => {
      studentInfoDisplay.textContent = studentInfo;
    };
  
    // Add event listener to the button to display student information when clicked
    displayStudentInfoBtn.addEventListener("click", displayStudentInfo);
  });
  