<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
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
>>>>>>> c461819c08c0fc247f7c352858dcf341c7dab2fd
