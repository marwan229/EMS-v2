import React from 'react';
// Fix: Replaced BatteryHalf with BatteryMedium as it was not found in the module.
import { BatteryMedium, RefreshCw, Expand, ArrowUp } from 'lucide-react';
import { Card, CardAction } from '../Card';

interface BatterySystemCardProps {
    batteryLevel: number;
}

export const BatterySystemCard: React.FC<BatterySystemCardProps> = ({ batteryLevel }) => {
    const isCharging = true; // Simulating charging state for demo

    return (
        // Fix: Replaced BatteryHalf with BatteryMedium.
        <Card title="Battery System" icon={<BatteryMedium />} actions={
            <>
                <CardAction><RefreshCw size={16} /></CardAction>
                <CardAction><Expand size={16} /></CardAction>
            </>
        }>
            <div className="flex flex-col items-center justify-center h-48">
                 <div className="w-full flex justify-between items-center px-2 mb-2 text-sm text-gray-600">
                    <span className={`font-semibold ${isCharging ? 'text-green-600' : 'text-yellow-600'}`}>
                        {isCharging ? 'Charging' : 'Discharging'}
                    </span>
                    <span>
                        Est. Time: {isCharging ? '1h 25m' : '3h 10m'}
                    </span>
                </div>
                <div className="w-24 h-40 border-4 border-gray-700 rounded-xl relative p-1">
                    <div
                        className="absolute bottom-1 left-1 right-1 bg-gradient-to-t from-purple-500 to-purple-400 rounded-md transition-all duration-500"
                        style={{ height: `calc(${batteryLevel}% - 8px)` }}
                    ></div>
                     {isCharging && (
                        <ArrowUp size={24} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-50 animate-pulse" />
                    )}
                </div>
                <div className="text-3xl font-bold mt-3 text-gray-800">{batteryLevel}%</div>
            </div>
             <div className="grid grid-cols-3 gap-2 mt-2 text-center text-xs border-t pt-4">
                <div>
                    <p className="text-gray-500">Voltage</p>
                    <p className="font-semibold text-gray-700">700V</p>
                </div>
                <div>
                    <p className="text-gray-500">SOH</p>
                    <p className="font-semibold text-gray-700">92%</p>
                </div>
                <div>
                    <p className="text-gray-500">Temp</p>
                    <p className="font-semibold text-gray-700">25°C</p>
                </div>
            </div>
        </Card>
    );
};