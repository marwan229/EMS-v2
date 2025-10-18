
import React from 'react';
import { Plug, RefreshCw, Expand } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { Card, CardAction } from '../Card';

const data = [
  { name: 'Critical', value: 12.4, color: '#2ecc71' },
  { name: 'Non-Critical', value: 8.7, color: '#f39c12' },
  { name: 'Deferrable', value: 5.2, color: '#e74c3c' },
  { name: 'Sheddable', value: 3.8, color: '#e67e22' },
];

export const LoadManagementCard: React.FC = () => {
    return (
        <Card title="Load Management" icon={<Plug />} actions={
            <>
                <CardAction><RefreshCw size={16} /></CardAction>
                <CardAction><Expand size={16} /></CardAction>
            </>
        }>
            <div className="h-64 -ml-4">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                        <XAxis type="number" hide />
                        <YAxis type="category" dataKey="name" width={80} tick={{ fill: '#6b7280', fontSize: 12 }} />
                        <Tooltip />
                        <Bar dataKey="value" background={{ fill: '#eee' }}>
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
