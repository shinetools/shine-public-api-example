# Shine Connect API

[![Code Owners](https://img.shields.io/badge/owner-platform-blueviolet?style=flat&logo=github)](./.github/CODEOWNERS)

This projects aims at demonstrating how to use Shine Connect API.  
Not all routes are included, there is both a `GET` and `POST` that should be enough to get you started.

See the full Shine Connect documentation [here](https://developers.shine.fr/v3.0/reference).

## Architecture of the project

## Install

```
yarn install
```

## Configuration

Copy `server/config/config.example.js` to a new `server/config/config.js` and fill the following values

| Variable      | Description                                                                                          |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| CLIENT_ID     | Client ID given at the creation                                                                      |
| CLIENT_SECRET | Secret given at the creation                                                                         |
| SCOPE         | Scope to be granted, will be presented to the user                                                   |
| REDIRECT_URI  | Redirect URI once authorization is granted. Make sure it is whitelisted in the client `redirectURIs` |

## Run

```
yarn dev
```
