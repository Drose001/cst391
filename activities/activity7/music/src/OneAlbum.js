import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const OneAlbum = ({ albumList }) => {
  const { albumId } = useParams();
  const [selectedTrack, setSelectedTrack] = useState(null);

  const album = albumList.find(
    (a) => (a.albumId ?? a.id)?.toString() === albumId
  );

  if (!album) {
    return <h2>Album not found</h2>;
  }

  return (
    <div>
      <h2>{album.title}</h2>

      <img
        src={album.image}
        alt={album.title}
        style={{ width: '300px' }}
      />

      <p>{album.description}</p>

      <h3>Tracks</h3>

      {album.tracks && album.tracks.length > 0 ? (
        <ul>
          {album.tracks.map((track, index) => (
            <li
              key={index}
              onClick={() => setSelectedTrack(track)}
              style={{ cursor: 'pointer', color: 'blue' }}
            >
              {track.title}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tracks available for this album.</p>
      )}

      {selectedTrack && (
        <div>
          <h3>Lyrics</h3>
          <p>{selectedTrack.lyrics}</p>

          <h3>Video</h3>
          <iframe
            width="560"
            height="315"
            src={selectedTrack.video}
            title="Track Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default OneAlbum;