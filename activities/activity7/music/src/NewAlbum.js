import React, { useState } from 'react';
import dataSource from './dataSource';

const NewAlbum = (props) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [year, setYear] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newAlbum = {
      title: title,
      artist: artist,
      year: parseInt(year),
      description: '',
      image: '',
      tracks: []
    };

    console.log('Sending to API:', newAlbum);

    try {
      const response = await dataSource.post('/albums', newAlbum);
      console.log('Album saved:', response);

      if (props.onNewAlbum) {
        props.onNewAlbum(newAlbum);
      }

      setTitle('');
      setArtist('');
      setYear('');
    } catch (error) {
      console.error('Error creating album:', error);
    }
  };

  return (
    <div>
      <h2>Add New Album</h2>

      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Title:</label>
          <br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Artist:</label>
          <br />
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>

        <div>
          <label>Year:</label>
          <br />
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        <br />
        <button type="submit">Add Album</button>
      </form>
    </div>
  );
};

export default NewAlbum;