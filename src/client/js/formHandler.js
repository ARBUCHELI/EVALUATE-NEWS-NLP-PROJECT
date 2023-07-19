import axios from 'axios';
import { text } from 'body-parser';

// Function to handle form submission
async function handleSubmit(event) {
  event.preventDefault();

  // Get the URL entered by the user
  const urlForCheck = document.getElementById('name').value;
  
  // Check if the URL is valid using a function from the Client object
  const isValidUrl = Client.checkUrl(urlForCheck);

  // If the URL is valid, proceed with API call
  if (isValidUrl) {
    try {
      // Make a POST request to the '/article' endpoint with the URL data
      const response = await axios.post('/article', urlForCheck, {
        headers: {
          'Content-Type': 'text/plain',
        },
      });

      // Extract the response data from the API
      const res = response.data;
      
      // Update the user interface with the API data
      userInterface(res);
    } catch (error) {
      console.error('Error occurred while fetching data:', error);
    }
  } else {
    // If the URL is not valid, show an error message
    const badUrlElement = document.getElementById('bad_url');
    badUrlElement.innerHTML = 'PLEASE TYPE A VALID URL!!!';
    badUrlElement.classList.add('wrong');
  }
}

// Function to update the user interface with API data
const userInterface = (res) => {
  // Get the elements from the DOM to update
  const agreementElement = document.getElementById('agreement');
  const confidenceElement = document.getElementById('confidence');
  const ironyElement = document.getElementById('irony');
  const scoreTagElement = document.getElementById('polarity');
  const subjectivityElement = document.getElementById('subjetivity');
  const textElement = document.getElementById('text');

  // Remove the 'wrong' class from the 'bad_url' element
  document.getElementById('bad_url').classList.remove('wrong');
  
  // Update the user interface with the API data
  agreementElement.innerHTML = `Agreement: ${res.agreement.toLowerCase()}`;
  confidenceElement.innerHTML = `Confidence: ${res.confidence.toLowerCase()}`;
  ironyElement.innerHTML = `Irony: ${res.irony.toLowerCase()}`;
  scoreTagElement.innerHTML = `Polarity: ${res.score_tag.toLowerCase()}`;
  
  // Use the checkSubject function to determine the subjectivity message
  subjectivityElement.innerHTML = `Subjectivity: ${checkSubject(res.subjectivity.toLowerCase())}`;
  
  // Update the text element with the first sentence from the API data
  textElement.innerHTML = `Text: ${res.sentence_list[0].text}`;
};

// Function to check the subjectivity and return a message
function checkSubject(answer) {
  if (answer === 'objective') {
    return "This is an Objective article";
  } else {
    return "The article is biased";
  }
}

// Export the functions to be used in other files
export { handleSubmit, checkSubject };

