
import React from 'react';
import { Leaf, RefreshCw, Expand, ArrowUp } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Card, CardAction } from '../Card';

const data = [
  { name: 'Mon', co2: 180 },
  { name: 'Tue', co2: 210 },
  { name: 'Wed', co2: 195 },
  { name: 'Thu', co2: 230 },
  { name: 'Fri', co2: 245 },
  { name: 'Sat', co2: 200 },
  { name: 'Sun', co2: 190 },
];

const CarbonMetric: React.FC<{ label: string; value: string; trendValue: string; }> = ({ label, value, trendValue }) => (
    <div className="bg-gray-50 p-3 rounded-lg">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-xl font-bold text-teal-600">{value}</p>
        <div className="flex items-center text-xs text-green-500">
            <ArrowUp size={12} className="mr-1"/>{trendValue}
        </div>
    </div>
);

export const CarbonFootprintCard: React.FC = () => {
    return (
        <Card title="Carbon Footprint" icon={<Leaf />} actions={
            <>
                <CardAction><RefreshCw size={16} /></CardAction>
                <CardAction><Expand size={16} /></CardAction>
            </>
        }>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <CarbonMetric label="CO2 Saved Today" value="245 kg" trendValue="15.2%"/>
                <CarbonMetric label="Carbon Intensity" value="128 g/kWh" trendValue="vs grid"/>
            </div>
            <div className="h-40 -ml-4">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} />
                        <YAxis unit="kg" tick={{ fill: '#6b7280', fontSize: 12 }} />
                        <Tooltip />
                        <Bar dataKey="co2" fill="#16a085" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};
