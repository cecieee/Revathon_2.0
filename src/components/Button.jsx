import React from 'react';
import { Link } from 'react-router-dom';

const TechButton = ({ children, onClick, className = "", size = "md", to, href }) => {
    const sizeClasses = {
        sm: "px-4 sm:px-6 py-2 text-xs sm:text-sm",
        md: "px-5 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base",
        lg: "px-6 sm:px-12 py-3 sm:py-4 text-base sm:text-xl",
    };

    const baseClasses = `group relative inline-flex items-center justify-center ${sizeClasses[size]} bg-transparent border border-white/20 overflow-hidden cursor-pointer hover:bg-white hover:border-white transition-all duration-300 ${className}`;

    const innerContent = (
        <>
            <span className="relative text-white font-mono tracking-widest uppercase group-hover:text-black transition-colors duration-300 whitespace-nowrap">
                {children}
            </span>
            <div className="absolute top-0 right-0 p-1">
                <div className="w-1 h-1 bg-white group-hover:bg-black transition-colors duration-300"></div>
            </div>
            <div className="absolute bottom-0 left-0 p-1">
                <div className="w-1 h-1 bg-white group-hover:bg-black transition-colors duration-300"></div>
            </div>
        </>
    );

    if (to) {
        return (
            <Link to={to} className={baseClasses} onClick={onClick}>
                {innerContent}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={baseClasses} onClick={onClick} target="_blank" rel="noopener noreferrer">
                {innerContent}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={baseClasses}>
            {innerContent}
        </button>
    );
};

export default TechButton;

