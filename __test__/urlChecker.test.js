import { checkUrl } from "../src/client/js/urlChecker"

describe('checkUrl function', () => {
    // Test cases for valid URLs
    test('should return true for a valid http URL', () => {
      expect(checkUrl('http://www.example.com')).toBe(true);
    });
  
    test('should return true for a valid https URL', () => {
      expect(checkUrl('https://www.example.com')).toBe(true);
    });
  
    // Test cases for invalid URLs
    test('should return false for an invalid URL with missing protocol', () => {
      expect(checkUrl('www.example.com')).toBe(false);
    });
    
    test('should return false for an invalid URL with invalid domain extension', () => {
      expect(checkUrl('http://www.example.invalid')).toBe(false);
    });
  
    // Edge cases
    test('should return false for an empty input', () => {
      expect(checkUrl('')).toBe(false);
    });
  
    test('should return false for a null input', () => {
      expect(checkUrl(null)).toBe(false);
    });
  });