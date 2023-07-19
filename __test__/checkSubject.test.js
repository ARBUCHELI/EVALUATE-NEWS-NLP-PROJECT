import { checkSubject } from '../src/client/js/formHandler';

// Test case for objective subjectivity
test('checkSubject should return "This is an Objective article" for input "objective"', () => {
  const result = checkSubject('objective');
  expect(result).toBe('This is an Objective article');
});

// Test case for biased subjectivity
test('checkSubject should return "The article is biased" for input other than "objective"', () => {
  const result = checkSubject('biased');
  expect(result).toBe('The article is biased');
});
