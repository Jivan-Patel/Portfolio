import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import { youtubeData } from "../../data/content";
import { FaYoutube, FaExternalLinkAlt } from "react-icons/fa";

const YouTube = () => {
    return (
        <SectionWrapper id="youtube" className="bg-secondary/20">
            <div className="w-full">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-main mb-2">
                            YouTube <span className="text-red-500">Channel</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-md">
                            Sharing my coding journey, tutorials, and project showcases through video content.
                        </p>
                    </div>
                    <a
                        href={youtubeData.channelLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all duration-300 shadow-lg shadow-red-600/30 hover:scale-105 active:scale-95 group font-semibold"
                    >
                        <FaYoutube className="text-xl group-hover:animate-pulse" />
                        <span>Visit Channel</span>
                        <FaExternalLinkAlt className="text-xs opacity-70" />
                    </a>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {youtubeData.videos.map((video) => (
                        <div key={video.id} className="video-card group flex flex-col h-full">
                            {/* Video Embed Container */}
                            <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-700/50 group-hover:border-red-500/40 transition-all duration-500 shadow-xl bg-black">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${video.videoId}`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
                                ></iframe>

                                {/* Hover Gradient Overlay (Subtle) */}
                                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Info Container */}
                            <div className="mt-5 flex-grow">
                                <h3 className="text-lg font-bold text-main group-hover:text-red-500 transition-colors line-clamp-2 leading-tight">
                                    {video.title}
                                </h3>
                                <div className="mt-2 w-12 h-1 bg-red-600/20 group-hover:w-full group-hover:bg-red-600 transition-all duration-500 rounded-full" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Videos Button */}
                <div className="mt-16 flex justify-center">
                    <a
                        href={youtubeData.channelLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 border-2 border-red-600/30 hover:border-red-600 text-main hover:bg-red-600 hover:text-white rounded-full font-bold transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-red-600/20"
                    >
                        <span>View All Videos</span>
                        <FaYoutube className="text-xl" />
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default YouTube;
