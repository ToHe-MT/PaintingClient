import React from 'react';
import { Create } from '../../components/Buttons';
import Buyer_Card from '../../components/list_card/Buyer_Card';
import SearchBar from '../../components/SearchBar';

const Buyer = () => {
  return (
    <div>
      <h1>Buyers</h1>
      <div className='flex-container'>
        <SearchBar />
        <Create link='../buyer/create' title='+ Add buyer' />
      </div>
      <Buyer_Card/>
    </div>
  );
};

export default Buyer;
