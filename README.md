# librewolf-website

The wip new librewolf website built with [Nextra](https://nextra.vercel.app/) and [Next.js](https://nextjs.org/).

## Getting Started

If you haven't installed it yet, install [Node.js](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable). Then, to install all the dependencies, run this in the source code directory:

```bash
yarn
```

After that, you can run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the website.

All of the content of the website is located in markdown files in the `/pages` directory (for example, the file for `Recommended Addons` is located under `/pages/docs/addons.md`). You can edit those files and the website will automatically be updated.

## How to host

There are two options to host this website

### Run a node.js server

Run `yarn build` to build the site and then `yarn start -p <PORT>` to start a node.js server.

### Generate and serve static files

Run `yarn export` to build the site and export it to static html. The resulting files are located in `./out`.

This method is not recommended since some parts of the website like the windows download button or the FAQ won't be kept up to date.
