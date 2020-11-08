# Perot App - [Promo Video](https://youtu.be/lCirZUXoW6E)

Perot App is a collection of two full-stack applications built for the Perot Museum located in Dallas, TX:
1. **Perot Service** - A webapp for the Perot Employees/Volunteers to manage content served on the Perot Experience mobile app.
2. **Perot Experience** - An Android/iOS app that focuses on user engagement within the Perot Museum with interactive games and activities. Perot Experience also creates a curated (by the employees through the Perot Service app) museum experience for guests to manage traffic throughout the museum. 

## Prerequisites to run locally

- `nodejs` - [instructions](https://nodejs.org/en/download/)
- `watchman` - [instructions](https://facebook.github.io/watchman/docs/install.html)
- `vue-cli` - [instructions](https://cli.vuejs.org/guide/installation.html)
- `expo-cli` - [instructions](https://reactnative.dev/docs/environment-setup)
- `mongodb` - [instructions](https://forceforgood.atlassian.net/wiki/spaces/IPMT1/pages/1848049763/Setting+up+dev-environment#Getting-started)
- `Expo app` - [Download iOS](https://apps.apple.com/app/apple-store/id982107779) / [Download Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)

## Documentations

These are ISG - Perot Museum - Team 1 internal documentations, guides and team guidelines.

- [API Documentation](https://documenter.getpostman.com/view/12165658/T1DqfGH6?version=latest)
- [(iOS) Getting started with React Native](https://forceforgood.atlassian.net/wiki/spaces/IPMT1/pages/1841038682/iOS+Getting+started+with+React+Native)
- [(Android) Getting started with React Native](https://forceforgood.atlassian.net/wiki/spaces/IPMT1/pages/1844416053/Android+Getting+started+with+React+Native)
- [Setting up dev-environment](https://forceforgood.atlassian.net/wiki/spaces/IPMT1/pages/1848049763/Setting+up+dev-environment)
- [Perot App File Structure and Guidelines](https://forceforgood.atlassian.net/wiki/spaces/IPMT1/pages/1848060744/Perot+App+File+Structure+and+Guidelines)

## Before running

Check to see if you have the folders in your directory. If not, follow [Getting Started from here](https://forceforgood.atlassian.net/wiki/spaces/IPMT1/pages/1848049763/Setting+up+dev-environment#Getting-started).

- `perot-db` in the source folder

  ![enter image description here](https://imgur.com/qR0bHbO.jpg)

- `mongodb` folder in the `perot-backend` directory

  ![enter image description here](https://imgur.com/B7e8spv.jpg)

- How to set up dev-environment for backend is explained much more clearly and in-depth [here](https://forceforgood.atlassian.net/wiki/spaces/IPMT1/pages/1848049763/Setting+up+dev-environment#Getting-started)

- `npm i` in both `perot-backend` and `perotExperience` folder to have the most up-to-date packages installed on your machine

# Automatic (Only for MacOS/Linux)

## Auto-boot all the processes

In the repository directory run `./bootup.sh` to open bunch of terminals that will automatically install/update all the packages and start perot-backend, perotExperience and perot-service

![auto boot output example](https://imgur.com/uZyNc63.jpg)

# Manual

## perot-backend

Backend of the app using express, cors and mongoose. Contains authentication, api, database access etc.

### Instructions to run backend

Make sure to have your terminal open in the backend folder

1. `npm i` to update packages

2. `npm run database` or `npm run databaseWin` - for Windows systems - to start mongodb instance

![npm run database output example](https://imgur.com/VLgemjP.jpg)

3. `npm run start` to start the backend server

![npm run start output example](https://imgur.com/OsxAGlq.jpg)

## perotExperience

Frontend of the app. Contains UI components.

### Instructions to run perotExperience

Make sure terminal is open in the `perotExperience` directory before running these commands

1.  `npm i` to update packages

2.  `expo start` to start expo server

![expo start output example](https://imgur.com/fUXERCc.jpg)

3.  Scan the QR code expo generated using the camera app on your phone, or run on a simulator by clicking `i` for iPhone, `a` for android or `w` for web. Must have the simulators installed beforehand.

![Running on iOS Simulator example](https://imgur.com/wOgXHnL.jpg)

## perot-service

Perot Employee service portal web-app to add, modify and delete perot experience app contents

### Instructions to run perot-service

Make sure terminal is open in the `perot-service` directory before running these commands

1.  `npm i` to update packages

2.  `npm run serve` to start the webpack server

![npm run serve output example](https://imgur.com/KiJFft8.jpg)

3.  Go to `http://localhost:8080` to view the web-app

![perot service on the browser example](https://imgur.com/M4H7n6D.jpg)

**Note:** Make sure to have perot-backend before starting perot-service
