import React, { useEffect } from 'react';
import './App.css';
import JSMpeg from '@cycjimmy/jsmpeg-player';

const ffmpegIP = 'localhost';

const App = () => {
  useEffect(() => {
    var videoUrl = `ws://${ffmpegIP}:6789/`;
    var videoUrl1 = `ws://${ffmpegIP}:6790/`;
    var player = new JSMpeg.VideoElement('#video-canvas', videoUrl, {
      autoplay: true,
    });
    var player2 = new JSMpeg.VideoElement('#video-canvas2', videoUrl1, {
      autoplay: true,
    });
    console.log(player, player2);
  });

  return (
    <div id='body'>
      <div
        id='title'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '28px',
          fontWeight: 'bold',
          marginTop: '10px',
          marginBottom: '10px',
          color: 'blue',
        }}>
        Player stream RTSP
      </div>
      <div id='video-canvas' style={{ height: '280px', width: '440px' }}></div>
      <br />
      <div id='video-canvas2' style={{ height: '280px', width: '440px' }}></div>
    </div>
  );
};

export default App;
