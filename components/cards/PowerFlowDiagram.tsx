import React from 'react';
import { Network, RefreshCw, Expand, Wind, Fuel, Sun, Battery, TowerControl, Cpu } from 'lucide-react';
import { Card, CardAction } from '../Card';

const Source: React.FC<{ icon: React.ReactNode; label: string; value: string; color: string }> = ({ icon, label, value, color }) => (
  <div className={`flex flex-col items-center justify-center w-32 h-32 rounded-lg text-white shadow-lg transform hover:scale-105 transition-transform ${color}`}>
    {icon}
    <div className="font-semibold">{label}</div>
    <div className="text-sm mt-1 bg-black bg-opacity-20 px-2 py-0.5 rounded-full">{value}</div>
  </div>
);

const FlowItem: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="flex-1 text-center bg-gray-100 p-4 rounded-lg shadow-inner">
    <div className="font-bold text-gray-800">{title}</div>
    <div className="text-xs text-gray-600 mt-1">{subtitle}</div>
  </div>
);

const Arrow: React.FC = () => <div className="text-3xl text-gray-400 mx-4 hidden md:block">&rarr;</div>;
const DownArrow: React.FC = () => <div className="text-3xl text-gray-400 my-2 md:hidden">&darr;</div>;

export const PowerFlowDiagram: React.FC = () => {
  return (
    <Card title="Power Flow Diagram" icon={<Network />} actions={
        <>
            <CardAction><RefreshCw size={16} /></CardAction>
            <CardAction><Expand size={16} /></CardAction>
        </>
    }>
        <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-wrap justify-center gap-6">
                <Source icon={<Wind size={32} />} label="Wind 20 kW" value="15.7 kW" color="bg-blue-500" />
                <Source icon={<Fuel size={32} />} label="FC 20 kW" value="19.8 kW" color="bg-teal-500" />
                <Source icon={<Sun size={32} />} label="PV 20 kW" value="18.2 kW" color="bg-yellow-500" />
            </div>
            
            <div className="text-4xl text-gray-400">&darr;</div>

            <div className="w-full flex flex-col md:flex-row items-center">
                <FlowItem title="VSC Control" subtitle="Voltage Source Converter" />
                <Arrow />
                <DownArrow />
                <FlowItem title="3-Level NPC Inverter" subtitle="Efficient Power Conversion" />
                <Arrow />
                <DownArrow />
                <FlowItem title="Transformer" subtitle="11kV Delta-Delta" />
            </div>

            <div className="text-4xl text-gray-400 rotate-90 md:rotate-0">&harr;</div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                <div className="flex flex-col items-center justify-center bg-purple-100 text-purple-800 p-4 rounded-lg shadow-inner">
                    <Cpu size={32}/>
                    <div className="font-bold mt-2">AI-Based EMS</div>
                    <div className="text-xs text-center">LSTM & Fuzzy Logic</div>
                </div>
                <div className="flex flex-col items-center justify-center bg-pink-100 text-pink-800 p-4 rounded-lg shadow-inner">
                    <Battery size={32}/>
                    <div className="font-bold mt-2">Battery System</div>
                    <div className="text-xs">40 kWh Li-ion</div>
                </div>
                <div className="flex flex-col items-center justify-center bg-orange-100 text-orange-800 p-4 rounded-lg shadow-inner">
                    <TowerControl size={32}/>
                    <div className="font-bold mt-2">Grid Connection</div>
                    <div className="text-xs">11 kV / 50 Hz</div>
                </div>
            </div>
        </div>
    </Card>
  );
};