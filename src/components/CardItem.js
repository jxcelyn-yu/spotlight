import React from 'react';
import PropTypes from 'prop-types';

function CardItem(props) {
  const { name, src, genres, popularity, topSong, album, releaseDate, otherTopTracks, spotifyLink } = props;

  // Provide default values for genres and otherTopTracks
  const genresList = Array.isArray(genres) ? genres : [];
  const otherTopTracksList = Array.isArray(otherTopTracks) ? otherTopTracks : [];

  return (
    <div className='cards__item__inner'>
      <div className='popularity'>
        <p>{popularity}</p>
      </div>
      <a href={spotifyLink} target="_blank" rel="noopener noreferrer">
        <img
          className='cards__item__img'
          src={src}
          alt={name}
        />
      </a>
      <div className="text">
        <p className='cards__item__text'><strong>Name:</strong> {name}</p>
        <p className='cards__item__text'><strong>Genres:</strong> {genres}</p>
        <p className='cards__item__text'><strong>Popularity:</strong> {popularity}</p>
        <p className='cards__item__text'><strong>Top Song:</strong> {topSong}</p>
        <p className='cards__item__text'><strong>Album:</strong> {album}</p>
        <p className='cards__item__text'><strong>Release Date:</strong> {releaseDate}</p>
        <p className='cards__item__text'><strong>Other Top Tracks:</strong> {otherTopTracks}</p>
      </div>
    </div>
  );
}

CardItem.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired,
  topSong: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  otherTopTracks: PropTypes.string.isRequired,
};

export default CardItem;