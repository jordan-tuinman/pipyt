# Electron React Boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I created this boilerplate to solve some issues I faced with getting Electron to work with WSL. After experimenting with different setups, I found using create-react-app and then later adding a few Electron packages, to be the easiest method. I removed some unnecessary files and created one simple component to leave this as a barebones boilerplate to be reused again for future projects. 

Note: if using windows 10 - run 'npm install' via powershell, then switch over to WSL if desired. If 'npm install' is done via WSL, it seems to create issues with the Electron packages. 

## Available Scripts

Basic React scripts remain the same, but with two added Electron scripts:

#### `npm dev`

Runs the app in Electron, and opens dev tools in a separate window (personal preference). 
Concurrently runs the React script 'npm start', prevents browser from opening, and runs electron by running the below 'npm electron' script. 

#### `npm electron`

This script is run concurrently with the above, not intended to be run by itself. 

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

