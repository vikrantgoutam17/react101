const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h2', {}, props.breed),
  ]);
};
const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt me'),
    React.createElement(Pet, {
      name: 'Vikrant',
      animal: 'human',
      breed: 'Asian',
    }),
    React.createElement(Pet, {
      name: 'Vikrant',
      animal: 'human',
      breed: 'Asian',
    }),
    React.createElement(Pet, {
      name: 'Vikrant',
      animal: 'human',
      breed: 'Asian',
    }),
    React.createElement(Pet, {
      name: 'Vikrant',
      animal: 'human',
      breed: 'Asian',
    }),
    React.createElement(Pet, {
      name: 'Vikrant',
      animal: 'human',
      breed: 'Asian',
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById('root'));
