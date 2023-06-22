# Static Landing Page With React Frontend

## Getting Started

Once you've cloned this repository, in the project directory setup the dev environment by\
running `npm run init`. This will install all dependencies for the frontend and server,\
then creates a build folder, and finally runs the development server. You should only need to do this once.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the frontend app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

**It's important to note, if you don't run the server separately, you cannot route through static files.**
**This will be fine for React related development, but you should serve this through the server script below.**

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

The Express server will serve through the build directory, so you'll need a fresh build anytime you change something in React.\
See the `npm run dev` script for more info.

### `npm run dev`

Runs the build script to create a new folder, then runs the backend server for fullstack development.\
Open [http://localhost:4000](http://localhost:4000) to view it in your browser.

The server will reload when you make changes to the backend, and will refresh if a new build is created.\
This will not reload the frontend UI automatically.

You can also opt to run both servers separately. The frontend is proxied to make requests through the backend.

**It's important to note, if you don't run the server separately, you cannot route through static files.**
**This will be fine for React related development, but you should serve this through the server script below.**

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
