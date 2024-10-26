"use client";

import React from "react";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
/**
 * Functional component to render the Youtube video frame
 * @returns 
 */
export const YoutubeFrame: React.FC = () => {
    return (
        <LiteYouTubeEmbed
            id="frLd3orsV6g"
            title="Y Engineering - Our Team in Shark Tank"
        />
    );
};