# BOWT-GUI

Angular Frontend connected to a Spring Boot backend: BOWT-WS.

This project aims to demonstrate the logic of authentication via a JSON Web Token,
allowing a logged user to access a list of boats.


## Run on local

```
npm start
```

The application will run on `http://localhost:4200`

# Improvements

Bellow sections describe possible improvements to this project

## UI/UX

- [AUTH] Handle and warn the user when error happens (e.g. registering under an existing username)
- [AUTH] Warn user of session loss
- [BOAT] Add sorting to the boat list table
- [BOAT] Add pagination to the boat list table
- [BOAT] Enhance boat details dialog design when not in edition
- [BOAT] Display confirmation dialog at boat deletion
- [MISC] Add a home page, accessible without authentication

## Features

- [USER] Allow user to preview his information by clicking on his name from the top-bar
- [BOAT] Add bulk actions (e.g. delete) by selecting multiple boats in the table
- [BOAT] Only display boats created by the connected user
- [AUTH] Restrict some actions (e.g. boat delete) to user with specific roles

## Regulations

- [AUTH] Ask user consent before locally storing any user related data

## Testing

- [MISC] Add unit tests to components
- [MISC] Add e2e tests (e.g. Cypress) to confirm current behaviour prevent future regressions
