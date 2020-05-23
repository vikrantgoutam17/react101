import React from 'react';
export default function pet({
  name,
  animal,
  breed,
}) {
  // return React.createElement('div', {}, [
  //   React.createElement('h1', {}, name),
  //   React.createElement('h2', {}, animal),
  //   React.createElement('h2', {}, breed),
  // ]);
  return (
    <div>
      <h1>{'NAME -- ' + name.toUpperCase()}</h1>
      <h2>
        {'ANIMAl -- ' + animal.toUpperCase()}
      </h2>
      <h2>{'BREED -- ' + breed.toUpperCase()}</h2>
      <br />
      <br />
    </div>
  );
}
