# PiPYT

PiPYT is a picture-in-picture YouTube player for PC. You can search in app, and play any YouTube video without ads, all in a small screen that always sits on top of your other windows.

I created this wee app to solve a problem for myself. What I wanted was to be able to watch YouTube tutorials and videos in a pop-out style window on my PC, similar to on a phone. I thought this would be really handy, especially for those times where I might be working in a cafe or somewhere without a second screen and I need my main work window maximised.

If you would like to try it out on your own machine, feel free to clone this repo and follow the steps below:

## Running PiPYT

- Run npm install
  
Note: if using windows 10 - run 'npm install' via powershell, then switch over to WSL if desired. If 'npm install' is done via WSL, it seems to create issues with the Electron packages.

- Get your own YouTube API key, then copy and paste it into the 'apiKey' variable located in 'src/apis/index.js'
  
Follow the instructions [here](https://developers.google.com/youtube/v3/getting-started) to get your own YouTube API key if you don't already know how. For each API key, you can make up to YouTube 100 searches per day.

- Save, and then run the script 'npm run dev' to start PiPYT

If you would like to package the app to use more easily on your own PCs, you will need to look into this yourself, as I haven't yet done this for myself either.

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
