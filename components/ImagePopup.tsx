'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ImagePopupProps {
  imageSrc: string;
  targetLink?: string;
}

const ImagePopup = ({ imageSrc, targetLink }: ImagePopupProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenImagePopup');

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShow(true);
        sessionStorage.setItem('hasSeenImagePopup', 'true');
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleRedirect = () => {
    window.location.href = targetLink || 'https://default-link.com';
  };

  return (
    <>
      {show && (
        <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center">
          <div
            className="relative max-w-[90%] sm:max-w-lg lg:max-w-2xl cursor-pointer rounded-xl overflow-hidden"
            onClick={handleRedirect}
          >
            <Image
              src={imageSrc}
              alt="Popup"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-xl shadow-lg"
            />
            <button
              className="absolute top-2 right-2 bg-white/80 hover:bg-white text-black p-1 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setShow(false);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImagePopup;
