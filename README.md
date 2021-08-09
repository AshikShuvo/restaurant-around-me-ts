# Khabo Koi?

## Description

It is a kind of app which will help you to find restaurants around your 3 km area. First it will ask for permission of user's location. If user accept the request it will show the restaurants on the map by marker. A user can search by restaurant name on the top of the side bar. Search result shown in the side bar. if a user click on any restaurant from side bar the map will show direction from the user coordinate to the selected restaurant's coordinate.

## Used Technology 
-Reactjs with Typescript template
-Redux
-Ant ui library.
-Google Map Api Service
-Foursquare place api service

## Features
-Show restaurants around the user's location.
-Search restaurants by name.
-show user to restaurant location on selecting one.

### Run/Build Instructions
- `node` and `git` must have been installed  
- Run `git clone https://github.com/AshikShuvo/restaurant-around-me-ts.git` to clone the repository 
- Run `npm install` to install all the dependencies  
- Run `npm start` to run the project locally. It will run the project on port 3000
- Run `npm run build` to build

### Additional library
-`Axios` for data fetching.
-`@reduxjs/toolkit` and `react-redux` for redux.
-`antd` for Ant ui design library.

#### Folder Structure

```
Restaurant-around-me-ts
├── README.md
├── node_modules
├── package.json
├─ .gitignore
├─ .env
├─ tsconfig.json
├─ package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets
    ├── component
    ├── pages
    ├── Model
    ├── Store
    ├── App.tsx
    ├── App.test.ts
    ├── index.css
    ├── index.tsx
    ├── logo.svg
    ├── react-app-env.d.ts
    ├── reportWebVitals.ts
    └── setupTest.ts
```