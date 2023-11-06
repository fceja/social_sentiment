# social_sentiment

Description
---
App that uses React as a Client, and Express.JS for Backend.

The app as a whole would return "Social Sentiment" data for a ```stock symbol``` provided by user.
The user would provide a ```stock symbol``` or ```industry selection```, and the app would return and display the following data: date, positive score value, negative score value, and activity value.

This app would retrieve data for free from https://SocialSentiment.io (free api key with account registration).
Unfortunately, the SocialSentiment.io site and API's are no longer live.

Per SocialSentiment.io, their data was being sourced from Twitter, and they could no longer afford to re-activate services after Elon Musk takeover. 😐

With a few edits, this code can me modified to point to a different API source. Posting for visibility.

Installation
---

1. Clone / download repo.

2. Install Node.js:
<pre>https://nodejs.org/en</pre>

MacOS/Linux

3. Open terminal, navigate to project root directory: ```cd ~/social_sentiment```

    1. At project root, cd into ss_client directory: ```cd ~/ss_client```
        1. Then, in terminal enter: ```npm install```
        2. After successfull installation, start client server with ```npm start```
    2. At project root, cd into ss_api directory: ```cd ~/ss_api```
        1. Then, in terminal enter: ```npm install```
        2. After successfull installation, start api server with ```npm start```



4. Open either of the urls in a web browser to view project page:
`http://localhost:3000` OR `http://127.0.0.1:3000`


Screenshot
---

![alt text](ss_client/public/images/screenshot-ui.png "Screenshot of UI")
