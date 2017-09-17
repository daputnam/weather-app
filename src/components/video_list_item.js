import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imgUrl = video.snippet.thumbnails.default.url;
  // const video = props.video; replaced by the {video above}
  return (
    <li onClick={(e)=>{ onVideoSelect(video)}} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={imgUrl} className="media-object" />
        </div>
      </div>
      <div className="media-body">
        <div className="media-heading">
          {video.snippet.title}
        </div>
      </div>
    </li>
  )
}
export default VideoListItem;