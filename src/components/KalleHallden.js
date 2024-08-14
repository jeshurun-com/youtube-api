import React, { useState, useEffect } from 'react';
import '../kalle_hallden.css';

const KalleHallden = () => {
    const [videos, setVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState('');
    const [prevPageToken, setPrevPageToken] = useState('');
    const [currentPageToken, setCurrentPageToken] = useState('');
    const apiKey = 'AIzaSyAXepgz7hf27r3wCilGULIpGszcmXRB99g';
    const playlistId = 'UUWr0mx597DnSGLFk1WfvSkQ';

    useEffect(() => {
        fetchVideos(currentPageToken);
    }, [currentPageToken]);

    const fetchVideos = async (pageToken = '') => {
        try {
            const response = await fetch(
                `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}&pageToken=${pageToken}`
            );
            const data = await response.json();
            setVideos(data.items || []);
            setNextPageToken(data.nextPageToken || '');
            setPrevPageToken(data.prevPageToken || '');
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    return (
        <div className="video-container">
            <section className='video-section'>
                {videos.length > 0 ? (
                    videos.map((element, index) => (
                        <a key={index} target="_blank" href={`https://youtu.be/${element.snippet.resourceId.videoId}`} className="each-video">
                            <img src={element.snippet?.thumbnails?.medium?.url || 'default-thumbnail.jpg'} alt={element.snippet.title} className='video-thumbnail'/>
                            <h3 className='video-title'>{element.snippet?.title || 'No title'}</h3>
                        </a>
                    ))
                ) : (
                    <h3>Loading...</h3>
                )}
            </section>
            <div className="pagination-buttons">
                {prevPageToken && (
                    <button onClick={() => setCurrentPageToken(prevPageToken)}>Previous</button>
                )}
                {nextPageToken && (
                    <button onClick={() => setCurrentPageToken(nextPageToken)}>Next</button>
                )}
            </div>
        </div>
    );
};

export default KalleHallden;
