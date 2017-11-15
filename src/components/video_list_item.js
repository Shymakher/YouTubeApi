import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    // const videos = props.videos;
    const picURL = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-item media">
                <div className="media-left">
                    <img className="media-object" src={picURL} alt="pic"/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;