<p align="center">
	<a href="https://gitmoji.carloscuesta.me">
		<img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square"
			 alt="Gitmoji">
	</a>
</p>

# [https://assisr.com/](https://assisr.com/)

This is the repository for my own personal website.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
Made with ❤ using Typescript.

I try to keep it up to date with the latest javascript stack. For now it is using:

- React hooks
- Typescript
- Styled components
- Redux
- Redux saga

## Credentials

The app uses credentials to fetch data from multiple sources, they are set on the `./.env` file that stands on the root folder.  
The env file look like this:
```BASH
REACT_APP_GOOGLE_API_KEY=MY-GOOGLE-API-KEY
```

### How to get credentials:
- Google/Youtube api key
    - Go to the [youtube documentation](https://developers.google.com/youtube/registering_an_application#create_project) and click on `1 - Open the credentials page`
    - Select or create a project on the top left corner of the page
    - On `Dashboard`, click on `+ Enable apis and services` search for`YouTube Data API v3` and enable it
    - On `Credentials` create a new credential of type `API Key`
    - Set it on `./.env` file

## Available commands

### `npm i` or `yarn`

Install every dependency

### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Deploy the project to github pages