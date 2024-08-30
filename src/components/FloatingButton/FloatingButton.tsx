import React from 'react';

interface FloatingButtonProps {
    onClick: () => void;
    className: string
  }
  
  const FloatingButton: React.FC<FloatingButtonProps> = ({ className, onClick }) => {
    return (
    <div className={"fixed bottom-4 left-4 p-4" + `${className}`}>
      <button className="bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center" onClick={onClick} >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l-7-7m7 7l7-7m-7 7V5"></path>
        </svg>
      </button>
    </div>
  );
};

export default FloatingButton;