import React, { useState, useRef, useEffect } from 'react';
import pfp from './assets/pfp.jpg';
import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Card = () => {
  const [showMore, setShowMore] = useState(false);
  const moreInfoRef = useRef(null);

  useEffect(() => {
    if (moreInfoRef.current) {
      if (showMore) {
        moreInfoRef.current.style.maxHeight = `${moreInfoRef.current.scrollHeight}px`;
        moreInfoRef.current.style.opacity = '1';
      } else {
        moreInfoRef.current.style.maxHeight = '0';
        moreInfoRef.current.style.opacity = '0';
      }
    }
  }, [showMore]);

  return (
    
    <div className="flex-center h-screen flex-col">
        <h1 className="font-bold text-2xl text-[#fff] pb-[20px]">Personal Profile</h1>
        <div className="max-w-[340px] w-[90%] p-6 text-center rounded-2xl bg-[#2a2a2a] backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300 text-white">
        <img
            src={pfp}
            alt="profile"
            className="w-[120px] h-[120px] object-cover rounded-full mx-auto mb-4 border-2 border-white/40 shadow-lg"
        />
        <h2 className="bg-transparent text-xl font-semibold mb-1">Akshaj Deepak</h2>
        <p className="text-slate-200 bg-transparent text-sm leading-relaxed">
            A second year BTech Computer Science Engineering core student at SRM University Kattankulathur, Chennai, Tamil Nadu. 
            I specialize in UI/UX, Adobe suite and Java.
        </p>

        <div
            className={`transition-all duration-500 ease-in-out overflow-hidden mt-3 bg-transparent`}
            ref={moreInfoRef}
            style={{ maxHeight: showMore ? '1000px' : '0', opacity: showMore ? 1 : 0 }}
        >
            <p className="text-sm text-slate-100 flex items-center justify-center gap-2 mt-2">
            <FaEnvelope className="bg-transparent" /> astraljayyt@gmail.com
            </p>
            <p className="text-sm text-slate-100 flex items-center justify-center gap-2 mt-2">
            <FaPhone className = "rotate-90 bg-transparent" /> +91 XXXX XXXX
            </p>
            <p className="text-sm text-slate-100 flex items-center justify-center gap-2 mt-2">
            <FaMapMarkerAlt className = "bg-transparent"/> Chennai, Tamil Nadu
            </p>
            <p className="text-sm text-slate-100 flex items-center justify-center gap-2 mt-2">
            <FaGithub className = "bg-transparent"/>
            <a
                href="https://github.com/AstralJay"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-white"
            >
                My Github
            </a>  
            </p>
        </div>

        <button
            onClick={() => setShowMore(!showMore)}
            className="mt-5 px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 bg-white/10 border border-white/50 backdrop-blur hover:bg-white/20 hover:scale-105 active:scale-90 active:bg-white active:text-gray-700"
        >
            {showMore ? 'Show Less' : 'Show More'}
        </button>
        </div>
    </div>
  );
};

export default Card;


