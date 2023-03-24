# Digest collector

This project is designed to simplify the process of collection articles written by
EPAMers.

## How to start

```shell
npm start dev
```

Open http://127.0.0.1:5173/ in the browser (the port could change if it was taken).

## Adding more people to the digest collection list

Add a new item in the [authors.ts](./src/libs/authors.ts).

`type` should be either `medium` or `dev.to`. It's being used for fetching and parsing articles.
