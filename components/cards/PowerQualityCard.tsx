
import React from 'react';
import { Waves, RefreshCw, Expand } from 'lucide-react';
import { Card, CardAction } from '../Card';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
  { name: '10:00', vTHD: 2.0, cTHD: 3.2 },
  { name: '10:10', vTHD: 2.1, cTHD: 3.3 },
  { name: '10:20', vTHD: 2.0, cTHD: 3.4 },
  { name: '10:30', vTHD: 2.2, cTHD: 3.3 },
  { name: '10:40', vTHD: 2.1, cTHD: 3.4 },
  { name: '10:50', vTHD: 2.1, cTHD: 3.4 },
];

export const PowerQualityCard: React.FC = () => {
    return (
        <Card title="Power Quality Analysis" icon={<Waves />} actions={
            <>
                <CardAction><RefreshCw size={16} /></CardAction>
                <CardAction><Expand size={16} /></CardAction>
            </>
        }>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Voltage THD</p>
                    <p className="text-xl font-bold text-gray-800">2.1%</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Current THD</p>
                    <p className="text-xl font-bold text-gray-800">3.4%</p>
                </div>
            </div>
            <div className="h-40 -ml-4">
                 <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }}/>
                        <YAxis unit="%" domain={[0, 5]} tick={{ fill: '#6b7280', fontSize: 12 }}/>
                        <Tooltip />
                        <Legend wrapperStyle={{fontSize: "12px"}}/>
                        <Line type="monotone" dataKey="vTHD" name="Voltage THD" stroke="#3498db" strokeWidth={2} />
                        <Line type="monotone" dataKey="cTHD" name="Current THD" stroke="#e74c3c" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};
