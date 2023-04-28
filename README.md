# BedLand

BedLand is an application for managing residential buildings for both managers and residents. 

## Functionalities

### Functionalities for the manager

- Log in
- Check data about buildings, flats and residents
- Check bills information
- Contact residents
- Manage incidents
- Post notices
- Add votings

### Functionalities for the resident

- Log in
- Check data about the flat and the building
- Pay bills
- Contact the manager
- Report incidents
- Check notices
- Vote on building matters

## Technology stack

| Technology | Description |
|-|-|
| [React 18](https://reactjs.org/) | JavaScript library for building user interfaces |
| [TypeScript](https://www.typescriptlang.org/) | A superset of JavaScript which adds static typing |
| [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) | Hyper Text Markup Language |
| [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) | Cascading Style Sheets |
| [Redux](https://redux.js.org/) | JavaScript library for managing application state |
| [Redux Toolkit](https://redux-toolkit.js.org/) | Official tool for better Redux development |
| [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) | Fetching library |
| [styled-components](https://styled-components.com/) | Library for styling React components |
| [ESLint](https://eslint.org/) | A tool for identifying problems with code |
| [Prettier](https://prettier.io/) | Code formatter |
| [Jest](https://jestjs.io/) | JavaScript testing framework |
| [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) | Library for testing React components |
| [Mock Service Worker](https://mswjs.io/) | API mocking library |
| [Storybook](https://storybook.js.org/) | Tool for UI development, testing and documentation |
| [Chromatic](https://www.chromatic.com/) | Tool for Storybook deployment, review and tests |
| [React Chart JS](https://react-chartjs-2.js.org/) | React components for Chart.js (charting library) |
| [React-Toastify](https://fkhadra.github.io/react-toastify/introduction/) | Library for adding toast notifications |
| [React Hook Form](https://react-hook-form.com/) | Library for form state management and validation |

## Setup

1. Download a copy of an existing Git repository.

```
git clone git@bitbucket.org:bedland-cap/bedland-frontend.git
```

2. Navigate to the project repository.

```
cd bedland-frontend
```

3. Install the project's dependencies.

```
npm install
```

4. Run the app in the development mode.

```
npm start
```

5. Start local development server

```
npm run server
```

## Available scripts

In the project directory, you can run:

### npm start 

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. 

### npm run server
Starts json server. It runs on [http://localhost:3001](http://localhost:3001).

### npm run build
Builds the app for production to the `build` folder. 

### npm run eject

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

This command will remove the single build dependency from the project. It will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into the project so you have full control over them. 

### npm run storybook

Starts the storybook. Open [http://localhost:6006/](http://localhost:6006/) to view it in your browser.

### npm run build-storybook

Builds the storybook as a static web app to the `storybook-static` folder. It can then be deployed to any static site hosting service.

### npm run chromatic

Publishes the storybook to the Chromatic.

### npm run test

Runs the tests.

### npm run coverage

Runs the tests and collects the code coverage. You can view coverage files in the `coverage` folder. 

## Status

 BedLand project is still in progress.