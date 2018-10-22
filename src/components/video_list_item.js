import React from 'react';


const VideoListItem = (props) => {
    const video = props.video;
    const onUserSelected = props.onUserSelected;
    // console.log(video);    
    const imageUrl = video.snippet.thumbnails.default.url;
    const openUrl =`https://www.youtube.com/watch?v=`;
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;


    // const open = window.open(openUrl + videoId);



    return (
    <li onClick={() => onUserSelected(video)} className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageUrl} />
            </div>
            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
                 <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            </div>
        </div>
    </li>
    );
};

export default VideoListItem;
