import React from 'react';
import { Create } from '../../components/Buttons';
import Painting_Card from '../../components/list_card/Painting_Card';
import SearchBar from '../../components/SearchBar';

const Paintings = () => {
  return (
    <div>
      <h1>Paintings</h1>
      <div className='flex-container'>
        <SearchBar />
        <Create link='../painting/create' title='+ Add Painting' />
      </div>
      <Painting_Card />
    </div>
  );
};

export default Paintings;
