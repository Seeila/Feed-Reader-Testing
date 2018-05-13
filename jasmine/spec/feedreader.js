/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(
   (function() {
      describe("RSS Feeds", function() {
         function definedAndNotEmpty(testSubject) {
            expect(testSubject).toBeDefined();
            expect(testSubject.length).not.toBe(0);
         }

         it("are defined", function() {
            definedAndNotEmpty(allFeeds);
         });

         it("urls are defined and not empty", function() {
            allFeeds.forEach(feed => definedAndNotEmpty(feed.url));
         });

         it("names are defined and not empty", function() {
            allFeeds.forEach(feed => definedAndNotEmpty(feed.name));
         });
      });

      /* TODO: Write a new test suite named "The menu" */

      /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

      /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

      /* TODO: Write a new test suite named "Initial Entries" */

      /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

      /* TODO: Write a new test suite named "New Feed Selection" */

      /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
   })()
);
