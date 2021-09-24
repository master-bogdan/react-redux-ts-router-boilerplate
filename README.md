# React-Redux-TypeScript boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Scalable start boilerplate for react-redux-typescript pattern  
It boilerplate was created for new project quick setup. I try to put here all best practices from react world and my experience. You can easy manage project structure. Change styles for SCSS or styled-components

### Instalation
- Clone the repository
- ```cd /to your local folder```
- In terminal run ```yarn``` or ```npm install```

### Packets inside
- CRA + TS
- react-router-dom
- react-redux
- redux-thunk
- axios
- eslint config depends on airbnb configuration

### Folder logic:
```
 ┣ assets - icons, images
 ┣ components - shared and reusable components
 ┣ hooks - custom hooks
 ┃ ┗ useTypedSelector.ts
 ┣ layouts - page layouts
 ┣ pages - page views
 ┃ ┗ Home
 ┃ ┃ ┣ Home.tsx
 ┃ ┃ ┗ index.ts
 ┣ router - react-router
 ┃ ┗ index.tsx
 ┣ services - api services folder with axios instance
 ┃ ┗ api.ts
 ┣ store - redux store with basic reducer and typing setup
 ┃ ┣ sample
 ┃ ┃ ┣ sampleActions.ts
 ┃ ┃ ┣ sampleReducer.ts
 ┃ ┃ ┗ sampleTypes.ts
 ┃ ┗ index.ts
 ┣ styles - global styles folder
 ┃ ┣ lib - css from libraries, css reset, etc... 
 ┃ ┗ index.css
 ┣ types - global types folder
 ┣ utils - util functions
 ┃ ┣ constants - any app constants
 ┃ ┗ data - for any json or mock data
 ┣ App.test.tsx
 ┣ App.tsx
 ┣ index.tsx
 ┣ react-app-env.d.ts
 ┗ setupTests.ts
 ```

### Issues
Feel free for create your suggestions in issues or with pull request
