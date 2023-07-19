// Function to check if the input text is a valid URL
function checkUrl(inputText) {
  // Regular expression to validate the URL format
  let regexp = /^(https?):\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b(?:\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?$/;
  
  // Return true if the input text matches the URL format, otherwise false
  return regexp.test(inputText);
}

// Export the function to be used in other files
export { checkUrl };

  
