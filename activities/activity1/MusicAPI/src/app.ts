import express from 'express';
import albumsRouter from './albums/albums.routes';
import artistsRouter from './artists/artists.routes';
import logger from './middleware/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = 3000;

// if (process.env.NODE_ENV == 'development') {
//   // add logger middleware
//   app.use(logger);
//   console.log(`${process.env.GREETING} in dev mode`);
// }

if (process.env.NODE_ENV == 'development') {
  console.log(`${process.env.GREETING} in dev mode`);
}

app.get("/", (req, res) => {
  res.send("Music API is running");
});

// parse json bodies
app.use(express.json());

// parse url bodies
app.use(express.urlencoded({ extended: true }));

// enable all cors requests
app.use(cors());

// add helmet
app.use(helmet());

app.use('/', [albumsRouter, artistsRouter]);

// listen to port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
