import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const REDIRECT_URI = 'http://localhost:3000/callback'; // Must match one of the URIs registered with Spotify
const CLIENT_ID = 'd2e755cefd8b42dfb5e89d9ee26f15f5';
const CLIENT_SECRET = '61c8122f1d7343fdb7506be6c17c84f9'; // Keep this secure on the server-side

function CallbackHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    // Function to exchange the authorization code for an access token
    const exchangeCodeForToken = async (authorizationCode) => {
      try {
        const response = await axios.post('https://accounts.spotify.com/api/token', {
          grant_type: 'authorization_code',
          code: authorizationCode,
          redirect_uri: REDIRECT_URI,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
        });
        const accessToken = response.data.access_token;
        // Store the access token in local storage or state for future use
        localStorage.setItem('accessToken', accessToken);
        // Redirect the user to the main page or dashboard
        navigate('/');
      } catch (error) {
        console.error('Error exchanging code for token:', error);
      }
    };

    // Function to extract the authorization code from the URL query parameters
    const getAuthorizationCode = () => {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('code');
    };

    // Call the function to exchange the authorization code for an access token
    const authorizationCode = getAuthorizationCode();
    if (authorizationCode) {
      exchangeCodeForToken(authorizationCode);
    }
  }, [navigate]);

  return null; // This component doesn't render anything
}

export default CallbackHandler;
