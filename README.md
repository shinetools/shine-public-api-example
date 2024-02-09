# Shine Connect

[![Code Owners](https://img.shields.io/badge/owner-platform-blueviolet?style=flat&logo=github)](./.github/CODEOWNERS)

This projects aims at demonstrating how to use Shine Connect API, including the mTLS setup.  
Not all routes are included, there is both a `GET` and `POST` that should be enough to get you started.

See the full Shine Connect documentation [here](https://developers.shine.fr/v3.0/reference).

## Install

```
yarn install
```

## Usage

Copy `server/config.example.js` to a new `server/config.js` and fill the following values

| Variable      | Description                                                                                          |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| CLIENT_ID     | Client ID given at the creation                                                                      |
| CLIENT_SECRET | Secret given at the creation                                                                         |
| SCOPE         | Scope to be granted, will be presented to the user                                                   |
| REDIRECT_URI  | Redirect URI once authorization is granted. Make sure it is whitelisted in the client `redirectURIs` |

Add the necessary certificates for mTLS connection:

- `server/certificates/QSEAL_KEY.pem`, it should contain your QSEAL key
- `server/certificates/QWAC_KEY.pem`, it should contain your QWAC key
- `server/certificates/QWAC_CERT.pem`, it should contain your QWAC certificate
- `server/certificates/ROOT_CA.pem`, it should contain the certificate chain of the root certificate(s) necessary to use you QWAC certificate

Then run

```
yarn run dev
```
