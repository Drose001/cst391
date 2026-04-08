import React from 'react';
import { useParams } from 'react-router-dom';

const OneAlbum = ({ albumList }) => {
  const { albumId } = useParams();

  const album = albumList.find(
    (a) => (a.albumId ?? a.id)?.toString() === albumId
  );

  if (!album) {
    return <h2>Album not found</h2>;
  }

  return (
    <div>
      <h2>{album.title}</h2>
      <img src={album.image} alt={album.title} style={{ width: '300px' }} />
      <p>{album.description}</p>
    </div>
  );
};

export default OneAlbum;