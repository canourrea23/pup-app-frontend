import React from 'react';
import './PuppyList.css';

const PuppyList = (props) => {
  return (
    <>
      <h1>Puppy List</h1>
      <div className='PuppyList-grid'>
        {props.puppies.map(puppy =>
          <div>
            <li>Puppy Name: {puppy.name}</li>
            <li>Breed: {puppy.breed}</li>
            <li>Age: {puppy.age}</li>
          </div>
        )}
      </div>
    </>
  );
}

export default PuppyList;