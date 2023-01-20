# Digest collector

This project is designed to simplify the process of collection articles written by
EPAMers.

## How to start

Start the server in one terminal
```shell
npm start --prefix server
```

Start the frontend in another terminal
```shell
npm run dev --prefix frontend
```

Open http://127.0.0.1:5173/ in the browser (the port could change if it was taken).

## Adding more people to the digest collection list

Add a new item in the [authors.ts](frontend/src/authors.ts).

`type` should be either `medium` or `dev.to`. It's being used for fetching and parsing articles.
