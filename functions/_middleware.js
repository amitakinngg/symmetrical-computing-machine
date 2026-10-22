<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gallery</title>
        <style>
          body {
            margin: 0;
            padding: 20px;
            background-color: #141414;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
          }
          .gallery-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
            max-width: 600px;
            width: 100%;
          }
          .video-card {
            position: relative;
            display: block;
            width: 100%;
            border-radius: 8px;
            overflow: hidden;
            text-decoration: none;
            background-color: #000;
          }
          .video-thumbnail {
            width: 100%;
            height: auto;
            display: block;
          }
          .play-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3);
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .play-button {
            width: 60px;
            height: 60px;
            background: rgba(0, 0, 0, 0.7);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: background 0.3s ease;
          }
          .play-icon {
            width: 0;
            height: 0;
            border-top: 12px solid transparent;
            border-bottom: 12px solid transparent;
            border-left: 20px solid #ffffff;
            margin-left: 4px;
          }
          .video-card:hover .play-button {
            background: #ff0000; /* Youtube jaisa red color hover par */
          }
          .video-card:hover .play-icon {
            border-left-color: #fff; /* Arrow white ho jayega */
          }
        </style>
      </head>
      <body>
        <div class="gallery-container">
          
          <!-- Image 1 -->
          <a href="https://airlesscalmnesssuppose.com/hpaa7vz4a?key=634309170377320b138cd3ee2d7aa0fc" class="video-card">
            <img src="https://raw.githubusercontent.com/rehanqadirzr-alt/gifs/refs/heads/main/9.gif" alt="Video 1" class="video-thumbnail">
            <div class="play-overlay">
              <div class="play-button"><div class="play-icon"></div></div>
            </div>
          </a>
          <!-- Image 2 -->
          <a href="https://airlesscalmnesssuppose.com/hpaa7vz4a?key=634309170377320b138cd3ee2d7aa0fc" class="video-card">
            <img src="https://raw.githubusercontent.com/rehanqadirzr-alt/gifs/refs/heads/main/8.gif" alt="Video 2" class="video-thumbnail">
            <div class="play-overlay">
              <div class="play-button"><div class="play-icon"></div></div>
            </div>
          </a>
          <!-- Image 3 -->
          <a href="https://airlesscalmnesssuppose.com/hpaa7vz4a?key=634309170377320b138cd3ee2d7aa0fc" class="video-card">
            <img src="https://raw.githubusercontent.com/rehanqadirzr-alt/gifs/refs/heads/main/7.gif" alt="Video 3" class="video-thumbnail">
            <div class="play-overlay">
              <div class="play-button"><div class="play-icon"></div></div>
            </div>
          </a>
        </div>
      </body>
      </html>
