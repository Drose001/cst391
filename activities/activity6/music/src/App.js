import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';

import './App.css';
import dataSource from './dataSource';
import NavBar from './NavBar';
import SearchAlbum from './SearchAlbum';
import NewAlbum from './NewAlbum';
import OneAlbum from './OneAlbum';

const AppContent = () => {
  const [albumList, setAlbumList] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [refresh, setRefresh] = useState(false);
  const [currentlySelectedAlbumId, setCurrentlySelectedAlbumId] = useState(null);

  const navigate = useNavigate();

  const loadAlbums = async () => {
    const result = await dataSource.get('/albums');
    if (result) {
      setAlbumList(result);
    }
  };

  useEffect(() => {
    loadAlbums();
  }, [refresh]);

  const updateSearchResults = (phrase) => {
    setSearchPhrase(phrase);
  };

  const updateSingleAlbum = (albumId) => {
    setCurrentlySelectedAlbumId(albumId);
    navigate(`/show/${albumId}`);
  };

  const filteredAlbums = albumList.filter((album) =>
    album.description.toLowerCase().includes(searchPhrase.toLowerCase())
  );

  return (
    <div>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <SearchAlbum
              searchPhrase={searchPhrase}
              updateSearchResults={updateSearchResults}
              albumList={filteredAlbums}
              onEdit={updateSingleAlbum}
            />
          }
        />
        <Route path="/newalbum" element={<NewAlbum />} />
        <Route path="/show/:albumId" element={<OneAlbum albumList={albumList} />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;