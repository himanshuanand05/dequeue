Exercises
Challenge 1
Create an app using any language you prefer, that searches the Google Books API using the following requirements:

You should include pagination, showing only 10 results at a time
Each result should be formatted as First author [, second author [, third author...]] - Title
You should be able to click a result and it should expand to show its description if one exists. If there is no description, use your judgment.
The search as a whole should also return the:
total number of search results,
name of the single author who appears most commonly in the results,
earliest and most recent publication dates within the search parameters,
and the server response time
You will not be judged on design. If you can make it look good and make it accessible, even better.

When you're done, please host the challenge on Github, Bitbucket, Gitlab, or another hosted version control, or send us a package we can set up ourselves.

Challenge 2
For this challenge, you’ll be taking our open-source axe-web drivers integration, used to run web accessibility tests in JavaScript projects using Selenium.

Create the following:

A new JavaScript project
Using Selenium and whatever JavaScript-based testing framework you prefer, reach out to the following URL: https://dequeuniversity.com/demo/mars
Create two (2) test cases:
Ensure the main-nav (CSS selector) has been loaded, and
Perform an accessibility scan of the page
Integrate [@axe-core/webdriverjs](https://www.npmjs.com/package/@axe-core/webdriverjs) into the accessibility scan test case (the second bullet above)
Return the results from the scan to the console. Bonus points for using assertions to check violations.
You may use all publicly available resources to help you get this set up and running.

When you're done, please host the challenge on Github, Bitbucket, Gitlab, or another hosted version control, or send us a package we can set up ourselves.