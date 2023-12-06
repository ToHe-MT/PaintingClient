import React from 'react';
import { Create } from '../../components/Buttons';
import Medium_Card from '../../components/list_card/Medium_Card';
import SearchBar from '../../components/SearchBar';

const Mediums = () => {
  return (
    <div>
      <h1>Mediums</h1>
      <div className='flex-container'>
        <SearchBar />
        <Create link='../medium/create' title='+ Add mediums' />
      </div>
      <Medium_Card />
    </div>
  );
};

export default Mediums;
