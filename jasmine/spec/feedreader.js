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

      describe("The Menu", function() {
         it("should be hidden", function() {
            expect($("body").hasClass("menu-hidden")).toBe(true);
         });

         it("click on menu icon shows then hides menu", function() {
            const menuIcon = $(".menu-icon-link");
            menuIcon.trigger("click");
            expect($("body").hasClass("menu-hidden")).toBe(false);
            menuIcon.trigger("click");
            expect($("body").hasClass("menu-hidden")).toBe(true);
         });
      });

      describe("Initial Entries", function() {
         beforeEach(done => loadFeed(0, done));

         it("should have at least one entry", function(done) {
            const entriesList = $(".feed .entry");
            expect(entriesList.length).not.toBe(0);
            done();
         });
      });

      /* TODO: Write a new test suite named "New Feed Selection" */

      /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
   })()
);
