import React, { useState, useEffect } from 'react';
import axios from 'axios';

const KalleHallden = ({ apiKey, channelId }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getPlaylistId = async () => {
            try {
                const response = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
                    params: {
                        key: apiKey,
                        id: channelId,
                        part: 'contentDetails'
                    }
                });
                const playlistId = response.data.items[0].contentDetails.relatedPlaylists.uploads;
                return playlistId;
            } catch (error) {
                console.error('Error fetching playlist ID:', error);
            }
        };

        const fetchVideos = async () => {
            const playlistId = await getPlaylistId();
            if (!playlistId) return;
            try {
                const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
                    params: {
                        key: apiKey,
                        playlistId: playlistId,
                        part: 'snippet',
                        maxResults: 10
                    }
                });
                setVideos(response.data.items);
            } catch (error) {
                console.error('Error while fetching videos:', error);
            }
        };

        fetchVideos();
    }, [apiKey, channelId]);

    return (
        <div>
            <h1>Kalle Hallden</h1>
            <ul>
                {videos.map(video => (
                    <li key={video.id}>
                        <h2>{video.snippet.title}</h2>
                        <p>{video.snippet.description}</p>
                        <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default KalleHallden;
