
import React from 'react';
import { CloudSun, RefreshCw, Expand, Sun, Cloud, CloudRain } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Card, CardAction } from '../Card';

const data = [
  { name: '6am', temp: 18, irradiance: 120 },
  { name: '9am', temp: 21, irradiance: 580 },
  { name: '12pm', temp: 23, irradiance: 820 },
  { name: '3pm', temp: 25, irradiance: 780 },
  { name: '6pm', temp: 22, irradiance: 420 },
  { name: '9pm', temp: 19, irradiance: 80 },
];

const ForecastItem: React.FC<{ time: string; icon: React.ReactNode; temp: string; }> = ({ time, icon, temp }) => (
    <div className="text-center bg-gray-50 p-2 rounded-lg flex flex-col items-center">
        <p className="text-sm font-semibold text-gray-600">{time}</p>
        <div className="my-1 text-yellow-500">{icon}</div>
        <p className="text-lg font-bold text-gray-800">{temp}</p>
    </div>
);

export const WeatherCard: React.FC = () => {
    return (
        <Card title="Weather Conditions" icon={<CloudSun />} actions={
            <>
                <CardAction><RefreshCw size={16} /></CardAction>
                <CardAction><Expand size={16} /></CardAction>
            </>
        }>
            <div className="h-60 -ml-4">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }}/>
                        <YAxis yAxisId="left" unit="°C" stroke="#e74c3c" tick={{ fill: '#6b7280', fontSize: 12 }} />
                        <YAxis yAxisId="right" orientation="right" unit="W/m²" stroke="#f1c40f" tick={{ fill: '#6b7280', fontSize: 12 }} />
                        <Tooltip />
                        <Legend wrapperStyle={{fontSize: "14px"}}/>
                        <Line yAxisId="left" type="monotone" dataKey="temp" name="Temperature" stroke="#e74c3c" strokeWidth={2} />
                        <Line yAxisId="right" type="monotone" dataKey="irradiance" name="Irradiance" stroke="#f1c40f" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
             <div className="grid grid-cols-4 gap-2 mt-4">
                <ForecastItem time="Now" icon={<Sun size={24}/>} temp="23°" />
                <ForecastItem time="+1h" icon={<Sun size={24}/>} temp="24°" />
                <ForecastItem time="+2h" icon={<CloudSun size={24}/>} temp="25°" />
                <ForecastItem time="+4h" icon={<Cloud size={24}/>} temp="23°" />
            </div>
        </Card>
    );
};
