import React, { useState } from 'react';
import Card from './Card';
import './App.css';

const App = () => {
  const [albumList] = useState([
    {
      artistId: 0,
      title: 'Abbey Road',
      description: 'A famous album by The Beatles.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/The_Beatles_Abbey_Road_album_cover.jpg/500px-The_Beatles_Abbey_Road_album_cover.jpg',
    },
    {
      artistId: 1,
      title: 'Let It Be',
      description: 'Another classic Beatles album.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Beatles_-_Let_It_Be.png/500px-The_Beatles_-_Let_It_Be.png',
    },
    {
      artistId: 2,
      title: 'Yellow Submarine',
      description: 'Fun and unique album.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/TheBeatles-YellowSubmarinealbumcover.jpg/500px-TheBeatles-YellowSubmarinealbumcover.jpg',
    },
  ]);

  return (
    <div className="container">
      <h1 style={{ width: '100%' }}>Music App</h1>

      {albumList.map((album) => (
        <Card
          key={album.artistId}
          albumTitle={album.title}
          albumDescription={album.description}
          imgURL={album.image}
          buttonText="Play"
        />
      ))}
    </div>
  );
};

export default App;