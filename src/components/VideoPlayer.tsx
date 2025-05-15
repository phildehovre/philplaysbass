import React, { useEffect, useRef, useState } from 'react'
import cloudinary from 'cloudinary-video-player'
import "cloudinary-video-player/cld-video-player.min.css"
import './VideoPlayer.css'



const VideoPlayer = () => {
    const [bgLoaded, setBgLoaded] = useState(false)


  useEffect(() => {
    const video = videoRef.current as HTMLImageElement | null;
    if (!video) return;
  
    const handleLoad = () => setBgLoaded(true);
  
    if (video.complete) {
      setBgLoaded(true);
    } else {
      video.addEventListener("load", handleLoad);
      return () => {
        video.removeEventListener("load", handleLoad);
      };
    }
  }, []);

    const cloudinaryRef = useRef<any>(undefined)
    const videoRef = useRef<any>(undefined)

    React.useEffect(() => {
        if (cloudinaryRef.current) return;
        cloudinaryRef.current = window.cloudinary;
        cloudinaryRef.current.videoPlayer(videoRef.current, {
            cloud_name: 'dtnif6mzm',
            public_id: 'Portfolio - 2024/promo_intro_clean_web_export_-_720WebShareName_lmzz2h',
            autoplay: true,
            muted: true,
            controls: false,
            loop: true,
        })
    }, [])

  return (
    <div id='player_ctn'>
        <video id='video_ctn' 
        className={`${bgLoaded? 'loaded': ''}`}
         ref={videoRef} data-cld-public-id="Portfolio - 2024/promo_intro_clean_web_export_-_720WebShareName_lmzz2h"/>
    </div>
  )
}

export default VideoPlayer