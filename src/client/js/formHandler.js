import axios from 'axios';
import { text } from 'body-parser';

async function handleSubmit(event) {
  event.preventDefault();

  const urlForCheck = document.getElementById('name').value;
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
    const badUrlElement = document.getElementById('bad_url');
    badUrlElement.innerHTML = 'PLEASE TYPE A VALID URL!!!';
    badUrlElement.classList.add('wrong');
  }
}

const userInterface = (res) => {
  const agreementElement = document.getElementById('agreement');
  const confidenceElement = document.getElementById('confidence');
  const ironyElement = document.getElementById('irony');
  const scoreTagElement = document.getElementById('score_tag');
  const subjectivityElement = document.getElementById('subjetivity');

  document.getElementById('bad_url').classList.remove('wrong');
  agreementElement.innerHTML = `Agreement: ${res.agreement.toLowerCase()}`;
  confidenceElement.innerHTML = `Confidence: ${res.confidence.toLowerCase()}`;
  ironyElement.innerHTML = `Irony: ${res.irony.toLowerCase()}`;
  scoreTagElement.innerHTML = `Score Tag: ${res.score_tag.toLowerCase()}`;
  subjectivityElement.innerHTML = `Subjectivity: ${res.subjectivity.toLowerCase()}`;
};

export { handleSubmit };
