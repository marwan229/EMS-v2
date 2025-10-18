import React from 'react';
import { Gauge, RefreshCw, Expand } from 'lucide-react';
import { Card, CardAction } from '../Card';

const EfficiencyBar: React.FC<{ label: string; value: number }> = ({ label, value }) => {
    const color = value >= 95 ? 'bg-green-500' : value >= 90 ? 'bg-yellow-500' : 'bg-red-500';
    return (
        <div className="mb-3">
            <div className="flex justify-between items-center text-sm mb-1">
                <span className="text-gray-600">{label}</span>
                <span className="font-bold text-gray-800">{value.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className={`${color} h-2.5 rounded-full`} style={{ width: `${value}%` }}></div>
            </div>
        </div>
    );
};

export const EquipmentEfficiencyCard: React.FC = () => {
    return (
        <Card title="Equipment Efficiency" icon={<Gauge />} actions={
            <>
                <CardAction><RefreshCw size={16} /></CardAction>
                <CardAction><Expand size={16} /></CardAction>
            </>
        }>
            <EfficiencyBar label="PV System" value={94.5} />
            <EfficiencyBar label="Wind System" value={91.2} />
            <EfficiencyBar label="Fuel Cell" value={55.3} />
            <hr className="my-3 border-gray-200" />
            <EfficiencyBar label="Inverter" value={98.0} />
            <EfficiencyBar label="Transformer" value={97.0} />
            <EfficiencyBar label="Charge Controller" value={99.0} />
            <EfficiencyBar label="VSC System" value={96.0} />
        </Card>
    );
};