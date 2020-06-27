<p align="center">
	<a href="https://gitmoji.carloscuesta.me">
		<img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square"
			 alt="Gitmoji">
	</a>
</p>

# [https://assisr.com/](https://assisr.com/)

This is the repository for my personal website.

It is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

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
