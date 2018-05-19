# Udacity Feed Reader Testing

In this project we are given a web-based application that reads RSS feeds. We have to write a test suite with Jasmine to make sure that the application works fine.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.


## What does it test ?

1. Each feed has a URL defined and that the URL is not empty.
2. Each feed has a name defined and that the name is not empty.
3. The menu element is hidden by default.
4. The menu changes visibility when the menu icon is clicked.
5. When the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
6. When a new feed is loaded by the `loadFeed` function the content changes.


## Running the application

- Download or clone this repository and open index.html locally.
- See it online [here](https://seeila.github.io/Feed-Reader-Testing/)


## Dependencies

The RSS feeds application uses :
- jQuery (2.1.1)
- Jamsine (2.1.2) for unit Testing
- Handelbars JS (2.0.0) for templating
