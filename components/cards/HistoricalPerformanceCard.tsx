import React from 'react';
import { BarChart, RefreshCw, Expand, Calendar } from 'lucide-react';
import { Card, CardAction } from '../Card';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const data = [
  { name: 'Jan', efficiency: 87, renewable: 55 },
  { name: 'Feb', efficiency: 89, renewable: 58 },
  { name: 'Mar', efficiency: 90, renewable: 60 },
  { name: 'Apr', efficiency: 91, renewable: 62 },
  { name: 'May', efficiency: 92, renewable: 64 },
  { name: 'Jun', efficiency: 92, renewable: 64 },
];

export const HistoricalPerformanceCard: React.FC = () => {
    return (
        <Card title="Historical Performance" icon={<BarChart />} actions={
            <>
                <CardAction><RefreshCw size={16} /></CardAction>
                <CardAction><Expand size={16} /></CardAction>
                <CardAction><Calendar size={16} /></CardAction>
            </>
        }>
            <div className="h-80 -ml-4">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} />
                        <YAxis unit="%" domain={[50, 100]} tick={{ fill: '#6b7280', fontSize: 12 }}/>
                        <Tooltip />
                        <Legend wrapperStyle={{fontSize: "14px"}}/>
                        <Line type="monotone" dataKey="efficiency" name="System Efficiency" stroke="#3498db" strokeWidth={2} />
                        <Line type="monotone" dataKey="renewable" name="Renewable Integration" stroke="#2ecc71" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};