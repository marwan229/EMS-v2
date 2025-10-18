import React from 'react';
import { Wind, RefreshCw, Expand } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card, CardAction } from '../Card';

const gaugeData = [{ value: 15.7 }, { value: 20 - 15.7 }];
const COLORS = ['#3498db', '#ecf0f1'];

export const WindSystemCard: React.FC = () => {
    return (
        <Card title="Wind System" icon={<Wind />} actions={
            <>
                <CardAction><RefreshCw size={16} /></CardAction>
                <CardAction><Expand size={16} /></CardAction>
            </>
        }>
            <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={gaugeData}
                            cx="50%"
                            cy="80%"
                            startAngle={180}
                            endAngle={0}
                            innerRadius="70%"
                            outerRadius="100%"
                            paddingAngle={0}
                            dataKey="value"
                        >
                            {gaugeData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none"/>
                            ))}
                        </Pie>
                         <text x="50%" y="75%" textAnchor="middle" dominantBaseline="middle" className="text-3xl font-bold fill-gray-700">
                           15.7 kW
                        </text>
                        <text x="50%" y="95%" textAnchor="middle" dominantBaseline="middle" className="text-sm fill-gray-500">
                           Current Output
                        </text>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 text-center border-t pt-4">
                <div>
                    <p className="text-sm text-gray-500">Efficiency</p>
                    <p className="text-xl font-bold text-gray-800">91.2%</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Wind Speed</p>
                    <p className="text-xl font-bold text-gray-800">12.4 m/s</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Daily Yield</p>
                    <p className="text-xl font-bold text-gray-800">110.2 kWh</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Uptime</p>
                    <p className="text-xl font-bold text-green-600">99.5%</p>
                </div>
            </div>
        </Card>
    );
};