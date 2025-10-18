
import React from 'react';

interface CardProps {
  title: string;
  icon: React.ReactNode;
  actions?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, icon, actions, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl p-5 shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-1 ${className}`}>
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-700 flex items-center">
          <span className="text-blue-500 mr-3">{icon}</span>
          {title}
        </h3>
        {actions && <div className="flex gap-2">{actions}</div>}
      </div>
      {children}
    </div>
  );
};

export const CardAction: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => (
  <button onClick={onClick} className="bg-gray-100 w-8 h-8 rounded-md flex items-center justify-center text-gray-500 hover:bg-blue-500 hover:text-white transition-colors">
    {children}
  </button>
);
