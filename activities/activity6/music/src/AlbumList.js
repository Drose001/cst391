import React from 'react';
import Card from './Card';

const AlbumList = ({ albumList, onEdit }) => {
  return (
    <div className="container">
      {albumList.map((album, index) => (
        <div key={album.albumId ?? album.id ?? index} onClick={() => onEdit(album.albumId ?? album.id)}>
          <Card
            albumTitle={album.title}
            albumDescription={album.description}
            imgURL={album.image}
            buttonText="Play"
          />
        </div>
      ))}
    </div>
  );
};

export default AlbumList;