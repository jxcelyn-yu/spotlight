// ArtistPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ArtistPage() {
  const [artistData, setArtistData] = useState(null);
  const { artistName } = useParams();

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        // Fetch data for the artist based on the artistName parameter
        // Example: Fetch artist data from Spotify API
        const response = await fetch(`https://api.spotify.com/v1/search?q=${artistName}&type=artist&limit=1`);
        if (response.ok) {
          const data = await response.json();
          if (data.artists && data.artists.items && data.artists.items.length > 0) {
            setArtistData(data.artists.items[0]);
          } else {
            console.error('No artist found with the given name:', artistName);
          }
        } else {
          console.error('Failed to fetch artist data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching artist data:', error);
      }
    };
  
    fetchArtistData();
  }, [artistName]);

  return (
    <div className="artist-page">
      <h1>{artistName}</h1>
      {artistData && (
        <div>
          <img src={artistData.images[0].url} alt={artistData.name} />
          <p>Popularity: {artistData.popularity}</p>
          {/* Display other relevant artist information */}
        </div>
      )}
    </div>
  );
}

export default ArtistPage;
