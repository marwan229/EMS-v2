
import React from 'react';
import { LineChart as ChartIcon, RefreshCw, Expand } from 'lucide-react';
import { Card, CardAction } from '../Card';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, ReferenceLine } from 'recharts';

const data = [
  { name: 'Now', demand: 78 },
  { name: '+1h', demand: 82 },
  { name: '+2h', demand: 85 },
  { name: '+3h', demand: 88 },
  { name: '+4h', demand: 92 },
  { name: '+5h', demand: 90 },
];

export const PeakDemandCard: React.FC = () => {
    return (
        <Card title="Peak Demand Forecasting" icon={<ChartIcon />} actions={
            <>
                <CardAction><RefreshCw size={16} /></CardAction>
                <CardAction><Expand size={16} /></CardAction>
            </>
        }>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Current Load</p>
                    <p className="text-xl font-bold text-gray-800">78%</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Next Peak (16:30)</p>
                    <p className="text-xl font-bold text-red-500">92%</p>
                </div>
            </div>
            <div className="h-40 -ml-4">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                         <defs>
                            <linearGradient id="colorDemand" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#c0392b" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#c0392b" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} />
                        <YAxis unit="%" domain={[70, 100]} tick={{ fill: '#6b7280', fontSize: 12 }} />
                        <Tooltip />
                        <ReferenceLine y={90} label="High" stroke="red" strokeDasharray="3 3" />
                        <Area type="monotone" dataKey="demand" stroke="#c0392b" fill="url(#colorDemand)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};
