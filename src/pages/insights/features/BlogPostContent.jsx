import React from 'react';
import Reveal from '../../../components/Reveal';

const BlogPostContent = ({ post }) => {
    if (!post) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Post Not Found</h1>
                    <p className="text-gray-600">The requested blog post could not be found.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Hero Section */}
            <Reveal animation="slideUp" duration="slow" delay={100}>
                <div className="mb-12">
                    {/* Category and Date */}
                    <div className="flex items-center gap-4 mb-6">
                        <span className="bg-[#ff9d00] text-white px-3 py-1 rounded-full text-sm font-medium">
                            {post.type}
                        </span>
                        <span className="text-gray-500 text-sm">
                            {post.date} | {post.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {post.title}
                    </h1>

                    {/* Excerpt */}
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        {post.excerpt}
                    </p>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-8">
                            {post.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Hero Image */}
                    {post.heroImage && (
                        <div className="relative w-full h-64 md:h-80 lg:h-96 mb-12 rounded-2xl overflow-hidden">
                            <img
                                src={post.heroImage}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                </div>
            </Reveal>

            {/* Content */}
            <Reveal animation="slideUp" duration="fast">
                <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </Reveal>
        </div>
    );
};

export default BlogPostContent;
