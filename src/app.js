import React from 'react';
import { Router, Link } from '@reach/router';
import { render } from 'react-dom';
//import Pet from './Pet';
import SearchParams from './SearchPrams';
import Details from './Details';

const App = () => {
  // return React.createElement('div', {}, [
  //   React.createElement('h1', {}, 'Adopt me'),
  //   React.createElement(Pet, {
  //     name: 'Vikrant',
  //     animal: 'human',
  //     breed: 'Asian',
  //   }),
  //   React.createElement(Pet, {
  //     name: 'Vikrant',
  //     animal: 'human',
  //     breed: 'Asian',
  //   }),
  //   React.createElement(Pet, {
  //     name: 'Vikrant',
  //     animal: 'human',
  //     breed: 'Asian',
  //   }),
  //   React.createElement(Pet, {
  //     name: 'Vikrant',
  //     animal: 'human',
  //     breed: 'Asian',
  //   }),
  //   React.createElement(Pet, {
  //     name: 'Vikrant',
  //     animal: 'human',
  //     breed: 'Asian',
  //   }),
  // ]);
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt me!</Link>
        </header>
        {/* <Pet
        name="Raffel"
        animal="Dog"
        breed="Bull-dog"
      ></Pet>
      <Pet
        name="Pepper"
        animal="Bird"
        breed="Cockatiel"
      ></Pet>
      <Pet
        name="Doink"
        animal="Cat"
        breed="Mixed"
      ></Pet> */}
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById('root'));
