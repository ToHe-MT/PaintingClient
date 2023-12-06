import React from 'react';
import { Create } from '../../components/Buttons';
import Dimension_Card from '../../components/list_card/Dimension_Card';
import SearchBar from '../../components/SearchBar';

const Dimensions = () => {
  return (
    <div>
      <h1>Dimensions</h1>
      <div className='flex-container'>
        <SearchBar />
        <Create link='../dimension/create' title='+ Add Dimensions' />
      </div>
      <Dimension_Card/>
    </div>
  );
};

export default Dimensions;
