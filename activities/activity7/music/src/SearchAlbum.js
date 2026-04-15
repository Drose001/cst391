import React from 'react';
import SearchForm from './SearchForm';
import AlbumList from './AlbumList';

const SearchAlbum = ({ searchPhrase, updateSearchResults, albumList, onEdit }) => {
  return (
    <div>
      <SearchForm onSubmit={updateSearchResults} />
      <AlbumList albumList={albumList} onEdit={onEdit} />
    </div>
  );
};

export default SearchAlbum;