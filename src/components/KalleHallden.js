import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { type } from '@testing-library/user-event/dist/type';

const KalleHallden = ({ apiKey, channelId }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(
                    'https://www.googleapis.com/youtube/v3/search', {
                        params: {
                            key: apiKey,
                            channelId: channelId,
                            part: 'snippet',
                            maxResults: 100,
                            order: 'date',
                            type: 'video'
                        }
                    }
                );
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
                    <li key={video.id.videoId}>
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