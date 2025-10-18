
import React from 'react';
import { X, AlertCircle } from 'lucide-react';

interface AlertBarProps {
  alert: {
    show: boolean;
    message: string;
  };
  setAlert: React.Dispatch<React.SetStateAction<{ show: boolean; message: string; }>>;
}

export const AlertBar: React.FC<AlertBarProps> = ({ alert, setAlert }) => {
  if (!alert.show) return null;

  return (
    <div className="bg-red-500 text-white p-3 rounded-lg mb-5 flex items-center justify-between shadow-lg animate-pulse">
      <div className="flex items-center">
        <AlertCircle className="mr-3" />
        <span>{alert.message}</span>
      </div>
      <button onClick={() => setAlert({ ...alert, show: false })} className="text-white hover:text-red-200">
        <X />
      </button>
    </div>
  );
};
