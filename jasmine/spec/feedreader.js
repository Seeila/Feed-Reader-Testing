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
      /* Tests if the there is at least one feed
       * and that all feeds have an url and a name
       */
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

      /* Tests if the menu is initially hidden
       * and that the firsts two clicks show then hide him
       */
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

      // Tests if there is at least a single feed loaded
      describe("Initial Entries", function() {
         beforeEach(done => loadFeed(0, done));

         it("should have at least one entry", function(done) {
            const entriesList = $(".feed .entry");
            expect(entriesList.length).not.toBe(0);
            done();
         });
      });

      // Tests if a neew feed is loaded, the content changes
      describe("New Feed Selection", function() {
         beforeEach(done => loadFeed(0, done));

         it("should change content when a new feed is added", function(done) {
            const feeds = document.querySelectorAll(".feed .entry-link");
            const firstFeedUrl = feeds[0].href;
            const secondFeedUrl = feeds[1].href;
            expect(firstFeedUrl).not.toBe(secondFeedUrl);
            done();
         });
      });
   })()
);
