
import React from 'react';
// Fix: Replaced SolarPanel with SunMedium as it was not found in the module.
import { SunMedium, RefreshCw, Expand } from 'lucide-react';
import { Card, CardAction } from '../Card';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Mon', renewable: 58, selfConsumption: 75 },
  { name: 'Tue', renewable: 62, selfConsumption: 78 },
  { name: 'Wed', renewable: 59, selfConsumption: 76 },
  { name: 'Thu', renewable: 64, selfConsumption: 80 },
  { name: 'Fri', renewable: 68, selfConsumption: 85 },
  { name: 'Sat', renewable: 61, selfConsumption: 77 },
  { name: 'Sun', renewable: 64, selfConsumption: 82 },
];

export const RenewableIntegrationCard: React.FC = () => {
    return (
        // Fix: Replaced SolarPanel with SunMedium.
        <Card title="Renewable Integration" icon={<SunMedium />} actions={
            <>
                <CardAction><RefreshCw size={16} /></CardAction>
                <CardAction><Expand size={16} /></CardAction>
            </>
        }>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Renewable %</p>
                    <p className="text-xl font-bold text-blue-600">64.2%</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Self-Consumption</p>
                    <p className="text-xl font-bold text-green-600">78.5%</p>
                </div>
            </div>
            <div className="h-40 -ml-4">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} />
                        <YAxis unit="%" domain={[50, 90]} tick={{ fill: '#6b7280', fontSize: 12 }}/>
                        <Tooltip />
                        <Legend wrapperStyle={{fontSize: "12px"}}/>
                        <Area type="monotone" dataKey="renewable" name="Renewable %" stroke="#3498db" fill="#3498db" fillOpacity={0.3} />
                        <Area type="monotone" dataKey="selfConsumption" name="Self-Consumption %" stroke="#2ecc71" fill="#2ecc71" fillOpacity={0.3} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};
