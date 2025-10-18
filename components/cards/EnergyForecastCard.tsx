import React from 'react';
import { LineChart as ChartIcon, RefreshCw, Expand } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Card, CardAction } from '../Card';

const data = [
  { name: 'Now', forecast: 53.7, load: 48.2 },
  { name: '+1h', forecast: 54.2, load: 50.1 },
  { name: '+2h', forecast: 56.8, load: 55.3 },
  { name: '+3h', forecast: 58.7, load: 59.0 },
  { name: '+4h', forecast: 57.2, load: 56.5 },
  { name: '+5h', forecast: 55.4, load: 54.1 },
  { name: '+6h', forecast: 52.1, load: 51.0 },
];

const ForecastItem: React.FC<{ time: string; value: string; }> = ({ time, value }) => (
    <div className="text-center bg-gray-50 p-2 rounded-lg">
        <p className="text-sm font-semibold text-gray-600">{time}</p>
        <p className="text-lg font-bold text-blue-600">{value}</p>
    </div>
);

export const EnergyForecastCard: React.FC = () => {
    return (
        <Card title="Energy Forecast" icon={<ChartIcon />} actions={
            <>
                <CardAction><RefreshCw size={16} /></CardAction>
                <CardAction><Expand size={16} /></CardAction>
            </>
        }>
            <div className="h-60 -ml-4">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <defs>
                            <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3498db" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#3498db" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#e84393" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#e84393" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} />
                        <YAxis unit="kW" tick={{ fill: '#6b7280', fontSize: 12 }} />
                        <Tooltip />
                        <Legend wrapperStyle={{fontSize: "14px"}}/>
                        <Area type="monotone" dataKey="forecast" name="Generation" stroke="#3498db" fill="url(#colorForecast)" />
                        <Area type="monotone" dataKey="load" name="Load" stroke="#e84393" fill="url(#colorLoad)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-600 mb-2 text-center">Hourly Generation Forecast</h4>
                <div className="grid grid-cols-4 gap-2">
                    <ForecastItem time="+1 Hour" value="54.2 kW" />
                    <ForecastItem time="+6 Hours" value="52.1 kW" />
                    <ForecastItem time="+12 Hours" value="49.5 kW" />
                    <ForecastItem time="+24 Hours" value="51.8 kW" />
                </div>
            </div>
        </Card>
    );
};