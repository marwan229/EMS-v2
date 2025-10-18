import React from 'react';
import { BatteryCharging, Battery, AlertTriangle, DollarSign, Leaf, Plug, LineChart, Bolt, Thermometer, Zap, RotateCw, TrendingUp } from 'lucide-react';
import { LogType } from '../types';

interface ControlsProps {
    onBatteryUpdate: (level: number) => void;
    onSimulateFault: () => void;
    onReset: () => void;
    addLogEntry: (message: string, type: LogType) => void;
    onConsumptionUpdate: (increment: number) => void;
}

const ControlButton: React.FC<{
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
    colorClasses: string;
}> = ({ icon, label, onClick, colorClasses }) => (
    <button
        onClick={onClick}
        className={`flex items-center px-4 py-2 text-white font-semibold rounded-lg shadow-md hover:-translate-y-0.5 transform transition ${colorClasses}`}
    >
        {icon}
        <span className="ml-2">{label}</span>
    </button>
);

export const Controls: React.FC<ControlsProps> = ({ onBatteryUpdate, onSimulateFault, onReset, addLogEntry, onConsumptionUpdate }) => {
    return (
        <div className="flex flex-wrap justify-center gap-3 mt-6">
            <ControlButton icon={<BatteryCharging size={18} />} label="Simulate Charging" onClick={() => onBatteryUpdate(70)} colorClasses="bg-blue-500 hover:bg-blue-600" />
            <ControlButton icon={<Battery size={18} />} label="Simulate Discharging" onClick={() => onBatteryUpdate(40)} colorClasses="bg-blue-500 hover:bg-blue-600" />
            <ControlButton icon={<AlertTriangle size={18} />} label="Simulate Fault" onClick={onSimulateFault} colorClasses="bg-yellow-500 hover:bg-yellow-600" />
            <ControlButton icon={<DollarSign size={18} />} label="Simulate Price Change" onClick={() => addLogEntry('Energy cost changed to $0.15/kWh', 'info')} colorClasses="bg-green-500 hover:bg-green-600" />
            <ControlButton icon={<Leaf size={18} />} label="Simulate Carbon Reduction" onClick={() => addLogEntry('CO2 savings increased to 260 kg', 'info')} colorClasses="bg-teal-500 hover:bg-teal-600" />
            <ControlButton icon={<Plug size={18} />} label="Simulate Load Change" onClick={() => addLogEntry('Load distribution changed due to demand fluctuation', 'info')} colorClasses="bg-pink-500 hover:bg-pink-600" />
            <ControlButton icon={<LineChart size={18} />} label="Simulate Pricing" onClick={() => addLogEntry('Time-of-use pricing updated from market', 'info')} colorClasses="bg-orange-500 hover:bg-orange-600" />
            <ControlButton icon={<Bolt size={18} />} label="Simulate Demand" onClick={() => addLogEntry('Peak demand forecast updated to 85%', 'info')} colorClasses="bg-red-500 hover:bg-red-600" />
            <ControlButton icon={<Thermometer size={18} />} label="Simulate Efficiency" onClick={() => addLogEntry('Equipment efficiency metrics updated', 'info')} colorClasses="bg-indigo-500 hover:bg-indigo-600" />
            <ControlButton icon={<Zap size={18} />} label="Simulate DR Event" onClick={() => addLogEntry('Demand Response event activated.', 'warning')} colorClasses="bg-purple-500 hover:bg-purple-600" />
            <ControlButton icon={<TrendingUp size={18} />} label="Add 50kWh" onClick={() => onConsumptionUpdate(50)} colorClasses="bg-cyan-500 hover:bg-cyan-600" />
            <ControlButton icon={<RotateCw size={18} />} label="Reset" onClick={onReset} colorClasses="bg-gray-600 hover:bg-gray-700" />
        </div>
    );
}