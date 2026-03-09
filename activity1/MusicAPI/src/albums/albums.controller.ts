import { Request, RequestHandler, Response } from 'express';
import { Album } from './albums.model';
import { Track } from '../tracks/tracks.model';
import * as AlbumDAO from './albums.dao';
import * as TracksDAO from '../tracks/tracks.dao';
import { OkPacket } from 'mysql';

export const readAlbums: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    let albums;
    const albumId = parseInt(req.query.albumId as string);

    console.log('albumId', albumId);

    if (Number.isNaN(albumId)) {
      albums = await AlbumDAO.readAlbums();
    } else {
      albums = await AlbumDAO.readAlbumsByAlbumId(albumId);
    }

    await readTracks(albums);

    res.status(200).json(albums);
  } catch (err) {
    console.error('[albums.controller][readAlbums][Error] ', err);
    res.status(500).json({
      message: 'There was an error when fetching albums',
    });
  }
};

export const readAlbumsByArtist: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const albums = await AlbumDAO.readAlbumsByArtist(req.params.artist);

    await readTracks(albums);

    res.status(200).json(albums);
  } catch (err) {
    console.error('[albums.controller][readAlbumsByArtist][Error] ', err);
    res.status(500).json({
      message: 'There was an error when fetching albums',
    });
  }
};

export const readAlbumsByArtistSearch: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    console.log('search', req.params.search);

    const albums = await AlbumDAO.readAlbumsByArtistSearch(
      `%${req.params.search}%`
    );

    await readTracks(albums);

    res.status(200).json(albums);
  } catch (err) {
    console.error('[albums.controller][readAlbumsByArtistSearch][Error] ', err);
    res.status(500).json({
      message: 'There was an error when fetching albums',
    });
  }
};

export const readAlbumsByDescriptionSearch: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    console.log('search', req.params.search);

    const albums = await AlbumDAO.readAlbumsByDescriptionSearch(
      `%${req.params.search}%`
    );

    await readTracks(albums);

    res.status(200).json(albums);
  } catch (err) {
    console.error(
      '[albums.controller][readAlbumsByDescriptionSearch][Error] ',
      err
    );
    res.status(500).json({
      message: 'There was an error when fetching albums',
    });
  }
};

export const createAlbum: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    console.log('req.body', req.body);

    const okPacket: OkPacket = await AlbumDAO.createAlbum(req.body);

    console.log('album', okPacket);

    for (const track of req.body.tracks) {
      await TracksDAO.createTrack(track, 0, okPacket.insertId);
    }

    res.status(200).json(okPacket);
  } catch (err) {
    console.error('[albums.controller][createAlbum][Error] ', err);
    res.status(500).json({
      message: 'There was an error when creating albums',
    });
  }
};

export const updateAlbum: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const okPacket: OkPacket = await AlbumDAO.updateAlbum(req.body);

    console.log('req.body', req.body);
    console.log('album', okPacket);

    for (const track of req.body.tracks) {
      await TracksDAO.updateTrack(track);
    }

    res.status(200).json(okPacket);
  } catch (err) {
    console.error('[albums.controller][updateAlbum][Error] ', err);
    res.status(500).json({
      message: 'There was an error when updating albums',
    });
  }
};

export const deleteAlbum: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const albumId = parseInt(req.params.albumId as string);

    console.log('albumId', albumId);

    if (!Number.isNaN(albumId)) {
      const response = await AlbumDAO.deleteAlbum(albumId);
      res.status(200).json(response);
    } else {
      throw new Error('Integer expected for albumId');
    }
  } catch (err) {
    console.error('[albums.controller][deleteAlbum][Error] ', err);
    res.status(500).json({
      message: 'There was an error when deleting albums',
    });
  }
};

async function readTracks(albums: Album[]) {
  for (let i = 0; i < albums.length; i++) {
    const tracks = await TracksDAO.readTracks(albums[i].albumId);
    albums[i].tracks = tracks;
  }
}