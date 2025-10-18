import React from 'react';
import { DollarSign, RefreshCw, Expand, ArrowDown, ArrowUp } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { Card, CardAction } from '../Card';

const data = [
  { name: 'Mon', cost: 2124 },
  { name: 'Tue', cost: 2007 },
  { name: 'Wed', cost: 1828 },
  { name: 'Thu', cost: 1951 },
  { name: 'Fri', cost: 1871 },
  { name: 'Sat', cost: 1701 },
  { name: 'Sun', cost: 1998 },
];

const CostMetric: React.FC<{ label: string; value: string; trend: 'up' | 'down' | 'stable'; trendValue: string; color: string }> = ({ label, value, trend, trendValue, color }) => (
    <div className="bg-gray-50 p-3 rounded-lg">
        <p className="text-sm text-gray-500">{label}</p>
        <p className={`text-xl font-bold ${color}`}>{value}</p>
        <div className={`flex items-center text-xs ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
            {trend === 'up' && <ArrowUp size={12} className="mr-1"/>}
            {trend === 'down' && <ArrowDown size={12} className="mr-1"/>}
            {trendValue}
        </div>
    </div>
);

export const EnergyCostCard: React.FC = () => {
    return (
        <Card title="Energy Cost Analysis" icon={<DollarSign />} actions={
            <>
                <CardAction><RefreshCw size={16} /></CardAction>
                <CardAction><Expand size={16} /></CardAction>
            </>
        }>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <CostMetric label="Today's Cost" value="1,998 EGP" trend="up" trendValue="8.7%" color="text-green-600" />
                <CostMetric label="Monthly Forecast" value="60,160 EGP" trend="down" trendValue="3.5%" color="text-green-600" />
            </div>
            <div className="h-40 -ml-4">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <defs>
                            <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#27ae60" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#27ae60" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} />
                        <YAxis unit=" EGP" tick={{ fill: '#6b7280', fontSize: 12 }} />
                        <Tooltip formatter={(value: number) => [`${value.toLocaleString()} EGP`, "Cost"]} />
                        <Area type="monotone" dataKey="cost" stroke="#27ae60" fillOpacity={1} fill="url(#colorCost)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};