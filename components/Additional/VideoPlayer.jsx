'use client';

import { PauseIcon } from '@heroicons/react/24/outline';
import React, { useRef, useState } from 'react';
import clsx from "clsx";

const VideoPlayer = ({videoSrc, videoThumbnailSrc, videoType="video/mp4"}) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className="w-full overflow-hidden rounded-3xl bg-black shadow-2xl">
            <div className="relative group">
                {/* The Video Tag */}
                <video
                    ref={videoRef}
                    className="w-full h-auto cursor-pointer"
                    poster={videoThumbnailSrc}
                    playsInline
                    onClick={togglePlay}
                >
                    <source
                        src={videoSrc}
                        type={videoType}
                    />
                    Your browser does not support the video tag.
                </video>

                {/* Custom Overlay Controls */}
                <div className={clsx("absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity", isPlaying ? "opacity-0 group-hover:opacity-100 transition-opacity" : "")}>
                    <button
                        onClick={togglePlay}
                        className="bg-white/90 p-4 rounded-full text-black transition-transform flex justify-center items-center cursor-pointer hover:scale-110"
                    >
                        {isPlaying ? (
                            // pause icon
                            <PauseIcon className="h-5 w-5 object-contain text-primary-red" />
                        ) : (
                            // play icon
                            <img src="/icons/video/play.svg" alt="" className='h-5 w-5 object-contain translate-x-0.5' />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

// {clsx("text-4xl font-semibold text-center  capitalize", varient === "light" ? "text-primary-black" : "text-white")}

export default VideoPlayer;