# free-game-website

A ```React-Typescript``` application that allows users to filter through a list of PC/Web Browser based games provided by [freetogame.com/api-doc](https://freetogame.com/api-doc).

## Reason for creation

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
  
## Dependencies
| Library/Framework             |  Version  |
| ----------------------------- | --------- | 
| @babel/polyfill               |  ^7.12.1  |
| axios                         |  ^0.26.1  |
| core-js                       |  ^3.21.1  |
| react                         |  ^18.0.0  |
| react-dom                     |  ^18.0.0  |
| react-router-dom              |   5.2.0   |
| styled-components             |  ^5.3.5   |


## devDependencies
| Library/Framework                   |     Version     |
| ----------------------------------- | --------------- | 
| @babel/core                         |     ^7.17.9     |
| @babel/preset-env                   |     ^7.16.11    |
| @babel/preset-react                 |     ^7.16.7     |
| @babel/preset-typescript            |     ^7.16.7     |
| @types/axios                        |     ^0.14.0     |
| @types/react                        |     ^18.0.1     |
| @types/react-dom                    |     ^18.0.0     |
| @types/react-router-dom             |     ^5.3.3      |
| @types/styled-components            |     ^5.1.25     |
| @typescript-eslint/eslint-plugin    |     ^5.18.0     |
| @typescript-eslint/parser           |     ^5.18.0     |
| babel-loader                        |     ^8.2.4      |
| babel-plugin-styled-components      |     ^2.0.7      |
| eslint                              |     ^8.13.0     |
| eslint-config-prettier              |     ^8.5.0      |
| eslint-plugin-react                 |     ^7.29.4     |
| eslint-plugin-react-hooks           |     ^4.4.0      |
| gh-pages                            |     ^3.2.3      |
| html-webpack-plugin                 |     ^5.5.0      |
| prettier                            |     ^2.6.2      |
| typescript                          |     ^4.6.3      |
| webpack                             |     ^5.72.0     |
| webpack-cli                         |     ^4.9.2      |
| webpack-dev-server                  |     ^4.8.1      |