import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { getBlogPostById } from './features/blogPosts';
import BlogPostContent from './features/BlogPostContent';

const BlogPost = () => {
    const { id } = useParams();
    const post = getBlogPostById(id);
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/insights');
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="relative overflow-hidden bg-black py-25">
                {/* Glowing orange effect at bottom left */}
                <div className="absolute -bottom-10 -left-10 w-70 h-70 bg-gradient-to-tr from-orange-500/30 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-50 h-50 bg-gradient-to-tr from-orange-400/50 to-transparent rounded-full blur-2xl"></div>

                {/* Glowing orange effect at top right */}
                <div className="absolute -top-10 -right-10 w-70 h-70 bg-gradient-to-tl from-orange-500/30 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute -top-10 -right-10 w-50 h-50 bg-gradient-to-tl from-orange-400/50 to-transparent rounded-full blur-2xl"></div>

                <h1 className="text-5xl text-center font-bold text-white mt-10">Blog Post</h1>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-8">
                <button
                    onClick={handleBackClick}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 mb-8 group cursor-pointer"
                >
                    <svg
                        className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm font-medium">All Posts</span>
                </button>
                <BlogPostContent post={post} />
            </div>
        </div>
    );
};

export default BlogPost;
