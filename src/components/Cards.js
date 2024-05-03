import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import axios from 'axios';

function Cards({ searchTerm }) {
  const [topTracks, setTopTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vQcF3_LzZsrg9Nfhk2qLWC5bWSh9FDgZDZMJ4xhMJrkyEGU5rwfBIe5EszoJI3Q_yAdWJR7XxSmeMrw/pubhtml?gid=0&single=true');
        if (response.status === 200) {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(response.data, 'text/html');
          const table = htmlDocument.querySelector('table');
          const rows = table.querySelectorAll('tr');
          const tracks = [];
          for (let index = 2; index <= 11; index++) {
            const row = rows[index];
            const cells = row.querySelectorAll('td');
            const track = {
              name: cells[0].innerText,
              genre: cells[1].innerText,
              popularity: cells[2].innerText,
              topSong: cells[3].innerText,
              album: cells[4].innerText,
              releaseDate: cells[5].innerText,
              otherTopTracks: cells[6].innerText,
              image: cells[7].innerText,
              spotifyLink: cells[8].innerText, // Assuming the Spotify link is in the 9th column
            };
            tracks.push(track);
          }
          setTopTracks(tracks);
          setLoading(false);
        } else {
          setError('Failed to fetch data');
          setLoading(false);
        }
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='cards'>
      <h1><br/>Top Tracks<br/></h1>
      <p style={{textAlign:'center', width:'70vw'}}>Click the artist image to go to their Spotify page!</p>
      <br/>
      <br/>
      <ul className='cards__items'>
        <div className='popularity'></div>
        {topTracks.map((track, index) => (
         <CardItem
           key={index} 
           name={track.name} 
           genres={track.genre}
           popularity={track.popularity}
           topSong={track.topSong}
           album={track.album}
           releaseDate={track.releaseDate}
           otherTopTracks={track.otherTopTracks}
           src={track.image}
           spotifyLink={track.spotifyLink} // Pass the Spotify link as a prop
         />
        ))}
        <br/>
        <br/>
      </ul>
    </div>
  );
}

export default Cards;