# free-game-website

A ```React-Typescript``` application that allows users to filter through a list of PC/Web Browser based games provided by [freetogame.com/api-doc](https://freetogame.com/api-doc).

I made this application as a side-project to help solidify my knowledge of ```React``` and ```Typescript```, as I know I will be using them both in conjunction with one-another for many years to come *post graduation*.

## Visit the Deployed Website
<a href="https://tayloradam1999.github.io/free-game-website/">Link to Website</a>

## Development & Features
**Project Setup**
  
- Utilized ```Babel``` and ```core-js``` to transpile the code to ECMAScript 6.
  
- Utilized ```ESLint``` and ```Prettier``` to enforce code quality.
  
- Utilized ```Webpack``` to bundle the code into a single file.
  
- Utilized ```yarn``` as my package manager instead of ```npm``` for my first time (*ps, i loved it!*)
  
**Project Development**

- Utilized ```React``` to create the front-end of the application.

- Implemented **Responsive Design** using ```styled-components``` at these custom breakpoints:
  
```javascript
export const breakpoints = {
  tablet: '720px',
  desktop: '1024px',
}
```  
  
- Utilized ```axios``` to create my ```useFetch``` hook to pull data from the API.
  
- **Filters:**
  - Platform
    - *Browser (Web)*
    - *Windows (PC)*
  - Genre
    - *MMO*
    - *MMORPG*
    - *Shooter*
    - *Strategy*
    - *Moba*
    - *Card Games*
    - *Racing*
    - *Sports*
    - *Social*
    - *Fighting*
  - Sort By:
    - *Relevance*
    - *Popularity*
    - *Release Date*
    - *Alphabetical*
  
- Utilized ```Styled-Components``` to style the application.
  
- Implemented ```HOC``` to handle ```getDerivedStateFromError``` and ```componentDidCatch``` for error handling.
  
- Utilized ```React-Router``` to handle the routing of the application (even though this is a single page application).
  
## Packages Used
**Dependencies**
  
[@babel/polyfill](https://www.npmjs.com/package/@babel/polyfill) |
[axios](https://axios-http.com/docs/intro) |
[core-js](https://www.npmjs.com/package/core-js) |
[react](https://reactjs.org/docs/getting-started.html) |
[react-dom](https://reactjs.org/docs/getting-started.html) |
[react-router-dom](https://reacttraining.com/react-router/web/api/BrowserRouter) |
[styled-components](https://www.npmjs.com/package/styled-components) |
  
**Dev Dependencies**
  
[@babel/core](https://www.npmjs.com/package/@babel/core) |
[@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) |
[@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react) |
[@babel/preset-typescript](https://www.npmjs.com/package/@babel/preset-typescript) |
[@types/axios](https://www.npmjs.com/package/@types/axios) |
[@types/react](https://www.npmjs.com/package/@types/react) |
[@types/react-dom](https://www.npmjs.com/package/@types/react-dom) |
[@types/react-router-dom](https://www.npmjs.com/package/@types/react-router-dom) |
[@types/styled-components](https://www.npmjs.com/package/@types/styled-components) |
[@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) |
[@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) |
[babel-loader](https://www.npmjs.com/package/babel-loader) |
[babel-plugin-styled-components](https://www.npmjs.com/package/babel-plugin-styled-components) |
[eslint](https://www.npmjs.com/package/eslint) |
[eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) |
[eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) |
[gh-pages](https://www.npmjs.com/package/gh-pages) |
[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) |
[html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin) |
[prettier](https://www.npmjs.com/package/prettier) |
[typescript](https://www.npmjs.com/package/typescript) |
[webpack](https://www.npmjs.com/package/webpack) |
[webpack-cli](https://www.npmjs.com/package/webpack-cli) |
[webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)