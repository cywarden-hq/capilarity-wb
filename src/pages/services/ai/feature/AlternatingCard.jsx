import React from 'react'

const AlternatingCard = ({
    type, // 'content' or 'card'
    title,
    content,
    graphicSrc,
    graphicAlt = "Service illustration",
    className = ""
}) => {
    if (type === 'content') {
        return (
            <div className={`flex flex-col gap-6 w-full lg:w-[60%] ${className}`}>
                <h3 className="text-2xl lg:text-3xl font-semibold text-black leading-tight">
                    {title}
                </h3>
                <div className="flex items-center justify-center">
                    <img
                        src={graphicSrc}
                        alt={graphicAlt}
                    />
                </div>
            </div>
        )
    }

    if (type === 'card') {
        return (
            <div className={`bg-[#2E82B5] p-8 rounded-lg w-full lg:w-[40%] cursor-pointer hover:scale-102 transition-all duration-300 ease-out ${className}`}>
                <div className="flex flex-col h-full p-5 gap-6 border-1 border-white">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                        {title}
                    </h3>
                    <div className="text-white space-y-4">
                        {Array.isArray(content) ? (
                            content.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="text-orange-400 font-bold">•</span>
                                    <p className="text-lg leading-relaxed">{item}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-lg leading-relaxed">{content}</p>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    return null
}

export default AlternatingCard
