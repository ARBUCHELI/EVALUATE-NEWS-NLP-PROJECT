import axios from 'axios';
import { text } from 'body-parser';

// Main function used to handle the url entered in the form
const handleSubmit = async (event) => {
  event.preventDefault();

  const urlForCheck = document.getElementById('name').value;
  // Using the checkUrl function
  const isValidUrl = Client.checkUrl(urlForCheck);

  if (isValidUrl) {
    try {
      const response = await axios.post('/article', urlForCheck, {
        headers: {
          'Content-Type': 'text/plain',
        },
      });

      const res = response.data;
      userInterface(res);
    } catch (error) {
      console.error('Error occurred while fetching data:', error);
    }
  } else {
    // Error handling
    const badUrlElement = document.getElementById('bad_url');
    badUrlElement.innerHTML = 'PLEASE TYPE A VALID URL!!!';
    badUrlElement.classList.add('wrong');
  }
};

// Function used to dynamically show the information in the user interface
const userInterface = (res) => {
  const agreementElement = document.getElementById('agreement');
  const confidenceElement = document.getElementById('confidence');
  const ironyElement = document.getElementById('irony');
  const scoreTagElement = document.getElementById('polarity');
  const subjectivityElement = document.getElementById('subjetivity');
  const textElement = document.getElementById('text');

  document.getElementById('bad_url').classList.remove('wrong');
  agreementElement.innerHTML = `Agreement: ${res.agreement.toLowerCase()}`;
  confidenceElement.innerHTML = `Confidence: ${res.confidence.toLowerCase()}`;
  ironyElement.innerHTML = `Irony: ${res.irony.toLowerCase()}`;
  scoreTagElement.innerHTML = `Polarity: ${res.score_tag.toLowerCase()}`;
  subjectivityElement.innerHTML = `Subjectivity: ${checkSubject(res.subjectivity.toLowerCase())}`;
  textElement.innerHTML = `Text: ${res.sentence_list[0].text}`;
};

// Function used to check the subjectivity of the article
const checkSubject = (answer) => {
  if (answer === 'objective') {
    return "This is an Objective article";
  } else {
    return "The article is biased";
  }
};

export { handleSubmit, checkSubject };
