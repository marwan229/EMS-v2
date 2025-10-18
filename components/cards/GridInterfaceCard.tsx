
import React from 'react';
import { TowerControl, RefreshCw, Expand } from 'lucide-react';
import { Card, CardAction } from '../Card';

const Metric: React.FC<{ label: string; value: string; trend?: string; }> = ({ label, value, trend }) => (
    <div className="bg-gray-50 p-3 rounded-lg text-center hover:bg-gray-100 transition">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-xl font-bold text-gray-800">{value}</p>
        {trend && <p className="text-xs text-gray-400">{trend}</p>}
    </div>
);


export const GridInterfaceCard: React.FC = () => {
    return (
        <Card title="Grid Interface" icon={<TowerControl />} actions={
            <>
                <CardAction><RefreshCw size={16} /></CardAction>
                <CardAction><Expand size={16} /></CardAction>
            </>
        }>
            <div className="grid grid-cols-2 gap-4">
                <Metric label="Grid Voltage" value="11 kV" trend="Stable" />
                <Metric label="Grid Frequency" value="50.0 Hz" trend="Stable" />
                <Metric label="Power Import" value="22.3 kW" />
                <Metric label="Power Export" value="0.0 kW" />
                <Metric label="Power Factor" value="0.97" />
                <Metric label="THD" value="2.8%" />
            </div>
        </Card>
    );
};
