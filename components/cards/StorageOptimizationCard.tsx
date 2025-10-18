
import React from 'react';
import { Battery, RefreshCw, Expand } from 'lucide-react';
import { Card, CardAction } from '../Card';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

const data = [
    { name: 'Cost Saving', value: 42.5, color: '#9b59b6' },
    { name: 'Peak Shaving', value: 28.3, color: '#3498db' },
    { name: 'Backup', value: 15.2, color: '#2ecc71' },
];

export const StorageOptimizationCard: React.FC = () => {
    return (
        <Card title="Storage Optimization" icon={<Battery />} actions={
            <>
                <CardAction><RefreshCw size={16} /></CardAction>
                <CardAction><Expand size={16} /></CardAction>
            </>
        }>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Optimal SOC</p>
                    <p className="text-xl font-bold text-gray-800">75%</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Economic Value</p>
                    <p className="text-xl font-bold text-green-600">$42.50</p>
                </div>
            </div>
            <div className="h-40 -ml-4">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} />
                        <YAxis unit="$" tick={{ fill: '#6b7280', fontSize: 12 }} />
                        <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
                        <Bar dataKey="value">
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};
