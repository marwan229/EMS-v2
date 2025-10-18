import React from 'react';

interface StatusItemProps {
  color: 'green' | 'yellow' | 'red';
  label: string;
}

const StatusItem: React.FC<StatusItemProps> = ({ color, label }) => {
  const colorClasses = {
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500',
  };
  return (
    <div className="flex items-center bg-white shadow-md rounded-full py-2 px-4 text-sm text-gray-700 transition-transform hover:scale-105">
      <div className={`w-3 h-3 rounded-full mr-2 ${colorClasses[color]}`}></div>
      <span>{label}</span>
    </div>
  );
};

interface StatusIndicatorsProps {
  batteryLevel: number;
}

export const StatusIndicators: React.FC<StatusIndicatorsProps> = ({ batteryLevel }) => {
    const batteryStatusColor = batteryLevel > 70 ? 'green' : batteryLevel > 30 ? 'yellow' : 'red';

    return (
        <div className="flex flex-wrap gap-4 mb-5 justify-center">
            <StatusItem color="green" label="EMS Online" />
            <StatusItem color="green" label="Grid Connected" />
            <StatusItem color={batteryStatusColor} label={`Battery: ${batteryLevel}%`} />
            <StatusItem color="green" label="Energy Cost: 5.64 EGP/kWh" />
            <StatusItem color="green" label="CO2 Saved: 245 kg" />
            <StatusItem color="green" label="Peak Demand: 78%" />
        </div>
    );
}