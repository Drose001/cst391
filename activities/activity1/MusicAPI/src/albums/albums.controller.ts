import { Request, RequestHandler, Response } from 'express';
import { Album } from './albums.model';
import * as AlbumDAO from './albums.dao';
import * as TracksDAO from '../tracks/tracks.dao';
import { OkPacket } from 'mysql';

export const readAlbums: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    let albums: Album[];
    const albumId = parseInt(req.query.albumId as string);

    if (Number.isNaN(albumId)) {
      albums = await AlbumDAO.readAlbums();
    } else {
      albums = await AlbumDAO.readAlbumsByAlbumId(albumId);
    }

    await readTracks(albums);

    return res.status(200).json(albums);
  } catch (err) {
    console.error('[albums.controller][readAlbums][Error]', err);
    return res.status(500).json({
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

    return res.status(200).json(albums);
  } catch (err) {
    console.error('[albums.controller][readAlbumsByArtist][Error]', err);
    return res.status(500).json({
      message: 'There was an error when fetching albums',
    });
  }
};

export const readAlbumsByArtistSearch: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const albums = await AlbumDAO.readAlbumsByArtistSearch(
      `%${req.params.search}%`
    );

    await readTracks(albums);

    return res.status(200).json(albums);
  } catch (err) {
    console.error('[albums.controller][readAlbumsByArtistSearch][Error]', err);
    return res.status(500).json({
      message: 'There was an error when fetching albums',
    });
  }
};

export const readAlbumsByDescriptionSearch: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const albums = await AlbumDAO.readAlbumsByDescriptionSearch(
      `%${req.params.search}%`
    );

    await readTracks(albums);

    return res.status(200).json(albums);
  } catch (err) {
    console.error(
      '[albums.controller][readAlbumsByDescriptionSearch][Error]',
      err
    );
    return res.status(500).json({
      message: 'There was an error when fetching albums',
    });
  }
};

export const createAlbum: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const okPacket: OkPacket = await AlbumDAO.createAlbum(req.body);

    if (req.body.tracks && Array.isArray(req.body.tracks)) {
      for (const track of req.body.tracks) {
        await TracksDAO.createTrack(track, 0, okPacket.insertId);
      }
    }

    return res.status(200).json(okPacket);
  } catch (err) {
    console.error('[albums.controller][createAlbum][Error]', err);
    return res.status(500).json({
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

    if (req.body.tracks && Array.isArray(req.body.tracks)) {
      for (const track of req.body.tracks) {
        await TracksDAO.updateTrack(track);
      }
    }

    return res.status(200).json(okPacket);
  } catch (err) {
    console.error('[albums.controller][updateAlbum][Error]', err);
    return res.status(500).json({
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

    if (!Number.isNaN(albumId)) {
      const response = await AlbumDAO.deleteAlbum(albumId);
      return res.status(200).json(response);
    } else {
      throw new Error('Integer expected for albumId');
    }
  } catch (err) {
    console.error('[albums.controller][deleteAlbum][Error]', err);
    return res.status(500).json({
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