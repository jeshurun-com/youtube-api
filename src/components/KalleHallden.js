import React from 'react';
import '../kalle_hallden.css';

const KalleHallden = ({ videos }) => {
    return (
        <section className='video-section'>
            {videos.length > 0 ? (
                videos.map((element, index) => (
                    <a key={index} target="_blank" href={`https://youtu.be/${element.snippet.resourceId.videoId}`} className="each-video">
                        <img src={element.snippet.thumbnails.standard.url} alt={element.snippet.title} className='video-thumbnail'/>
                        <h3 className='video-title'>{element.snippet.title}</h3>
                    </a>
                ))
            ) : (
                <h3>Loading...</h3>
            )}
        </section>
    );
};

export default KalleHallden;
