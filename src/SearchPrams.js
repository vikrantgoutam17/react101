import React, {
  useState,
  useEffect,
} from 'react';
import pet, {
  ANIMALS,
} from '@frontendmasters/pet';
import useDropDown from './useDropDown';
import Result from './Results';

const SearchParams = () => {
  const [location, setLocation] = useState(
    'Seattle, WA'
  );
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropDown] = useDropDown(
    'Animal',
    'dog',
    ANIMALS
  );
  const [
    breed,
    BreedDropDown,
    setBreed,
  ] = useDropDown('Breed', '', breeds);
  const [pets, setPets] = useState([]);
  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });
    setPets(animals || []);
  }
  useEffect(() => {
    setBreeds([]);
    setBreed('');
    pet
      .breeds(animal)
      .then(({ breeds: apibreeds }) => {
        const breedStrings = apibreeds.map(
          ({ name }) => name
        );
        setBreeds(breedStrings);
      }, console.error);
  }, [animal, setBreed, setBreeds]);
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) =>
              setLocation(event.target.value)
            }
          />
        </label>
        <AnimalDropDown />
        <BreedDropDown />

        <button>SUBMIT</button>
      </form>
      <Result pets={pets} />
    </div>
  );
};
export default SearchParams;
