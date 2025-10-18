import React from 'react';
import { LineChart as ChartIcon, RefreshCw, Expand, History } from 'lucide-react';
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area } from 'recharts';
import { Card, CardAction } from '../Card';

const data = [
  { name: '10:00', PV: 16.8, Wind: 17.2, FC: 19.5 },
  { name: '10:05', PV: 17.2, Wind: 16.8, FC: 19.6 },
  { name: '10:10', PV: 17.5, Wind: 16.5, FC: 19.6 },
  { name: '10:15', PV: 17.3, Wind: 16.2, FC: 19.7 },
  { name: '10:20', PV: 17.6, Wind: 16.5, FC: 19.7 },
  { name: '10:25', PV: 17.9, Wind: 16.3, FC: 19.8 },
  { name: '10:30', PV: 18.0, Wind: 16.0, FC: 19.8 },
  { name: '10:35', PV: 18.1, Wind: 15.8, FC: 19.8 },
  { name: '10:40', PV: 18.2, Wind: 15.7, FC: 19.8 },
  { name: '10:45', PV: 18.2, Wind: 15.7, FC: 19.8 },
];

export const PowerTrendCard: React.FC = () => {
    const lastDataPoint = data[data.length - 1];
    const currentTotal = (lastDataPoint.PV + lastDataPoint.Wind + lastDataPoint.FC).toFixed(1);

    return (
        <Card title={`Power Generation Trends (${currentTotal} kW Total)`} icon={<ChartIcon />} actions={
            <>
                <CardAction><RefreshCw size={16} /></CardAction>
                <CardAction><Expand size={16} /></CardAction>
                <CardAction><History size={16} /></CardAction>
            </>
        }>
            <div className="h-80 -ml-4">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} />
                        <YAxis unit="kW" domain={[0, 'dataMax + 15']} tick={{ fill: '#6b7280', fontSize: 12 }} />
                        <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '0.5rem', borderColor: '#d1d5db' }} />
                        <Legend wrapperStyle={{fontSize: "14px"}} />
                        <Area type="monotone" dataKey="PV" stackId="1" stroke="#d4ac0d" fill="#f1c40f" strokeWidth={2} fillOpacity={0.7} />
                        <Area type="monotone" dataKey="Wind" stackId="1" stroke="#2980b9" fill="#3498db" strokeWidth={2} fillOpacity={0.7} />
                        <Area type="monotone" dataKey="FC" stackId="1" stroke="#16a085" fill="#1abc9c" strokeWidth={2} fillOpacity={0.7} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};