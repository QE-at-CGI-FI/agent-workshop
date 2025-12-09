List of risks for Eprimer (E-Prime Checking Tool):

- **Input Sanitization Failure (XSS/HTML Injection)**
  - Recognition Approach: Observe if user-submitted text containing script tags or HTML renders as executable code in the output display area
  - Testing Approach: Submit text with various XSS payloads (`<script>alert('XSS')</script>`, event handlers, iframe injections) and verify output is properly escaped
  - Possible Mitigation: Implement HTML encoding/escaping for all user input before displaying results; use Content Security Policy headers
  - Worth the effort? Y

- **Algorithmic Accuracy in E-Prime Detection**
  - Recognition Approach: Test with known E-Prime violations and edge cases; verify discouraged word count matches actual "to be" verb usage
  - Testing Approach: Create test corpus with clear violations (is, are, was, were, be, being, been, am) and borderline cases; compare results against manual review
  - Possible Mitigation: Implement comprehensive regex patterns; add unit tests for linguistic edge cases; document known limitations
  - Worth the effort? Y

- **Performance Degradation with Large Text Volumes**
  - Recognition Approach: Monitor response time and browser performance when processing extremely large text blocks (>100KB)
  - Testing Approach: Submit progressively larger text samples (1KB, 10KB, 100KB, 1MB); measure processing time and check for browser freezing or timeouts
  - Possible Mitigation: Implement input length limits; add client-side chunking for large texts; show processing indicator
  - Worth the effort? Y

- **External Link Security (Insecure HTTP)**
  - Recognition Approach: Inspect network traffic and verify Wikipedia link uses HTTP instead of HTTPS
  - Testing Approach: Click e-prime Wikipedia link and verify connection security; check for MITM vulnerability warnings
  - Possible Mitigation: Update all external links to use HTTPS; implement referrer policy to prevent information leakage
  - Worth the effort? Y

- **Lack of Input Validation/Limits**
  - Recognition Approach: Application accepts any size input without validation or length constraints
  - Testing Approach: Submit extremely large payloads (10MB+), special Unicode characters, null bytes, or malformed data to test boundaries
  - Possible Mitigation: Implement maximum character limit (e.g., 50,000 characters); add client-side validation with user feedback
  - Worth the effort? Y

- **State Persistence Across Sessions**
  - Recognition Approach: User input is not saved; refreshing the page loses all work
  - Testing Approach: Enter text, refresh page, verify data loss; check for localStorage or session storage usage
  - Possible Mitigation: Implement auto-save to localStorage; add export/import functionality for user text
  - Worth the effort? N

- **Accessibility Compliance Gaps**
  - Recognition Approach: Test with screen readers and keyboard-only navigation; verify ARIA labels and semantic HTML
  - Testing Approach: Use automated accessibility scanners (axe, WAVE); perform manual keyboard navigation; test with NVDA/JAWS
  - Possible Mitigation: Add proper ARIA labels; ensure full keyboard navigation; implement focus management; add skip links
  - Worth the effort? Y

- **Missing Error Handling and User Feedback**
  - Recognition Approach: No error messages displayed for invalid operations or processing failures
  - Testing Approach: Trigger edge cases (network failures, browser errors, invalid characters) and verify appropriate error messages appear
  - Possible Mitigation: Implement try-catch blocks; display user-friendly error messages; add loading indicators
  - Worth the effort? Y

- **Calculation Logic Errors**
  - Recognition Approach: Word count or discouraged words count may not accurately reflect actual content
  - Testing Approach: Submit text with known word counts; verify counters match manual count; test with punctuation, contractions, hyphenated words
  - Possible Mitigation: Refine word-counting algorithm; add unit tests for edge cases; document counting methodology
  - Worth the effort? Y

- **Browser Compatibility Issues**
  - Recognition Approach: Application may not function correctly across different browsers or versions
  - Testing Approach: Test on Chrome, Firefox, Safari, Edge (desktop and mobile); verify functionality on older browser versions
  - Possible Mitigation: Add polyfills for unsupported features; test cross-browser regularly; document supported browsers
  - Worth the effort? Y

- **Lack of Rate Limiting**
  - Recognition Approach: No protection against automated abuse or DoS attacks via repeated submissions
  - Testing Approach: Automate rapid successive form submissions; monitor server/client behavior for degradation
  - Possible Mitigation: Implement client-side debouncing; add server-side rate limiting if backend exists; use CAPTCHA for suspicious activity
  - Worth the effort? N

- **Data Privacy and Tracking**
  - Recognition Approach: User text input may be logged, tracked, or transmitted to third parties without consent
  - Testing Approach: Monitor network requests during usage; check for analytics beacons; review privacy policy
  - Possible Mitigation: Clearly document data handling practices; process all text client-side only; add privacy notice
  - Worth the effort? Y
