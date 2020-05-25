import React from 'react';
import { render } from 'react-dom';
//import Pet from './Pet';
import SearchParams from './SearchPrams';

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
    <div>
      <h1>Adopt me!</h1>

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
      <SearchParams />
    </div>
  );
};
render(<App />, document.getElementById('root'));
