import React from 'react'
import Reveal from '../../../../components/Reveal'

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
            <div className={`flex flex-col gap-4 sm:gap-5 md:gap-6 w-full lg:w-[60%] ${className}`}>
                <Reveal animation="fadeIn" duration="fast" delay={100}>
                    <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-center lg:text-left text-black leading-tight">
                        {title}
                    </h3>
                </Reveal>
                <div className="flex items-center justify-center">
                    <Reveal animation="slideUp" duration="fast" delay={200}>
                        <img
                            src={graphicSrc}
                            alt={graphicAlt}
                            className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
                        />
                    </Reveal>
                </div>
            </div>
        )
    }

    if (type === 'card') {
        return (
            <div tabIndex={0} className={`bg-[#002266] p-4 sm:p-6 md:p-8 rounded-lg w-full lg:w-[40%] cursor-pointer hover:scale-102 focus:scale-102 transition-all duration-300 ease-out ${className}`}>
                <div className="flex flex-col h-full p-3 sm:p-4 md:p-5 gap-4 sm:gap-5 md:gap-6 border-1 border-white">
                    <Reveal animation="slideRight" duration="fast" delay={100}>
                        <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-5 md:mb-6">
                            {title}
                        </h3>
                    </Reveal>
                    <div className="text-white space-y-3 sm:space-y-4">
                        {Array.isArray(content) ? (
                            content.map((item, index) => (
                                <Reveal key={index} animation="slideRight" duration="fast" delay={200}>
                                <div className="flex items-start gap-2 sm:gap-3">
                                    <span className="text-orange-400 font-bold text-sm sm:text-base">•</span>
                                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">{item}</p>
                                </div>
                                </Reveal>
                            ))
                        ) : (
                            <p className="text-sm sm:text-base md:text-lg leading-relaxed">{content}</p>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    return null
}

export default AlternatingCard
