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
            expect(testSubject).toBeTruthy();
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
         const bodyTag = $("body");
         it("should be hidden", function() {
            expect(bodyTag.hasClass("menu-hidden")).toBe(true);
         });

         it("click on menu icon shows then hides menu", function() {
            const menuIcon = $(".menu-icon-link");
            menuIcon.trigger("click");
            expect(bodyTag.hasClass("menu-hidden")).toBe(false);
            menuIcon.trigger("click");
            expect(bodyTag.hasClass("menu-hidden")).toBe(true);
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
         let firstFeed, secondFeed;
         beforeEach(done => {
            loadFeed(0, function() {
               firstFeed = document.querySelector(".feed .entry-link").href;
               done();
            });
            loadFeed(1, function() {
               secondFeed = document.querySelector(".feed .entry-link").href;
               done();
            });
         });

         it("should change content when a new feed is added", function(done) {
            expect(firstFeed).not.toBe(secondFeed);
            done();
         });
      });
   })()
);
