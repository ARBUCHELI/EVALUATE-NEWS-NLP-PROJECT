// Function used to check the validity of the url
const checkUrl = (inputText) => {
  let regexp = /^(https?):\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b(?:\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?$/;
  return regexp.test(inputText);
};

export { checkUrl };

